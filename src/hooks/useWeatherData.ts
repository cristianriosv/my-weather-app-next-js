import { useState } from "react";
import useRequest from "./useRequest";
import { WEATHER_DATA_API_URL } from "@/constants/externalServices";
import { convertWeatherToWeatherDataProps } from "@/utils/convertWeatherToWeatherDataProps";

const useWeatherData = () => {
    const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);
    const { getData } = useRequest();
    
    const updateWeatherData = async (cityName: string) => {
        getData(`${WEATHER_DATA_API_URL}&q=${cityName}`)
            .then((data) => {
                setWeatherData(convertWeatherToWeatherDataProps(data));
            })
    };

    return { weatherData, updateWeatherData };
};

export default useWeatherData;
