<script setup lang="ts">
import {useRouter} from "vue-router";
import TeamCardList from "../components/TeamCardList.vue";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.js";

const router = useRouter()

const teamList = ref([]);

const searchText = ref('')
const doAddTeam = () => {
  router.push('/team/add')
}
/**
 * 搜索函数
 */
const listTeam = async () => {
  const res = await myAxios.get(`/team/list/mine/create`, {
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

    <van-button class="add-button" icon="plus" type="success" @click="doAddTeam"/>
    <team-card-list :team-list="teamList"/>
    <van-empty description="暂无符合要求的队伍" v-if="!teamList || teamList.length < 1"/>
  </div>

</template>

<style scoped>

</style>