
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'narnoo.retail',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  router: {
    linkExactActiveClass: 'bg-indigo-800'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
     // Using package name
     '@nuxtjs/axios',
      // Simple usage
    // '@nuxtjs/bootstrap-vue',
    
    // With options
    // ['@nuxtjs/bootstrap-vue', { css: false }],

     // Relative to your project srcDir
    //  '~/modules/awesome.js',
 
     // Providing options
    //  ['@nuxtjs/google-analytics', { ua: 'X1234567' }],
     function () {}

  ],
  variants: {
    extend: {
      divideColor: ['group-hover'],
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      margin: ['hover', 'focus'],
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
