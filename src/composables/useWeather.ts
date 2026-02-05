import { ref } from 'vue';
import { fetchWeatherData } from '@/services/weatherService';
import type { WeatherData } from '@/types/weather';

export function useWeather() {
    const weatherData = ref<WeatherData | null>(null);
    const loading = ref(false);
    const error = ref<string | null>(null);

    async function loadWeather() {
        loading.value = true;
        error.value = null;

        try {
            weatherData.value = await fetchWeatherData();
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Erro ao carregar dados';
            console.error('Erro no composable useWeather:', err);
        } finally {
            loading.value = false;
        }
    }

    return {
        weatherData,
        loading,
        error,
        loadWeather
    };
}