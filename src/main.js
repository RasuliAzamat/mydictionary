import { createApp } from 'vue'
import './style.css'
import router from "./router/index";
import { store } from "./store/index";
import App from './App.vue'

const app = createApp(App)

app
    .use(router)
    .use(store)
    .mount('#app')
