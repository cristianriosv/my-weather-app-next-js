import { useState } from "react";
import useRequest from "./useRequest";
import { convertWeatherToWeatherDataProps } from "@/utils/convertWeatherToWeatherDataProps";

const useWeatherData = () => {
    const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);
    const { getData } = useRequest();
    
    const updateWeatherData = async (cityName: string) => {
        getData(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=cf3e3bb938b7dc300137e6010fbe89e7`)
            .then((data) => {
                setWeatherData(convertWeatherToWeatherDataProps(cityName, data));
            })
    };

    return { weatherData, updateWeatherData };
};

export default useWeatherData;
