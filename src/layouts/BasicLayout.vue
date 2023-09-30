<script setup lang="ts">
import {useRouter} from "vue-router";
import {ref} from "vue";
import routes from "../config/route.ts";

const router = useRouter()
const DEFAULT_TITLE = '樱络'
const title = ref(DEFAULT_TITLE)

router.beforeEach((to) => {
  const toPath = to.path;
  const route = routes.find(route => {
    return route.path == toPath;
  })
  title.value =route?.title?? DEFAULT_TITLE

})
const onClickLeft = () => {
  router.back()
};
const onClickRight = () => {
  // 带有路径的对象
  router.push({path: '/search'})
};

</script>

<template>
  <!--  导航栏-->
  <van-nav-bar
      :title="title"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18"/>
    </template>
  </van-nav-bar>

  <div id="content">
    <router-view/>
  </div>


  <!--  TabBar-->
  <van-tabbar route >
    <van-tabbar-item to="/" icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item to="/team" icon="search" name="team">队伍</van-tabbar-item>
    <van-tabbar-item to="/user" icon="friends-o" name="user">个人</van-tabbar-item>
  </van-tabbar>

</template>

<style scoped>
#content {
  padding-bottom: 50px;
}
</style>