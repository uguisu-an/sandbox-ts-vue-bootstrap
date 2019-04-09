import Vue, { VNode } from "vue";
import App from "./App.vue";

new Vue({
  el: "#app",
  render(h): VNode {
    return h(App);
  }
});
