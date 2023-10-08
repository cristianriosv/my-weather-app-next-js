import { useState } from "react";
import useRequest from "@/shared/hooks/useRequest";
import { WEATHER_DATA_API_URL } from "../constants/weatherApi";
import { convertWeatherToWeatherDataProps } from "../utils/convertWeatherToWeatherDataProps";

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
