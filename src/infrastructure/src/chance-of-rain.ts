import { ChanceOfRainData } from './types';

export const chanceOfRain = (pressure: number, temperature: number, amount: number): ChanceOfRainData => {
    const score = Math.log(amount + 1) * Math.log(pressure - 929) * Math.log(temperature - 9);
    const mean = Math.min(Math.max(score, 0), 100)
    const upper_bound = Math.min(1.5 * mean, 100);
    const lower_bound = Math.max(0.5 * mean, 0);
    return { lower_bound, mean, upper_bound };
};
