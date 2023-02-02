import { createApp } from 'vue'
import App from './App.vue'
import VueSmoothScroll from 'vue3-smooth-scroll'
import store from './store'
import "./styles/_reset.scss";
import "./styles/_variables.scss";
import "./styles/_mixins.scss";
import "./styles/style.scss";

createApp(App).use(store).use(VueSmoothScroll).mount('#app')
