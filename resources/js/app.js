import './bootstrap';

// import { createApp } from 'vue';
// import App from './vue/app.vue';

// createApp(App).mount('#app');

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
    ],
});

const app = createApp({
    // root Vue component
});

app.use(router);
app.mount('#app');
