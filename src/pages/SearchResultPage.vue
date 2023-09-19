<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import my_axios from "../plugins/myAxios.js";
import qs from "qs"

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
  <van-card
      v-for="user in userList.values()"
      :desc="user.profile"
      :title="user.username"
      :thumb="user.avatarUrl"
  >
    <template #tags>
      <van-tag plain type="danger" v-for="tag in user.tags" style="margin-right: 8px;margin-top: 8px">{{ tag }}
      </van-tag>
    </template>
    <template #footer>
      <van-button size="mini">联系我</van-button>
    </template>
  </van-card>

  <van-empty description="暂无符合要求的用户" v-if="!userList || userList.length < 1"/>


</template>

<style scoped>

</style>