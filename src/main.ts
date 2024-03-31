import './style.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Lara from '@/presets/lara';

import 'primevue/resources/themes/saga-blue/theme.css'; // theme
import 'primevue/resources/primevue.min.css'; // core CSS
import 'primeicons/primeicons.css'; // icons
import router from './router';
const app = createApp(App);
const pinia = createPinia()
app.use(router);
app.use(PrimeVue, {
  unstyled: false,
  pt: Lara
});
app.use(pinia);
app.mount('#app');

