import { useEffect, useState } from 'react';
import { CITIES } from '@/features/currentWeather/constants/cities';
import useCurrentLocationFromIP from '@/shared/hooks/useCurrentLocationFromIP';
import useWeatherData from '@/features/currentWeather/hooks/useWeatherData';
import useCacheLastSelectedLocation from '@/features/currentWeather/hooks/useCacheLastSelectedLocation';
import SelectField from '@/shared/components/SelectField'
import WeatherDetail from '@/features/currentWeather/components/WeatherDetails';

const CurrentWeatherView = () => {
    const { lastSelectedLocation, updateLastSelectedLocation } = useCacheLastSelectedLocation();
    const [cityOptions, setCityOptions] = useState<SelectFieldOptionItemProps[]>(CITIES.map((city) => ({ label:`${city.cityName},${city.countryCode}`, value: `${city.cityName},${city.countryCode}` })));
    const [selectedCity, setSelectedCity] = useState<string>(lastSelectedLocation);
    const { IPCurrentLocation } = useCurrentLocationFromIP();
    const { weatherData, updateWeatherData } = useWeatherData();
 
    useEffect(() => {
        if (IPCurrentLocation) {
            const { cityName, countryCode } = IPCurrentLocation;
            if (!cityOptions.find((city) => city.value === `${cityName},${countryCode}`)) {
                setCityOptions([{ label:`${cityName},${countryCode}`, value: `${cityName},${countryCode}` }, ...cityOptions]);
            }
            if (!lastSelectedLocation) {
                setSelectedCity(cityName);
                updateLastSelectedLocation(cityName);
            }
        }
    }, [IPCurrentLocation]);

    useEffect(() => {
        if (selectedCity) {
            updateWeatherData(selectedCity);
            updateLastSelectedLocation(selectedCity);
        }
    }, [selectedCity]);

    return (
        <div className="max-w-5xl w-full items-center justify-between flex">
            <div className="flex-row w-full items-end justify-center bg-gradient-to-t">
                Weather app
                <SelectField
                    label="Select the city"
                    selectedValue={selectedCity}
                    options={cityOptions}
                    onChange={(e) => { e.target.value && setSelectedCity(e.target.value) }}
                />
                {weatherData && <WeatherDetail {...weatherData} />}
            </div>
        </div>
    )
}

export default CurrentWeatherView;
