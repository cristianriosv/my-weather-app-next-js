const WeatherDetail = ({
    temperature,
    weatherIcon,
    weatherDescription,
    pressure,
    windSpeed,
    feelsLike,
    humidity
}: WeatherDataProps) => (
    <div>
        <h1>{temperature} °C</h1>
        <h4>Feels like: {feelsLike} °C</h4>
        <h1>{weatherIcon}</h1>
        <h4>{weatherDescription}</h4>
        <h4>Humidity: {humidity}</h4>
        <h4>Wind: {windSpeed}</h4>
        <h4>Preasure: {pressure}</h4>
    </div>
);

export default WeatherDetail;
