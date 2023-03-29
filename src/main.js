import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
// import "@fortawesome/vue-fontawesome"

import router from "./router";

createApp(App).use(router).mount("#app");