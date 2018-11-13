module.exports = {
  env: {
    baseURL: (process.env.NODE_ENV === 'production' ? 'http//jumi.tt' : 'http://localhost:3000')
  },
  // Headers of the page
  head: {
    title: '玖米空间',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=no'
      },
      { hid: 'description', name: 'description', content: '玖米空间' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
    script: [
      { src: '/js/requestAnimationFrame.js' },
      { src: '/js/jumi.js' }
    ]
  },

  // loading
  loading: { color: '#ff0000' },

  //modules
  modules: [
    'bootstrap-vue/nuxt',
  ],

  css: [
    { src: '@/assets/css/main.styl', lang: 'stylus' }
  ],

  // Build configuration
  build: {
    analyze: {
      analyzerMode: 'static'
    },
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  plugins: [{
    src: '~plugins/vue-agile',
    ssr: false
  }]
}
