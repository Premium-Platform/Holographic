import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

// 导入组件库
import Holographic from '../../src/index'

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(Holographic)
app.mount('#app') 