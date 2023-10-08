import { useState } from "react";
import useRequest from "@/hooks/useRequest";
import { convertWeatherToWeatherDataProps } from "@/utils/convertExternalServicesDataToClientProps";
import { WEATHER_DATA_API_URL } from "../constants/weatherApi";

const useWeatherData = () => {
    const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);
    const { getData } = useRequest();
    
    const updateWeatherData = async (selectedOption: string) => {
        getData(`${WEATHER_DATA_API_URL}&q=${selectedOption}`)
            .then((data) => {
                setWeatherData(convertWeatherToWeatherDataProps(data));
            })
    };

    return { weatherData, updateWeatherData };
};

export default useWeatherData;
