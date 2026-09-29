import {createApp} from 'vue'
import App from "./App.vue"
import "../src/style.css"
import router from './routes/route'
import { i18n } from './i18n'

createApp(App).use(router).use(i18n).mount('#app');

