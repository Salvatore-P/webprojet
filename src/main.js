import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'
//Vue.use(BootstrapVue)
//Vue.use(IconsPlugin)




import { domain, clientId } from "./auth_config.json";
import { Auth0Plugin } from "./auth";

Vue.config.productionTip = false
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    );
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
