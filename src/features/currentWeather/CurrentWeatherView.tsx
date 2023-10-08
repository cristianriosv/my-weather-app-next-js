import { useEffect, useState } from 'react';
import { DEFAULT_LOCATIONS } from '@/features/currentWeather/constants/locations';
import useCurrentLocationFromIP from '@/shared/hooks/useCurrentLocationFromIP';
import useWeatherData from '@/features/currentWeather/hooks/useWeatherData';
import useCacheLastSelectedLocation from '@/features/currentWeather/hooks/useCacheLastSelectedLocation';
import SelectField from '@/shared/components/SelectField'
import WeatherDetail from '@/features/currentWeather/components/WeatherDetails';
import { convertLocationPropsToSelectFieldOptionItem, getLabelStringFromLocation, getValueStringFromLocation } from './utils/parseLocationOptions';
import { CURRENT_WEATHER_LABELS } from './constants/labels';
import WeatherDetailSkeleton from './components/WeatherDetailSekeleton';

const CurrentWeatherView = () => {
    const { lastSelectedLocation, updateLastSelectedLocation } = useCacheLastSelectedLocation();
    const [locationOptions, setLocationOptions] = useState<SelectFieldOptionItemProps[]>(
        DEFAULT_LOCATIONS.map(convertLocationPropsToSelectFieldOptionItem)
    );
    const [selectedLocation, setSelectedLocation] = useState<string>(lastSelectedLocation);
    const { IPCurrentLocation, IPCurrentLocationError } = useCurrentLocationFromIP();
    const {
        weatherData,
        updateWeatherData,
        weatherDataError,
        weatherDataIsLoading
    } = useWeatherData();
 
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

    const renderCurrentLocation = () => (
        <>
            {!IPCurrentLocation && !IPCurrentLocationError && CURRENT_WEATHER_LABELS.FETCHING_CURRENT_LOCATION}
            {IPCurrentLocation && `${CURRENT_WEATHER_LABELS.CURRENT_LOCATION}: ${getValueStringFromLocation(IPCurrentLocation)}`}
            {IPCurrentLocationError && CURRENT_WEATHER_LABELS.FETCHING_CURRENT_LOCATION_ERROR}
        </>
    );

    return (
        <div className="w-full max-w-xl items-center justify-between flex">
            <div className="flex-row w-full items-end justify-center bg-gradient-to-t">
                <h1 className="w-full text-center mb-3">
                    {CURRENT_WEATHER_LABELS.SECTION_TITLE}
                </h1>
                <h2 className="w-full text-xs text-center mb-3">
                    (
                        {!IPCurrentLocation && !IPCurrentLocationError && CURRENT_WEATHER_LABELS.FETCHING_CURRENT_LOCATION}
                        {IPCurrentLocation && `${CURRENT_WEATHER_LABELS.CURRENT_LOCATION}: ${getLabelStringFromLocation(IPCurrentLocation)}`}
                        {IPCurrentLocationError && CURRENT_WEATHER_LABELS.FETCHING_CURRENT_LOCATION_ERROR}
                    )
                </h2>
                <SelectField
                    label={`${CURRENT_WEATHER_LABELS.SELECTION_LABEL}:`}
                    placeholder={CURRENT_WEATHER_LABELS.SELECTION_PLACEHOLDER}
                    selectedValue={selectedLocation}
                    options={locationOptions}
                    onChange={(e) => { e.target.value && setSelectedLocation(e.target.value) }}
                />
                {weatherDataIsLoading && <WeatherDetailSkeleton />}
                {weatherDataError && (
                    <div className="text-red-300 text-base text-center mt-12">
                        {CURRENT_WEATHER_LABELS.WEATHER_DATA_ERROR}
                    </div>
                )}
                {weatherData && <WeatherDetail {...weatherData} />}
            </div>
        </div>
    )
}

export default CurrentWeatherView;
