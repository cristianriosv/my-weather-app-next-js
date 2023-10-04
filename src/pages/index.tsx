import { useEffect, useState } from 'react';
import { Inter } from 'next/font/google'
import { CITIES } from '@/constants/general';
import useCurrentLocation from '@/hooks/useIPCurrentLocation';
import useWeatherData from '@/hooks/useWeatherData';
import useCacheLastSelectedCity from '@/hooks/useCacheLastSelectedCity';
import SelectField from '@/components/shared/SelectField'
import WeatherDetail from '@/components/domain/WeatherDetail';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const { lastSelectedCity, updateLastSelectedCity } = useCacheLastSelectedCity();
    const [selectedCity, setSelectedCity] = useState(lastSelectedCity);
    const [cityOptions, setCityOptions] = useState(CITIES);
    const { IPCurrentLocation } = useCurrentLocation();
    const { weatherData, updateWeatherData } = useWeatherData();

    useEffect(() => {
        if (IPCurrentLocation) {
            const { cityName } = IPCurrentLocation;
            if (!cityOptions.includes(cityName)) {
                setCityOptions([cityName, ...cityOptions]);
            }
            if (!lastSelectedCity) {
                setSelectedCity(cityName);
                updateLastSelectedCity(cityName);
            }
        }
    }, [IPCurrentLocation]);

    useEffect(() => {
        if (selectedCity) {
            updateWeatherData(selectedCity);
            updateLastSelectedCity(selectedCity);
        }
    }, [selectedCity]);

    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <div className="max-w-5xl w-full items-center justify-between flex">
                <div className="flex-row w-full items-end justify-center bg-gradient-to-t">
                    Weather app
                    <SelectField
                        label="Select the city"
                        value={selectedCity}
                        options={cityOptions}
                        onChange={(e) => { e.target.value && setSelectedCity(e.target.value) }}
                    />
                    {weatherData && <WeatherDetail {...weatherData} />}
                </div>
            </div>
        </main>
    )
}
