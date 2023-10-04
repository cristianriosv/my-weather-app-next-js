export const convertIpLocationToLocationDataProps = (ipLocation: IpGeolocation): LocationDataProps => (
    {
        cityName: ipLocation.city,
        latitude: ipLocation.latitude,
        longitude: ipLocation.longitude
    }
);

export const convertWeatherToWeatherDataProps = (weather: WeatherData): WeatherDataProps => (
    {
        temperature: weather.main.temp,
        feelsLike: weather.main.feels_like,
        humidity: weather.main.humidity,
        windSpeed: weather.wind.speed,
        weatherDescription: weather.weather[0].description,
        weatherIcon: weather.weather[0].icon,
        pressure: weather.main.pressure
    }
);