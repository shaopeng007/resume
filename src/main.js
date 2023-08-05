import { createApp } from 'vue'
import './style.postcss'
import App from './App.vue'
import globalComponents from './components/index'
import './components/IconFont/iconfont'
const app = createApp(App)

app.use(globalComponents)


app.mount('#app')