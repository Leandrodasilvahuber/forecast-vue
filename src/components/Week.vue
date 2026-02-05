<script setup lang="ts">
    import { computed } from "vue";
    import type { WeatherData } from "@/types/weather";
    import { getTemperatureClass } from "@/utils/temperature";

    const props = defineProps<{
        weatherData: WeatherData;
    }>();

    const forecast = computed(() => props.weatherData.forecast);
</script>

<template>
    <v-card-text>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <div class="d-flex flex-wrap forecast-container">
                        <div
                            v-for="(day, index) in forecast"
                            :key="index"
                            class="text-center forecast-day"
                            :style="{
                                border: '1px solid',
                                borderColor: day.color,
                            }"
                        >
                            <div
                                style="font-size: 15px !important"
                                class="text-caption"
                            >
                                {{ day.weekDay }}
                            </div>
                            <v-divider></v-divider>
                            <div
                                style="font-size: 10px !important"
                                class="text-caption mb-1 mt-1"
                            >
                                {{ day.date }}
                            </div>
                            <v-divider></v-divider>
                            <div
                                style="font-size: 10px !important"
                                class="text-caption mb-1 mt-1"
                            >
                                {{ day.time }}
                            </div>

                            <v-divider></v-divider>
                            <div
                                style="font-size: 25px !important"
                                class="mb-1"
                            >
                                {{ day.condicao.icon }}
                            </div>

                            <div
                                style="font-size: 9px !important"
                                class="text-caption font-weight-bold mb-2"
                            >
                                {{ day.condicao.text.substring(0, 12) }}
                            </div>

                            <div class="day-temp text-caption font-weight-bold mb-2">
                                <span :class="getTemperatureClass(day.currentTemp)">
                                    {{ day.currentTemp }}°
                                </span>
                            </div>

                            <v-divider></v-divider>

                            <div class="d-flex flex-column align-center">
                                <!-- Bloco do Vento -->
                                <div class="d-flex flex-column align-center">
                                    <div
                                        style="font-size: 18px !important"
                                        class="d-flex flex-column align-center mt-1"
                                    >
                                        <v-icon big class="mb-1"
                                            >mdi-weather-windy</v-icon
                                        >
                                    </div>
                                    <div class="d-flex justify-center mt-1">
                                        <span class="text-caption">{{
                                            day.windDirection
                                        }}</span>
                                    </div>
                                    <div
                                        class="d-flex flex-column align-center mt-1"
                                    >
                                        <span class="text-caption"
                                            >{{ day.windSpeed }} m/s</span
                                        >
                                    </div>
                                    <div
                                        style="font-size: 28px !important"
                                        class="d-flex justify-center mt-1 mb-2"
                                    >
                                        <span>{{ day.windDirectionIcon }}</span>
                                    </div>
                                </div>
                            </div>

                            <v-divider></v-divider>

                            <div class="d-flex flex-column align-center">
                                <!-- Bloco das Ondas -->
                                <div class="d-flex flex-column align-center">
                                    <div
                                        style="font-size: 28px !important"
                                        class="d-flex flex-column align-center"
                                    >
                                        <v-icon>mdi-wave</v-icon>
                                    </div>
                                    <div class="d-flex justify-center">
                                        <span class="text-caption">{{
                                            day.waveDirection
                                        }}</span>
                                    </div>

                                    <div
                                        class="d-flex flex-column align-center mt-1"
                                    >
                                        <span class="text-caption"
                                            >{{ day.waveHeight }}m</span
                                        >
                                    </div>
                                    <div
                                        style="font-size: 28px !important"
                                        class="d-flex justify-center mt-1"
                                    >
                                        <span>{{ day.waveDirectionIcon }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-card-text>
</template>

<style scoped>
    .forecast-container {
        gap: 8px;
    }
    .forecast-day {
        width: 82px;
        padding: 8px;
        border-radius: 10px;
        transition: background-color 0.5s;
        border: 2px solid #333;
        border-radius: 4px;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    }
    .forecast-day:hover {
        background-color: rgba(0, 0, 0, 0.03);
    }
</style>
