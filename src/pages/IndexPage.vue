<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import my_axios from "../plugins/myAxios.js";
import UserCardList from "../components/UserCardList.vue";

const route = useRoute()

const {tags} = route.query
const userList = ref([])
onMounted(async () => {
  const userListData = await my_axios.get('/user/recommend',{
    params:{
      currentPage:1,
      pageSize:8,
    }
  })
      .then(res => {
        console.log('/user/recommend succeed', res)
        console.log(res)
        return res.data.data
      })
      .catch(error => {
        console.log('/user/recommend error', error)
      })
  if (userListData) {
    userListData.forEach(user => {
      user.tags = JSON.parse(user.tags)
    })
    userList.value = userListData
  }
})

</script>

<template>
  <user-card-list :user-list="userList"/>

  <van-empty description="数据为空" v-if="!userList || userList.length < 1"/>


</template>

<style scoped>

</style>