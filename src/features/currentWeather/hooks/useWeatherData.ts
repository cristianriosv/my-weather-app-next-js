import { useEffect, useState } from "react";
import useRequest from "@/shared/hooks/useRequest";
import { WEATHER_DATA_API_URL } from "../constants/weatherApi";
import { convertWeatherDataToWeatherDetailsProps } from "../utils/convertWeatherDataToWeatherDetailsProps";

const useWeatherData = () => {
    const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);
    const { getData, data } = useRequest();

    useEffect(() => {
        data && setWeatherData(convertWeatherDataToWeatherDetailsProps(data));
    }, [data]);
    
    const updateWeatherData = async (selectedOption: string) => {
        getData(`${WEATHER_DATA_API_URL}&q=${selectedOption}`);
    };

    return { weatherData, updateWeatherData };
};

export default useWeatherData;
