<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";
import myAxios from "../plugins/myAxios.js"
import {getCurrentUser} from "../services/user.ts";

const route = useRoute()
const router = useRouter()
const editUser = ref({
  editKey: route.query.editKey,
  editName: route.query.editName,
  currentValue: route.query.currentValue,
})


const onSubmit = async () => {
  const currentUser = await getCurrentUser()
  if (!currentUser){
    return;
  }
  const res = await myAxios.post('/user/update', {
    'id': currentUser.id,
    [editUser.value.editKey as string]: editUser.value.currentValue
  })
  if (res.data.code == 1 && res.data.data > 0) {
    // Toast.success('修改成功');
    router.back()
  } else {
    // Toast.fail('修改失败');
  }
};
</script>

<template>
  <van-form @submit="onSubmit">
    <van-field
        v-model="editUser.currentValue"
        :name="editUser.editKey"
        :label="editUser.editName"
        :placeholder="`请输入${editUser.editName}`"
    />

    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        确认修改
      </van-button>
    </div>
  </van-form>
</template>

<style scoped>

</style>