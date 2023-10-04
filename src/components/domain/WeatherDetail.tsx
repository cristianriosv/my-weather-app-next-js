type WeatherDetailProps = {
    cityName: string;
    temperature: number;
    icon: string;
    weatherName: string;
    pressure: number;
    wind: number;
    feelsLike: number;
    humidity: number;
}

const WeatherDetail = ({
    cityName,
    temperature,
    icon,
    weatherName,
    pressure,
    wind,
    feelsLike,
    humidity
}: WeatherDetailProps) => (
    <div>
        <h3>{cityName}</h3>
        <h1>{temperature} °C</h1>
        <h4>Feels like: {feelsLike} °C</h4>
        <h1>{icon}</h1>
        <h4>{weatherName}</h4>
        <h4>Humidity: {humidity}</h4>
        <h4>Wind: {wind}</h4>
        <h4>Preasure: {pressure}</h4>
    </div>
);

export default WeatherDetail;
