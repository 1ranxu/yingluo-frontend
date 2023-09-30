import IndexPage from "../pages/IndexPage.vue";
import TeamPage from "../pages/TeamPage.vue";
import UserPage from "../pages/UserPage.vue";
import UserDisplayPage from "../pages/UserDisplayPage.vue";
import UserTeamCreatePage from "../pages/UserTeamCreatePage.vue";
import UserTeamJoinPage from "../pages/UserTeamJoinPage.vue";
import SearchPage from "../pages/SearchPage.vue";
import UserEditPage from "../pages/UserEditPage.vue";
import SearchResultPage from "../pages/SearchResultPage.vue";
import UserLoginPage from "../pages/UserLoginPage.vue";
import TeamAddPage from "../pages/TeamAddPage.vue";
import TeamUpdatePage from "../pages/TeamUpdatePage.vue";


// 定义一些路由
const routes = [
    {path: '/', component: IndexPage},
    {path: '/team', title: '找队伍', component: TeamPage},
    {path: '/user', title: '个人', component: UserPage},
    {path: '/user/display', title: '个人信息', component: UserDisplayPage},
    {path: '/search', title: '找伙伴', component: SearchPage},
    {path: '/user/list', title: '搜索结果', component: SearchResultPage},
    {path: '/user/edit', title: '编辑信息', component: UserEditPage},
    {path: '/user/login', title: '登录', component: UserLoginPage},
    {path: '/team/add', title: '创建队伍', component: TeamAddPage},
    {path: '/team/update', title: '更新队伍', component: TeamUpdatePage},
    {path: '/user/team/create', title: '我创建的队伍', component: UserTeamCreatePage},
    {path: '/user/team/join', title: '我加入的队伍', component: UserTeamJoinPage},

]

export default routes;