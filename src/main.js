import Vue from 'vue'
import VueMeta from 'vue-meta'
import router from './router/index'
import App from './App.vue'

Vue.use(VueMeta)
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
