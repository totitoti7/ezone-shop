import React from 'react';
import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';
import Header from './Header';
import Footer from './footer';

const cairo = Cairo({
  variable: '--font-sans',
  subsets: ['arabic'],
});

export const metadata: Metadata = {
  title: 'Ezone Shop',
  description: 'Discover amazing products at Ezone.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Discover amazing products at Ezone." />
        <meta name="theme-color" content="#f7f7f7" />
        <meta property="og:title" content="Ezone Shop" />
        <meta property="og:description" content="Discover amazing products at Ezone." />
        <meta property="og:image" content="/EzoneLogo.png" />
        <meta property="og:type" content="website" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
