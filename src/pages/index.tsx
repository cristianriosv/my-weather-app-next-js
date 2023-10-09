import Head from 'next/head'
import CurrentWeatherView from '@/features/currentWeather/CurrentWeatherView';
import MainLayout from '@/shared/layouts/MainLayout';
import { NextPageWithLayout } from './_app';
   
const Home: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>MyWeather</title>
            </Head>
            <CurrentWeatherView />
        </>
    );
}

Home.getLayout = MainLayout;

export default Home;
