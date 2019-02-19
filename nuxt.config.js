module.exports = {
  cache: true,
  env: {
    baseURL: (process.env.NODE_ENV === 'production' ? 'http//www.9-mi.cn' : 'http://localhost:3000')
  },
  // Headers of the page
  head: {
    title: '玖米空间-阳台露台天台花园庭院定制装修设计（可代理加盟）',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=no'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '阳台,露台,天台,花园,庭院,橱柜,定制,装修设计'
      },
      {
        hid: 'description',
        name: 'description',
        content: '广东玖米空间科技有限公司是一家集研发、生产、销售为一体的综合型企业。 公司主要从事新型环保建材家居产品的开发和推广应用业务。公司下设研发中心、生产工厂以及直销、分销、工程、海外四个销售事业部。历经多年艰苦创业,玖米空间已经成为中国著名品牌、中国绿色品牌、中国户外建材行业领军品牌在全球高端户外建材领域享有较高知名度'}
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
    // analyze: {
    //   analyzerMode: 'static'
    // },
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
