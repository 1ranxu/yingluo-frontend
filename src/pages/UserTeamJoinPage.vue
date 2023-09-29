<script setup lang="ts">
import {useRouter} from "vue-router";
import TeamCardList from "../components/TeamCardList.vue";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.js";

const router = useRouter()

const teamList = ref([]);

const searchText = ref('')
/**
 * 搜索函数
 */
const listTeam = async (val) => {
  const res = await myAxios.get(`/team/list/mine/join`, {
    params: {
      searchText:val,
    }
  })
  if (res.data.code == 1) {
    teamList.value = res.data.data;
  }
}

onMounted(async ()=>{
  await listTeam('');
})

const onSearch = async (val)=>{
  await listTeam(val);
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