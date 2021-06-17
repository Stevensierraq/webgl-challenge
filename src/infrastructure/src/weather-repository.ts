import { AmountOfRainfallDTO } from './types';

const WEATHER_API_URL = 'http://private-4945e-weather34.apiary-proxy.com/weather34/rain';

export const getAmountOfRainfall = async (): Promise<Array<AmountOfRainfallDTO>>  => {
    try {
        const response = await fetch(WEATHER_API_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        return [];
    }
};
