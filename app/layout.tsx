import type React from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
   title: 'Portfolio',
   description: 'A showcase of my work and skills as a developer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body className={`${inter.className} bg-[#121212] text-slate-100 antialiased`}>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
               {children}
            </ThemeProvider>
         </body>
      </html>
   );
}
