<script setup lang="ts">
import {useRouter} from "vue-router";
import myAxios from "../plugins/myAxios.js";
import {ref} from "vue";

const router = useRouter()
const userAccount = ref('');
const userPassword = ref('');
const onSubmit = async (values) => {
  const res = await myAxios.post('/user/login', {
    userAccount: userAccount.value,
    userPassword: userPassword.value,
  })
  if (res.data.code == 1 && res.data.data) {
    // Toast.success('登录成功');
    await router.replace('/')
  }else{
    // Toast.fail('登录失败');
  }
};
</script>
<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="userAccount"
          name="用户账号"
          label="用户账号"
          placeholder="用户账号"
          :rules="[{ required: true, message: '请填写用户账号' }]"
      />
      <van-field
          v-model="userPassword"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<style scoped>

</style>