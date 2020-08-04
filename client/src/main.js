import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { domain, clientId, audience } from "../auth_config.json";
import { Auth0Plugin } from "./auth";
import store from './store';
import { VueHammer } from 'vue2-hammer';

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  audience,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});
Vue.use(router);
Vue.use(VueHammer);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");