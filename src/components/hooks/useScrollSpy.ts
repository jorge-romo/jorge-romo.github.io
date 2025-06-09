import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds: string[], offset = 0) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      let currentId: string | null = null;
      for (const id of sectionIds) {
        if (typeof id !== 'string') {
          break;
        }

        let rect: { top: number; bottom: number } | null = null;
        if (id) {
          const el = document.getElementById(id);
          rect = el?.getBoundingClientRect() ?? null;
        } else {
          rect = {
            top: offset,
            bottom: 1,
          };
        }

        if (rect && rect.top - offset <= 0 && rect.bottom > 0) {
          currentId = id;
        }
      }
      setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
