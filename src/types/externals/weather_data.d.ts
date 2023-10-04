interface WeatherData {
    main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
    }
    weather: [
        {
            description: string;
            icon: string;
        }
    ],
    wind: {
        speed: number;
    }
}