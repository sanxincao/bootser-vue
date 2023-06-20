import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { DatePicker } from 'ant-design-vue';

createApp(App).use(store).use(router).use(DatePicker).mount('#app')
