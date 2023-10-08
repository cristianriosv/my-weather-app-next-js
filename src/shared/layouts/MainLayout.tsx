import Image from 'next/image';
import { ReactElement } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function MainLayout(page: ReactElement) {
    return (
        <div className={`flex flex-col items-center w-full min-h-screen justify-between ${inter.className}`}>
            <header className="grotesk flex items-center justify-between py-4 px-4 sm:mx-0 sm:px-0 md:px-6">
                <div className="flex items-center">
                    <Image
                        src={`/images/logo.png`}
                        width={300}
                        height={100}
                        alt={'MyWeather'}
                    />
                </div>
            </header>
            <main className={`w-full px-12 py-1 grow`}>
                {page}
            </main>
            <footer className="grotesk w-full flex items-center inset-x-0 bottom-0 text-xs">
                <div className="mx-auto px-5 py-5">
                    @2023 MyWeather - Project info and code: ...
                </div>
            </footer>
        </div>
    )
}