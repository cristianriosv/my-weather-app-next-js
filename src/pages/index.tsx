import CurrentWeatherView from '@/features/currentWeather/CurrentWeatherView';
import MainLayout from '@/shared/layouts/mainLayout';
import { NextPageWithLayout } from './_app';
   
const Home: NextPageWithLayout = () => {
    return <CurrentWeatherView />;
}

Home.getLayout = MainLayout;

export default Home;
