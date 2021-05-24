import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(bootstrap).use(router).use(store).mount('#app')
