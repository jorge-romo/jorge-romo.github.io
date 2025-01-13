'use client';

/**
 * Due to next-themes having a issue with theme-provider, we applied the solution from the following link:
 * https://github.com/pacocoursey/next-themes/issues/316
 */

import React, { useState, useEffect } from 'react';
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes';

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  ...props
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <></>;
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export type { ThemeProviderProps } from 'next-themes';

export default ThemeProvider;
