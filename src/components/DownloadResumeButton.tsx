'use client';

import React from 'react';
import { Download } from 'lucide-react';
import { getFileNameFromPath } from '@/utilities';
import { personalInfo } from '@/data';

const DownloadResumeButton: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resume;
    link.download = getFileNameFromPath(personalInfo.resume);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      className="flex items-center justify-center gap-2 rounded-lg bg-zinc-100 px-4 py-2 text-sm text-secondary transition-colors duration-custom hover:bg-zinc-200 dark:bg-zinc-700/50 dark:text-zinc-300 dark:hover:bg-zinc-700/80"
      onClick={handleDownload}
    >
      <Download size="16px" />
      Resume
    </button>
  );
};

export default DownloadResumeButton;
