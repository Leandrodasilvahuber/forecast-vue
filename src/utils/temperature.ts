export function getTemperatureColor(temp: number): string {
    if (temp <= 15) return 'text-blue';
    if (temp <= 25) return 'text-orange';
    return 'text-red';
}

export function getTemperatureClass(temp: number): string {
    return getTemperatureColor(temp);
}