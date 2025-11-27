import './assets/main.css'
import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router'

import ButtonLink from './components/md/composants/ButtonLinkComponent.vue'

const app = createApp(App)
const head = createHead()

app.component('ButtonLink', ButtonLink)

app.use(router)
app.use(head)

app.mount('#app')
