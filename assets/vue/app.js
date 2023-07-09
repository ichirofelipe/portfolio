import { createApp } from 'vue'
import App from './App.vue';
import '@public/css/style.css';
import '@public/css/tailwind.css';

//FONTAWESOME ICONS
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithubAlt, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'
library.add(faGithubAlt,faLinkedin, faFacebook)

//ROUTES
import { createRouter, createWebHashHistory } from "vue-router";
import Home from './content/Home.vue';

const routes = [
    { path: '/', component: Home },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App);

app.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')