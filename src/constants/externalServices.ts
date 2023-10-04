const IP_LOCATION_CHECK_API_ACCESS_KEY = process.env.NEXT_PUBLIC_IP_LOCATION_CHECK_API_ACCESS_KEY || '';
const WEATHER_DATA_API_ACCESS_KEY = process.env.NEXT_PUBLIC_WEATHER_API_ACCESS_KEY || '';

export const IP_LOCATION_CHECK_API_URL = `http://api.ipstack.com/check?access_key=${IP_LOCATION_CHECK_API_ACCESS_KEY}`;
export const WEATHER_DATA_API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${WEATHER_DATA_API_ACCESS_KEY}`;