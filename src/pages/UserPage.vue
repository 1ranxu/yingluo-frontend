<script setup lang="ts">
const userInfo = {
  id: 1,
  userAccount: "luoying",
  username: "luoying",
  avatarUrl: "https://thirdwx.qlogo.cn/mmopen/vi_32/RNJfsfhsEic2dzoJasQgMoHjw0h5580v6aQ5OOCHM0Fk8B3Fw98CWmZlbqcx8LLDEKunkZnwU5aEliaKhic8MFOYQ/132",
  gender: "男",
  phone: "15683343885",
  email: "1574925401@qq.com",
  userStatus: 0,
  createTime: new Date(),
  userRole: 0,
  authCode: 1,
  tags: ["Java", "男", "秋招", "大三"],
};
</script>

<template>
  <van-cell title="头像" is-link to="/user/edit">
    <img style="height: 48px;" :src="userInfo.avatarUrl">
  </van-cell>
  <van-cell title="昵称" is-link to="/user/edit" :value="userInfo.username"/>
  <van-cell title="账号" :value="userInfo.userAccount"/>
  <van-cell title="性别" is-link to="/user/edit" :value="userInfo.gender"/>
  <van-cell title="手机号" is-link to="/user/edit" :value="userInfo.phone"/>
  <van-cell title="邮箱" is-link to="/user/edit" :value="userInfo.email"/>
  <van-cell title="标签" is-link to="/user/edit" :value="userInfo.tags.toLocaleString()"/>
  <van-cell title="权限编号" :value="userInfo.authCode"/>
  <van-cell title="注册时间" :value="userInfo.createTime.toLocaleString()"/>
</template>

<style scoped>

</style>