import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const pathSrc = path.resolve(__dirname, "./src");

// https://vitejs.dev/config/
export default defineConfig({
    base: 'trial-day',
    plugins: [vue()],
    resolve: {
        alias: {
            '@': pathSrc,
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData:
                    `@import "@/assets/styles/variables";@import "@/assets/styles/mixins";@import "@/assets/styles/typography";`
            },
        },
    },
})

