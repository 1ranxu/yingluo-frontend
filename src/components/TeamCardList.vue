<script setup lang="ts">
import {TeamType} from "../modules/team";
import teamStatusEnum from "../constants/team.ts";
import kunkun from "../assets/kunkun.png"
import myAxios from "../plugins/myAxios.js";
interface TeamCardListProps {
  teamList: TeamType[];
}

const props = withDefaults(defineProps<TeamCardListProps>(), {
  // @ts-ignore
  teamList: [] as TeamType[],
})
/**
 * 加入队伍
 * @param id
 */
const doJoinTeam=async (id:number)=>{
  const res = await myAxios.post('/team/join',{
    teamId:id,
  })
  if (res.data.code==1){
    alert('加入成功')
  }else {
    alert('加入失败' + (res.data.description ? `,${res.data.description}`:''))
  }
}
</script>

<template>
  <van-card
      v-for="team in props.teamList"
      :desc="team.description"
      :title="team.name"
      :thumb="kunkun"
  >
    <template #tags>
      <van-tag plain type="danger" style="margin-right: 8px;margin-top: 8px">
        {{ teamStatusEnum[team.status] }}
      </van-tag>
    </template>

    <template #bottom>
      <div>
        {{'最大人数'+team.maxNum}}
      </div>
      <div v-if="team.expireTime">
        {{'过期时间'+team.expireTime}}
      </div>
      <div>
        {{'发布时间'+team.createTime}}
      </div>
    </template>

    <template #footer>
      <van-button type="primary" plain size="small" @click="doJoinTeam(team.id)">加入队伍</van-button>
    </template>
  </van-card>
</template>

<style scoped>

</style>