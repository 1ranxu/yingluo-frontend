<script setup lang="ts">

const onClickLeft = () => alert('左');
const onClickRight = () => alert('右');

// const active = ref("index");
const onChange = (index: any) => alert(`标签 ${index}`);
</script>

<template>
  <!--  导航栏-->
  <van-nav-bar
      title="标题"
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
  <van-tabbar route  @change="onChange">
    <van-tabbar-item to="/" icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item to="/team" icon="search" name="team">队伍</van-tabbar-item>
    <van-tabbar-item to="/user" icon="friends-o" name="user">用户</van-tabbar-item>
  </van-tabbar>

</template>

<style scoped>

</style>