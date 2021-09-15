module.exports = {
  ssr: true,

  target: 'server',

  head: {
    title: 'nuxtapp',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: [
    { src: '~/plugins/supabase.js' },
    { src: '~/plugins/mmcc.js', mode: 'client' },
  ],

  components: {
    dirs: [
      '~/components/',
      {
        path: '~/components/layout/',
        prefix: 'layout',
      },
      {
        path: '~/components/section/',
        prefix: 'section',
      },
      {
        path: '~/components/base/',
        prefix: 'base',
      },
    ],
  },

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss'],

  modules: [],

  build: {},

  env: {
    // Chatbot configuration id
    configurationId: '1f63ced0-f8c7-4d63-9274-fd881511f1d3',

    // Database Key and URL
    supabaseKey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjIxMjYxODA2LCJleHAiOjE5MzY4Mzc4MDZ9.jFt9LKNeIeJ5DZEtKIHWe71neRbSxL9TC-FmyB-0Sc8',
    supabaseUrl: 'https://wemtonqwokryfponsnhm.supabase.co',
  },
}
