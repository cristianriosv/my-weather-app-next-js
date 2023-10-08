import { useEffect, useState } from 'react';
import { DEFAULT_LOCATIONS } from '@/features/currentWeather/constants/locations';
import useCurrentLocationFromIP from '@/shared/hooks/useCurrentLocationFromIP';
import useWeatherData from '@/features/currentWeather/hooks/useWeatherData';
import useCacheLastSelectedLocation from '@/features/currentWeather/hooks/useCacheLastSelectedLocation';
import SelectField from '@/shared/components/SelectField'
import WeatherDetail from '@/features/currentWeather/components/WeatherDetails';
import { convertLocationPropsToSelectFieldOptionItem, getValueStringFromLocation } from './utils/parseLocationOptions';

const CurrentWeatherView = () => {
    const { lastSelectedLocation, updateLastSelectedLocation } = useCacheLastSelectedLocation();
    const [locationOptions, setLocationOptions] = useState<SelectFieldOptionItemProps[]>(
        DEFAULT_LOCATIONS.map(convertLocationPropsToSelectFieldOptionItem)
    );
    const [selectedLocation, setSelectedLocation] = useState<string>(lastSelectedLocation);
    const { IPCurrentLocation } = useCurrentLocationFromIP();
    const { weatherData, updateWeatherData } = useWeatherData();
 
    useEffect(() => {
        if (IPCurrentLocation) {
            const valueStringFromLocation = getValueStringFromLocation(IPCurrentLocation);
            if (!locationOptions.some((option) => option.value === valueStringFromLocation)) {
                setLocationOptions([convertLocationPropsToSelectFieldOptionItem(IPCurrentLocation), ...locationOptions]);
            }
            if (!lastSelectedLocation) {
                setSelectedLocation(valueStringFromLocation);
                updateLastSelectedLocation(valueStringFromLocation);
            }
        }
    }, [IPCurrentLocation]);

    useEffect(() => {
        if (selectedLocation) {
            updateWeatherData(selectedLocation);
            updateLastSelectedLocation(selectedLocation);
        }
    }, [selectedLocation]);

    return (
        <div className="w-full max-w-xl items-center justify-between flex">
            <div className="flex-row w-full items-end justify-center bg-gradient-to-t">
                <h1 className="w-full text-center mb-3">How is it going today?</h1>
                <SelectField
                    label="Location:"
                    placeholder="Select the location you want to check..."
                    selectedValue={selectedLocation}
                    options={locationOptions}
                    onChange={(e) => { e.target.value && setSelectedLocation(e.target.value) }}
                />
                {weatherData && <WeatherDetail {...weatherData} />}
            </div>
        </div>
    )
}

export default CurrentWeatherView;
