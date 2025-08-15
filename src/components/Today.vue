<script setup lang="ts">
    import { computed } from "vue";

    const props = defineProps({
        weatherData: Object,
    });

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
                    href="https://condicaoatual.com.br/praia-dos-ingleses/"
                    style="text-decoration: none; color: aqua"
                    target="_blank"
                >
                    <div class="text-center mr-6">
                        <span class="text-h4">🎥</span>
                        <br />
                        <span>Zinga</span>
                    </div>
                </a>
                <a
                    href="https://condicaoatual.com.br/praia-mole/"
                    style="text-decoration: none; color: aqua"
                    target="_blank"
                >
                    <div class="text-center mr-6">
                        <span class="text-h4">🎥</span>
                        <br />
                        <span>Mole</span>
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
