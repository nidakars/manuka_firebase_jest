export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'nuxt_man',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: ["../assets/styles/styles.css"],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [{ src: "~/plugins/vuex-persist", ssr: false }],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [ // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios",
        // https://go.nuxtjs.dev/pwa
        "@nuxtjs/pwa", [
            "@nuxtjs/firebase",
            {
                config: {
                    apiKey: "AIzaSyBDl0DImA2BlNJndznBci_rmIzYa8VhEEA",
                    authDomain: "manuka-nuxt.firebaseapp.com",
                    databaseURL: "https://manuka-nuxt-default-rtdb.firebaseio.com",
                    projectId: "manuka-nuxt",
                    storageBucket: "manuka-nuxt.appspot.com",
                    messagingSenderId: "848001636087",
                    appId: "1:848001636087:web:234e4fe76dbdb91876e5f2"
                },
                services: {
                    firestore: true,
                    auth: true
                },

            }
        ],

    ],

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {}
}