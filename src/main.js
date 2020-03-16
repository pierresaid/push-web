import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./plugins/vee-validate";
import "./plugins/custom-components";
import Axios from "axios";

Axios.defaults.baseURL = process.env.API_URL || "http://localhost:6000";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
