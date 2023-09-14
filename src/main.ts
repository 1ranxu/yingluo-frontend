import { createApp } from 'vue'
import App from './App.vue'
import {Button, NavBar} from "vant";

const app=createApp(App)

app.use(Button);
app.use(NavBar);
app.mount('#app')
