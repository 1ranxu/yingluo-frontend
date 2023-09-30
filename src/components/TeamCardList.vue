<script setup lang="ts">
import {TeamType} from "../modules/team";
import teamStatusEnum from "../constants/team";
import kunkun from "../assets/kunkun.png"
import myAxios from "../plugins/myAxios.js";
import {getCurrentUser} from "../services/user";
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";

interface TeamCardListProps {
  teamList: TeamType[];
}

const currentUser = ref()
onMounted(async () => {
  currentUser.value = await getCurrentUser()
})

const router = useRouter();

const props = withDefaults(defineProps<TeamCardListProps>(), {
  // @ts-ignore
  teamList: [] as TeamType[],
})
/**
 * 加入队伍
 * @param id
 */
const doJoinTeam = async (id: number) => {
  const res = await myAxios.post('/team/join', {
    teamId: id,
  })
  if (res.data.code == 1) {
    alert('加入成功')
  } else {
    alert('加入失败' + (res.data.description ? `,${res.data.description}` : ''))
  }
}

const doUpdateTeam = (id: number) => {
  router.push({
    path: '/team/update',
    query: {
      id
    }
  })
}
/**
 * 退出队伍
 * @param id
 */
const doQuitTeam = async (id: number) => {
  const res = await myAxios.post('/team/quit', {
    teamId: id,
  })
  if (res.data.code == 1) {
    alert('退出队伍成功')
  }
}
/**
 * 解散队伍
 * @param id
 */
const doDeleteTeam = async (id: number) => {
  const res = await myAxios.post('/team/delete', {
    teamId: id,
  })
  if (res.data.code == 1) {
    alert('解散队伍成功')
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
        {{ '最大人数' + team.maxNum }}
      </div>
      <div v-if="team.expireTime">
        {{ '过期时间' + team.expireTime }}
      </div>
      <div>
        {{ '发布时间' + team.createTime }}
      </div>
    </template>

    <template #footer>
      <!--  只有我不在队伍里面，才展示加入队伍    -->
      <van-button v-if="team.userId !== currentUser?.id && !team.hasJoin" type="success" plain size="small"
                  @click="doJoinTeam(team.id)">
        加入队伍
      </van-button>

      <!--  只有我是队长，才展示更新队伍    -->
      <van-button v-if="team.userId === currentUser?.id" type="primary" plain size="small"
                  @click="doUpdateTeam(team.id)">
        更新队伍
      </van-button>

      <!--  只有我在队伍里面，才展示退出队伍    -->
      <van-button v-if="team.hasJoin" type="warning" plain size="small" @click="doQuitTeam(team.id)">
        退出队伍
      </van-button>

      <!--  只有我是队长，才展示解散队伍    -->
      <van-button v-if="team.userId === currentUser?.id" type="danger" plain size="small"
                  @click="doDeleteTeam(team.id)">
        解散队伍
      </van-button>
    </template>
  </van-card>
</template>

<style scoped>

</style>