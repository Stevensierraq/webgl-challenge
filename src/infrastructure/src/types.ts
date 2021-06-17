export interface AmountOfRainfallDayData {
    day: number;
    amount: number;
}

export interface AmountOfRainfallDTO {
    request: string;
    days: Array<AmountOfRainfallDayData>;
}

export interface ChanceOfRainData {
    day?: number;
    mean: number;
    lower_bound: number;
    upper_bound: number;
}
