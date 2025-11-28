import './assets/main.css'
import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const head = createHead()

const components = import.meta.glob('./components/md/composants/*.vue', { eager: true })

for (const path in components) {
  const component = components[path].default
  const name = path.split('/').pop().replace('.vue', '')
  app.component(name, component)
}

app.use(router)
app.use(head)
app.mount('#app')
