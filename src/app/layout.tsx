import DefaultLayout from '@/layouts/DefaultLayout';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Sheet Music Composer',
  description: 'Create you rown music sheet'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main>
          <DefaultLayout>{children}</DefaultLayout>
        </main>
      </body>
    </html>
  );
}
