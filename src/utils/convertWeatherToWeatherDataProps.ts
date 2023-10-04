export const convertWeatherToWeatherDataProps = (cityName: string, weather: WeatherData): WeatherDataProps => (
    {
        cityName,
        temperature: weather.main.temp,
        feelsLike: weather.main.feels_like,
        humidity: weather.main.humidity,
        windSpeed: weather.wind.speed,
        weatherDescription: weather.weather[0].description,
        weatherIcon: weather.weather[0].icon,
        pressure: weather.main.pressure
    }
);
