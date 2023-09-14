import { createApp } from 'vue'
import App from './App.vue'
import {Icon, NavBar, Tabbar, TabbarItem, Toast} from "vant";
import 'vant/es/toast/style';

const app=createApp(App)

app.use(NavBar);
app.use(Icon);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Toast);
app.mount('#app')
