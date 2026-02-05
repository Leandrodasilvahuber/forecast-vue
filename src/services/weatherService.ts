import axios from 'axios';
import { API_URL } from '@/config/env';
import type { WeatherData } from '@/types/weather';

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos
let cachedData: WeatherData | null = null;
let lastFetch = 0;

/**
 * Busca dados meteorológicos da API
 * @returns {Promise<WeatherData>} Dados de previsão do tempo
 * @throws {Error} Quando a API falha ou está indisponível
 */
export async function fetchWeatherData(): Promise<WeatherData> {
    const now = Date.now();

    if (cachedData && (now - lastFetch < CACHE_DURATION)) {
        return cachedData!;
    }

    try {
        const response = await axios.get(API_URL);
        cachedData = response.data.forecast;
        lastFetch = now;

        return cachedData!;
    } catch (error) {
        console.error('Erro ao buscar dados meteorológicos:', error);
        throw new Error('Falha ao carregar dados meteorológicos. Tente novamente mais tarde.');
    }
}