import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import VCharts from 'v-charts'
//全局注册BootstrapVue组件
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
//引用BootstrapVue样式
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Install BootstrapVue
Vue.use(VCharts)
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
