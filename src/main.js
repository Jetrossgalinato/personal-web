// src/main.js or main.ts
import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import App from "./App.vue";
import router from "./router";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(router).use(vuetify).use(MotionPlugin).mount("#app");
