import { createApp } from 'vue';
import App from './App.vue';
import router from './router'
import profileImage from './assets/hima.jpg';

const app = createApp(App);
app.config.globalProperties.$profileImage = profileImage;
app.use(router).mount('#app');