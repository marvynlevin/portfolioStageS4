import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import tailwindcss from "@tailwindcss/vite"
import Markdown from 'unplugin-vue-markdown/vite'
import {imagetools} from 'vite-imagetools'


export default defineConfig({
    plugins: [
        vue({
            include: [/\.vue$/, /\.md$/],
        }),
        Markdown({
            headEnabled: true,
            markdownItOptions: {
                html: true,
            },
        }),
        tailwindcss(),
        imagetools(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
})
