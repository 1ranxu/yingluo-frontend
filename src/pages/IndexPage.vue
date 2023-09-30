<script setup>
import {useRoute} from "vue-router";
import {ref, watchEffect} from "vue";
import my_axios from "../plugins/myAxios.js";
import UserCardList from "../components/UserCardList.vue";

const route = useRoute()

const {tags} = route.query

const userList = ref([])

const loading=ref(true)

const isMatchMode=ref(false);
const loadData=async ()=>{
  loading.value=true
  let userListData
  // 匹配模式
  if (isMatchMode.value){
    userListData = await my_axios.get('/user/match',{
      params:{
        num:10
      }
    }).then(res => {
      console.log('/user/match succeed', res)
      console.log(res)
      return res.data.data
    }).catch(error => {
      console.log('/user/match error', error)
    })
    if (userListData) {
      userListData.forEach(user => {
        user.tags = JSON.parse(user.tags)
      })
      userList.value = userListData
    }
  }else {
    // 普通模式
    userListData = await my_axios.get('/user/recommend',{
      params:{
        currentPage:1,
        pageSize:8,
      }
    }).then(res => {
      console.log('/user/recommend succeed', res)
      console.log(res)
      return res.data.data
    }).catch(error => {
      console.log('/user/recommend error', error)
    })
    if (userListData) {
      userListData.forEach(user => {
        user.tags = JSON.parse(user.tags)
      })
      userList.value = userListData
    }
  }
  loading.value=false
}
watchEffect(()=>{
  loadData()
})
</script>

<template>
  <van-cell center title="心动模式">
    <template #right-icon>
      <van-switch v-model="isMatchMode" size="24" />
    </template>
  </van-cell>
  <user-card-list :user-list="userList" :loading="loading"/>
  <van-empty description="数据为空" v-if="!userList || userList.length < 1"/>
</template>

<style scoped>

</style>