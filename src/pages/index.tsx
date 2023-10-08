import CurrentWeatherView from '@/features/currentWeather/CurrentWeatherView';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });
   
export default function Home() {
    return (
        <CurrentWeatherView />
    );
}
