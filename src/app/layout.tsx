import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';

import { cn } from '@/lib/utils';

import './globals.css';
import Navbar from '@/components/Navbar/Navbar';

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
});

export const metadata: Metadata = {
    title: 'NextResource?',
    description: 'Creato da Gioele Vicini',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={cn(
                    'min-h-screen bg-slate-700 font-sans antialiased',
                    fontSans.variable
                )}
            >
                <Navbar />
                <div className='w-full h-full'>{children}</div>
            </body>
        </html>
    );
}
