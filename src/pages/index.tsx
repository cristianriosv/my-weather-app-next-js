import { useState } from 'react';
import { Inter } from 'next/font/google'
import SelectField from '@/components/shared/SelectField'
import { cities } from '@/constants/cities';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [city, setCity] = useState('');
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <div className="max-w-5xl w-full items-center justify-between flex">
                <div className="flex w-full items-end justify-center bg-gradient-to-t">
                    Weather app
                    <SelectField
                        label="Select the city"
                        value={city}
                        options={cities}
                        onChange={(e) => { e.target.value && setCity(e.target.value) }}
                    />
                </div>
            </div>
        </main>
    )
}
