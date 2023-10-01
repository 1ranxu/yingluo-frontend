<script setup lang="ts">
import TeamCardList from "../components/TeamCardList.vue";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.js";

const teamList = ref([]);

const searchText = ref('')
/**
 * 搜索函数
 */
const listTeam = async () => {
  const res = await myAxios.get(`/team/list/mine/join`,{
    params: {
      searchText:searchText.value,
    }
  })
  if (res.data.code == 1) {
    teamList.value = res.data.data;
  }
}

onMounted(async ()=>{
  await listTeam();
})

const onSearch = async ()=>{
  await listTeam();
}


</script>

<template>
  <div id="teamPage">
    <van-search v-model="searchText" placeholder="搜索队伍" @search="onSearch"/>
    <team-card-list :team-list="teamList"/>
    <van-empty description="暂无符合要求的队伍" v-if="!teamList || teamList.length < 1"/>
  </div>

</template>

<style scoped>

</style>