import { createApp } from 'vue';
import App from './App.vue';
import Navbar from './components/Navbar.vue';
import AboutMe from './components/AboutMe.vue';

const app = createApp(App);

app.component('navbar-custom', Navbar);
app.component('about-me', AboutMe);

app.mount('#app');