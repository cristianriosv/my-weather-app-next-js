import Image from 'next/image';
import { WEATHER_ICON_HEIGHT, WEATHER_ICON_WIDTH } from '@/shared/constants/general';
import { WEATHER_ICON_IMAGE_URL } from '../../constants/weatherApi';

const WeatherDetail = ({
    temperature,
    weatherIcon,
    weatherName,
    weatherDescription,
    pressure,
    windSpeed,
    feelsLike,
    humidity
}: WeatherDataProps) => (
    <div className="px-0 py-2 md:px-5 pt-5 sm:pt-0">
        <div className="flex flex-col xsm:flex-row justify-between items-center">
            <div>
                <div className="text-5xl flex drop-shadow-text">{temperature}<span className="text-3xl">°C</span></div>
                <div className="text-base drop-shadow-text">Feels like: {feelsLike}°</div>
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
                <li><span className="text-xs">Humidity:</span> <span className="drop-shadow-text">{humidity}</span> <span className="text-xs">%</span></li>
                <li><span className="text-xs">Wind:</span> <span className="drop-shadow-text">{windSpeed}</span> <span className="text-xs">(m/s)</span></li>
                <li><span className="text-xs">Preasure:</span> <span className="drop-shadow-text">{pressure}</span> <span className="text-xs">(hPa)</span></li>
            </ul>
            <div className="text-center px-1 xsm:px-12">
                <div className="text-2xl drop-shadow-text">{weatherName}</div>
                <div className="text-base">({weatherDescription})</div>
            </div>
        </div>
    </div>
);

export default WeatherDetail;
