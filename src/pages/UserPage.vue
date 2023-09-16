<script setup lang="ts">
import {useRouter} from "vue-router";

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
const router = useRouter()
const toEdit = (editKey: string, editName: string, currentValue: string) => {
  router.push({
    path: '/user/edit',
    query: {
      editKey,
      editName,
      currentValue,
    },
  })
}
</script>

<template>
  <van-cell title="头像" is-link @click="toEdit('avatarUrl','头像',userInfo.avatarUrl)">
    <img style="height: 48px;" :src="userInfo.avatarUrl">
  </van-cell>
  <van-cell title="昵称" is-link :value="userInfo.username" @click="toEdit('username','昵称',userInfo.username)"/>
  <van-cell title="账号" :value="userInfo.userAccount"/>
  <van-cell title="性别" is-link :value="userInfo.gender" @click="toEdit('gender','性别',userInfo.gender)"/>
  <van-cell title="手机号" is-link :value="userInfo.phone" @click="toEdit('phone','手机号',userInfo.phone)"/>
  <van-cell title="邮箱" is-link :value="userInfo.email" @click="toEdit('email','邮箱',userInfo.email)"/>
  <van-cell title="标签" is-link :value="userInfo.tags.toLocaleString()" @click="toEdit('tags','标签',userInfo.tags.toLocaleString())"/>
  <van-cell title="权限编号" :value="userInfo.authCode"/>
  <van-cell title="注册时间" :value="userInfo.createTime.toLocaleString()"/>
</template>

<style scoped>

</style>