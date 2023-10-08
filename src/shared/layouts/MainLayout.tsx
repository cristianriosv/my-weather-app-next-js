import { ReactElement } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function MainLayout(page: ReactElement) {
    return (
        <>
            Here goes the header
            <main
                className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
            >
                {page}
            </main>
            here goes the footer
        </>
    )
}