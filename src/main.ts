import {createApp} from 'vue'
import App from './App.vue'
import {
    Button,
    Card,
    Cell,
    CellGroup,
    Col,
    Divider,
    Empty,
    Field,
    Form,
    Icon,
    NavBar,
    Picker,
    Popup,
    Radio,
    RadioGroup,
    Row,
    Search, Skeleton,
    Stepper, Switch,
    Tabbar,
    TabbarItem,
    Tag,
    Toast,
    TreeSelect
} from "vant";
// 把vue-router的所有方法作为一个对象引入
import * as VueRouter from 'vue-router'
import routes from "./config/route.ts";
import {DatetimePicker} from "vant/es";

const app=createApp(App)

const router = VueRouter.createRouter({
    //  内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHistory(),
    routes, // `routes: routes` 的缩写
})
app.use(NavBar);
app.use(Icon);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Toast);
app.use(router)
app.use(Search);
app.use(Tag);
app.use(Divider);
app.use(TreeSelect);
app.use(Col);
app.use(Row);
app.use(Cell);
app.use(CellGroup);
app.use(Form);
app.use(Field);
app.use(Button);
app.use(Card);
app.use(Empty);
app.use(Stepper);
app.use(Radio);
app.use(RadioGroup);
app.use(Picker);
app.use(DatetimePicker);
app.use(Popup);
app.use(Switch);
app.use(Skeleton);
app.mount('#app')



