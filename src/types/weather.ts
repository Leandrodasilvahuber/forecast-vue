export interface WeatherCondition {
    text: string;
    icon: string;
}

export interface DailyForecast {
    weekDay: string;
    date: string;
    time: string;
    color: string;
    condicao: WeatherCondition;
    currentTemp: number;
    windDirection: string;
    windSpeed: number;
    windDirectionIcon: string;
    waveDirection: string;
    waveHeight: number;
    waveDirectionIcon: string;
}

export interface WeatherData {
    condition: string;
    conditionIcon: string;
    currentTemp: number;
    waveHeight: number;
    waveDirection: string;
    waveDirectionIcon: string;
    windSpeed: number;
    windDirection: string;
    windDirectionIcon: string;
    forecast: DailyForecast[];
}