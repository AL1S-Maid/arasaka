import '@/styles/main.scss'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import naive from 'naive-ui'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.use(naive)
app.use(vuetify)

app.directive('slide-in', {
  mounted(el) {
    // 监听滚动事件
    const handleScroll = () => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight) { // 如果元素在视口内
        el.classList.add('slide-in') // 添加动画类
        window.removeEventListener('scroll', handleScroll) // 动画触发后移除事件监听
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
  }
})

app.mount('#app')
