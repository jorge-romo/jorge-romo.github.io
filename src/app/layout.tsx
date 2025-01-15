import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { aboutThisProject, personalInfo } from '@/data';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: aboutThisProject.title,
  description: aboutThisProject.description.long,
  authors: [{ name: personalInfo.name }],
  openGraph: {
    title: aboutThisProject.title,
    description: aboutThisProject.description.short,
    url: aboutThisProject.url,
    images: [
      {
        url: aboutThisProject.screenshot.url,
        width: aboutThisProject.screenshot.width,
        height: aboutThisProject.screenshot.height,
        alt: 'Portfolio preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: aboutThisProject.title,
    description: aboutThisProject.description.short,
    images: [aboutThisProject.screenshot.url],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <body className={`${inter.className} text-dark min-h-screen`}>
        <ThemeProvider attribute="class">
          <Header />
          <main>{children}</main>
          <Footer />
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
