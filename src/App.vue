<template>
    <v-app>
        <v-main>
            <v-container>
                <v-row>
                    <v-col>
                        <Top></Top>
                    </v-col>
                </v-row>
                <v-row v-if="loading">
                    <v-col class="text-center">
                        <v-progress-circular indeterminate color="primary" />
                        <p class="mt-4">Carregando dados meteorológicos...</p>
                    </v-col>
                </v-row>
                <v-row v-else-if="error">
                    <v-col>
                        <v-alert type="error" :text="error" />
                        <v-btn @click="loadWeather" color="primary" class="mt-4">
                            Tentar Novamente
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row v-else-if="weatherData">
                    <div>
                        <v-col>
                            <v-card class="weather-card" elevation="2">
                                <Today
                                    :weatherData="weatherData"
                                    class="mr-8"
                                ></Today>
                                <v-divider></v-divider>
                                <Partial :weatherData="weatherData"></Partial>
                                <v-divider></v-divider>
                                <Week :weatherData="weatherData"></Week>
                            </v-card>
                        </v-col>
                    </div>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
    // Vue imports
    import { onMounted } from "vue";

    // Components
    import Today from "./components/Today.vue";
    import Partial from "./components/Partial.vue";
    import Week from "./components/Week.vue";
    import Top from "./components/Top.vue";

    // Composables
    import { useWeather } from "./composables/useWeather";

    const { weatherData, loading, error, loadWeather } = useWeather();

    onMounted(() => {
        loadWeather();
    });
</script>

<style scoped>
    .weather-card {
        border-radius: 12px;
    }
</style>
