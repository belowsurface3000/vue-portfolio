import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import "./styles/_reset.scss";
import "./styles/_variables.scss";
import "./styles/_mixins.scss";
import "./styles/style.scss";

createApp(App).use(store).mount('#app')
