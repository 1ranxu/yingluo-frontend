<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()
const doAddTeam = () => {
  router.push('/team/add')
}
</script>

<template>
  <div id="teamPage">
    <van-button icon="plus" type="success" @click="doAddTeam">创建队伍</van-button>
    <van-button icon="search" type="primary">搜索队伍</van-button>
  </div>
</template>

<style scoped>

</style>