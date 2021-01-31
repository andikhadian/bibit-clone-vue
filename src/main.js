import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueTour from "vue-tour";

require("vue-tour/dist/vue-tour.css");

import "@/assets/styles/tailwind.css";

Vue.use(VueTour);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
