import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import './globals.css';
import Footer from '@/components/Footer';
import { ThemeProvider, ScrollToTopButton } from '@/components/ui';
import { config, personalInfo } from '@/data';

export const metadata: Metadata = {
  metadataBase: new URL(config.url),
  title: config.title,
  description: config.description.long,
  authors: [{ name: personalInfo.name }],
  openGraph: {
    title: config.title,
    description: config.description.short,
    url: config.url,
    images: [
      {
        url: config.screenshot.url,
        width: config.screenshot.width,
        height: config.screenshot.height,
        alt: 'Portfolio preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: config.title,
    description: config.description.short,
    images: [config.screenshot.url],
    creator: '@jorge33680',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
