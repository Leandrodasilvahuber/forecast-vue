import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    server: {
        host: '0.0.0.0',
        port: 5173,
        allowedHosts: ['forecast.leandrohuber.com.br', '.leandrohuber.com.br', 'localhost', '127.0.0.1']
    }
});
