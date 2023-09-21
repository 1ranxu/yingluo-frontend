<script setup lang="ts">
import {onMounted, ref} from "vue";
import {getCurrentUser} from "../services/user.ts";
import {useRouter} from "vue-router";

const user = ref();
onMounted(async () => {
      user.value=await getCurrentUser()
})
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
  <template v-if="user">
    <van-cell title="头像" is-link @click="toEdit('avatarUrl','头像',user.avatarUrl)">
      <img style="height: 48px;" :src="user.avatarUrl">
    </van-cell>
    <van-cell title="昵称" is-link :value="user.username" @click="toEdit('username','昵称',user.username)"/>
    <van-cell title="账号" :value="user.userAccount"/>
    <van-cell title="性别" is-link :value="user.gender" @click="toEdit('gender','性别',user.gender)"/>
    <van-cell title="手机号" is-link :value="user.phone" @click="toEdit('phone','手机号',user.phone)"/>
    <van-cell title="邮箱" is-link :value="user.email" @click="toEdit('email','邮箱',user.email)"/>
    <van-cell title="标签" is-link :value="user.tags.toLocaleString()" @click="toEdit('tags','标签',user.tags.toLocaleString())"/>
    <van-cell title="权限编号" :value="user.authCode"/>
    <van-cell title="注册时间" :value="user.createTime.toLocaleString()"/>
  </template>
</template>

<style scoped>

</style>