import './assets/stylesheets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes'

import AppGlobalComponents from '@/components/global'

const app = createApp(App)

app.use(routes)
app.use(AppGlobalComponents)

app.mount('#app')
