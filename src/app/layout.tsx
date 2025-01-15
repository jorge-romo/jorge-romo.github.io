import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { personalInfo } from '@/data';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${personalInfo.name} - ${personalInfo.title}`,
  description: `${personalInfo.name} - Personal portfolio`,
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
