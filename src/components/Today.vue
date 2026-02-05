<script setup lang="ts">
    import { computed } from "vue";
    import type { WeatherData } from "@/types/weather";
    import { CAMERAS } from "@/config/constants";

    const props = defineProps<{
        weatherData: WeatherData;
    }>();

    const currentDate = computed(() => {
        return new Date()
            .toLocaleDateString("pt-BR", {
                weekday: "long",
                day: "numeric",
                month: "long",
            })
            .toUpperCase();
    });
</script>

<template>
    <v-card-title class="d-flex justify-space-between align-center">
        <div>
            <span class="text-caption text-grey"
                ><h3>{{ currentDate }}</h3></span
            >
        </div>
    </v-card-title>
    <v-card-title class="d-flex justify-space-between align-center">
        <div>
            <span class="text-caption mb-5"
                ><h1>{{ props.weatherData.condition }}</h1></span
            >
        </div>
    </v-card-title>
    <v-card-text class="current-weather">
        <div class="d-flex align-center">
            <div class="text-center mr-6">
                <span style="font-size: 56px">{{
                    props.weatherData.conditionIcon
                }}</span>
            </div>
            <div>
                <span class="text-h2"
                    >{{ props.weatherData.currentTemp }}°</span
                >
            </div>
            <div class="d-flex align-end justify-end w-100 mb-3">
                <a
                    :href="CAMERAS.zinga.url"
                    style="text-decoration: none; color: aqua"
                    target="_blank"
                    rel="noopener noreferrer"
                    :aria-label="`Ver câmera ao vivo da ${CAMERAS.zinga.name}`"
                >
                    <div class="text-center mr-6">
                        <span class="text-h4" role="img" :aria-label="CAMERAS.zinga.icon">{{ CAMERAS.zinga.icon }}</span>
                        <br />
                        <span>{{ CAMERAS.zinga.name }}</span>
                    </div>
                </a>
                <a
                    :href="CAMERAS.mole.url"
                    style="text-decoration: none; color: aqua"
                    target="_blank"
                    rel="noopener noreferrer"
                    :aria-label="`Ver câmera ao vivo da ${CAMERAS.mole.name}`"
                >
                    <div class="text-center mr-6">
                        <span class="text-h4" role="img" :aria-label="CAMERAS.mole.icon">{{ CAMERAS.mole.icon }}</span>
                        <br />
                        <span>{{ CAMERAS.mole.name }}</span>
                    </div>
                </a>
            </div>
        </div>
    </v-card-text>
</template>

<style scoped>
    .current-weather {
        padding-bottom: 0;
    }
</style>
