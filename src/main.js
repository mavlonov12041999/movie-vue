import { createApp } from 'vue'
import App from './App.vue'
import config from './utils/config'

import './styles/main.scss';
import './styles/variables.scss';

const app = createApp(App);

app.use(config);

app.mount('#app');
