export const convertIpLocationToLocationDataProps = (ipLocation: IpGeolocation): LocationDataProps => (
    {
        cityName: ipLocation.city,
        latitude: ipLocation.latitude,
        longitude: ipLocation.longitude,
        countryName: ipLocation.country_name,
        stateName: ipLocation.region_name,
        countryCode: ipLocation.country_code,
        stateCode: ipLocation.region_code
    }
);

export const convertWeatherToWeatherDataProps = (weatherData: WeatherData): WeatherDataProps => (
    {
        temperature: weatherData.main.temp,
        feelsLike: weatherData.main.feels_like,
        humidity: weatherData.main.humidity,
        windSpeed: weatherData.wind.speed,
        weatherName: weatherData.weather[0].main,
        weatherDescription: weatherData.weather[0].description,
        weatherIcon: weatherData.weather[0].icon,
        pressure: weatherData.main.pressure
    }
);