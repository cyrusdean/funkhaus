/* global jsonData */
import './main.css'

import App from './components/App.vue'
import Vue from 'vue'
import cache from 'src/services/cache'

// import transitionPageFadeCMP from 'src/components/transitions/PageFade.vue'
// import RspImageCMP from 'src/components/shared/ResponsiveImage.vue'
// import inViewCMP from 'src/components/shared/InView.vue'
import wpMenuCMP from 'src/components/shared/WpMenu.vue'
import menuItemCMP from 'src/components/shared/MenuItem.vue'
import SvgImage from 'src/components/shared/SvgImage.vue'

// register global components
// Vue.component('transition-page-fade', transitionPageFadeCMP)
// Vue.component('responsive-image', RspImageCMP)
// Vue.component('in-view', inViewCMP)
Vue.component('wp-menu', wpMenuCMP)
Vue.component('menu-item', menuItemCMP)
Vue.component('svg-image', SvgImage)

// save initial page cache
cache[window.location.pathname] = Promise.resolve(jsonData)

// boot app
new Vue( App )
