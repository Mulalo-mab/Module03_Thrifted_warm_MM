import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// For Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// fonts 
import "@/assets/fonts.css";


// For Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// For FontAwesome CSS
import '@fortawesome/fontawesome-free/css/all.min.css';

createApp(App).use(store).use(router).mount('#app')
