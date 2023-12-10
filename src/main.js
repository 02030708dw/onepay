import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './lang'
import "@/assets/css/default/view/new_layout.css"
import "@/assets/css/default/view/style_01.css"
import "@/assets/css/app.css"

Vue.config.productionTip = false


new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
