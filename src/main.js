import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "@/sass/main.scss";

import AOS from "aos";
import "aos/dist/aos.css";
import VueCarousel from "vue-carousel";
Vue.use(VueCarousel);

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init({ disable: "phone" });
  },
  router,
  render: h => h(App)
}).$mount("#app");
