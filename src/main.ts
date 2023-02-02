import { createApp } from 'vue'
import App from './App.vue'
import VueSmoothScroll from 'vue3-smooth-scroll'
import store from './store'
import router from './router'
import "./styles/_reset.scss";
import "./styles/_variables.scss";
import "./styles/_mixins.scss";
import "./styles/style.scss";

createApp(App).use(store).use(router).use(VueSmoothScroll).mount('#app')
