import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/style/comment.css'
import router from '@/router/index'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app
  .use(pinia)
  .use(router)

app.mount('#app')
