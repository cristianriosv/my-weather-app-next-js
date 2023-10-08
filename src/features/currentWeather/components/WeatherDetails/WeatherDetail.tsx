import Image from 'next/image';
import { WEATHER_ICON_HEIGHT, WEATHER_ICON_WIDTH } from '@/shared/constants/general';
import { WEATHER_ICON_IMAGE_URL } from '../../constants/weatherApi';
import { CURRENT_WEATHER_LABELS } from '../../constants/labels';
import { CURRENT_WEATHER_UNITS } from '../../constants/units';

const WeatherDetail = ({
    temperature,
    weatherIcon,
    weatherName,
    weatherDescription,
    pressure,
    windSpeed,
    feelsLike,
    humidity
}: WeatherDataProps) => {
    const renderWeatherStatistic = (label: string, value: string | number, unit: string) => (
        <>
            <span className="text-xs">
                {label}:
            </span>
            {' '}
            <span className="drop-shadow-text">
                {value}
            </span>
            {' '}
            <span className="text-xs">
                ({unit})
            </span>
        </>
    )

    return (
        <div className="px-0 py-2 pt-5 sm:pt-0 animate-fade-in">
            <div className="flex flex-col xsm:flex-row justify-between items-center">
                <div className="flex flex-col items-center xsm:items-start">
                    <div className="text-5xl flex drop-shadow-text">
                        {temperature}
                        <span className="text-3xl">
                        {CURRENT_WEATHER_UNITS.TEMPERATURE}
                        </span>
                    </div>
                    <div className="text-base drop-shadow-text">
                        {CURRENT_WEATHER_LABELS.FEELS_LIKE}:
                        {' '}                    
                        {feelsLike}°
                    </div>
                </div>
                <div className={`w-24 xsm:w-52`}>
                    <Image
                        src={`${WEATHER_ICON_IMAGE_URL}${weatherIcon}@4x.png`}
                        width={WEATHER_ICON_WIDTH}
                        height={WEATHER_ICON_HEIGHT}
                        alt={weatherName}
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                    />
                </div>
            </div>
            <div className="flex flex-col-reverse xsm:flex-row justify-between items-center">
                <ul className="mt-4">
                    <li>
                        {renderWeatherStatistic(CURRENT_WEATHER_LABELS.HUMIDITY, humidity, CURRENT_WEATHER_UNITS.HUMIDITY)}
                    </li>
                    <li>
                        {renderWeatherStatistic(CURRENT_WEATHER_LABELS.WIND, windSpeed, CURRENT_WEATHER_UNITS.WIND)}
                    </li>
                    <li>
                        {renderWeatherStatistic(CURRENT_WEATHER_LABELS.PREASSURE, pressure, CURRENT_WEATHER_UNITS.PREASSURE)}
                    </li>
                </ul>
                <div className="text-center px-1 xsm:px-12">
                    <div className="text-2xl drop-shadow-text">{weatherName}</div>
                    <div className="text-base">({weatherDescription})</div>
                </div>
            </div>
        </div>
    );

}

export default WeatherDetail;
