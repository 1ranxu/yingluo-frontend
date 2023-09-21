<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import my_axios from "../plugins/myAxios.js";
import qs from "qs"
import UserCardList from "../components/UserCardList.vue";

const route = useRoute()

const {tags} = route.query
const userList = ref([])
onMounted(async () => {
  const userListData = await my_axios.get('/user/searchByTags', {
    params: {
      tags: tags
    },
    paramsSerializer: params => qs.stringify(params, {indices: false})
  })
      .then(res => {
        console.log('/user/searchByTags succeed', res)
        console.log(res)
        return res.data.data
      })
      .catch(error => {
        console.log('/user/searchByTags error', error)
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

  <van-empty description="暂无符合要求的用户" v-if="!userList || userList.length < 1"/>


</template>

<style scoped>

</style>