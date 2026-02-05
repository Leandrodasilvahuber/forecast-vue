<template>
    <v-app-bar
        :elevation="16"
        scroll-behavior="hide collapse elevate fade-image"
        image="praia.png"
    >
        <v-app-bar-title style="color: wheat">
            <v-app-bar-title>
                <h2>{{ beachInfo.name }}</h2>
                <h6>{{ beachInfo.city }}</h6>
            </v-app-bar-title>
        </v-app-bar-title>
        <span :class="`fi fi-${beachInfo.country.toLowerCase()}`" class="mr-5"></span>
    </v-app-bar>
</template>

<script setup lang="ts">
    import { BEACH_INFO } from '@/config/constants';

    const beachInfo = BEACH_INFO;
</script>
