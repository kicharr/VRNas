// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    ssr: false,
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],
    css: [
        '~/assets/styles/main.scss',
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                    @use "~/assets/styles/_vars.scss";
                    @import "~/assets/styles/_mixins.scss";`
                }
            }
        }
    },
    app: {
        head: {
            title: 'VRNas',
            htmlAttrs: {
                lang: 'ru',
            },
            meta: [
                {charset: 'utf-8'},
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'
                },
            ],
            link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.svg'}],
        },
    },
})
