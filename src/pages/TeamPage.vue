<script setup lang="ts">
import {useRouter} from "vue-router";
import TeamCardList from "../components/TeamCardList.vue";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.js";

const router = useRouter()
const doAddTeam = () => {
  router.push('/team/add')
}
const teamList=ref([]);
onMounted(async ()=>{
  const res = await myAxios.get(`/team/list`)
  if (res.data.code==1){
    teamList.value=res.data.data;
  }
})
</script>

<template>
  <div id="teamPage">
    <van-button icon="plus" type="success" @click="doAddTeam">创建队伍</van-button>
    <team-card-list :team-list="teamList"/>
  </div>
</template>

<style scoped>

</style>