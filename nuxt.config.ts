import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: { title: 'rosterbox' },
    css: ["~/assets/css/tailwind.css"],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    typescript: {
        shim: false
    },
})


/* 
<script defer data-domain="rosterbox.xyz" src="https://plausible.io/js/plausible.js"></script>
*/