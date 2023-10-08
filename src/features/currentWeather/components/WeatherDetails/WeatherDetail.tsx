import Image from 'next/image';
import { WEATHER_ICON_HEIGHT, WEATHER_ICON_WIDTH } from '@/shared/constants/general';
import { WEATHER_ICON_IMAGE_URL } from '../../constants/weatherApi';

const WeatherDetail = ({
    temperature,
    weatherIcon,
    weatherName,
    weatherDescription,
    pressure,
    windSpeed,
    feelsLike,
    humidity
}: WeatherDataProps) => (
    <div>
        <h1>{temperature} °C</h1>
        <h4>Feels like: {feelsLike} °C</h4>
        <Image
            src={`${WEATHER_ICON_IMAGE_URL}${weatherIcon}@4x.png`}
            width={WEATHER_ICON_WIDTH}
            height={WEATHER_ICON_HEIGHT}
            alt={weatherName}
        />
        <h4>{weatherName}</h4>
        <h4>{weatherDescription}</h4>
        <h4>Humidity: {humidity}</h4>
        <h4>Wind: {windSpeed}</h4>
        <h4>Preasure: {pressure}</h4>
    </div>
);

export default WeatherDetail;
