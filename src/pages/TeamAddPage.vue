<script setup lang="ts">
import {useRouter} from "vue-router";
import {ref} from "vue";
import myAxios from "../plugins/myAxios.js"


const router = useRouter()
const initFormData = {
  name: "",
  description: "",
  expireTime: null,
  maxNum: 3,
  status: 0,
  password: "",

}
// 用户填写的表单数据
const addTeamData = ref(initFormData)

const mindate = new Date();

const showPicker = ref(false);

const onSubmit = async () => {
  const postData = {
    ...addTeamData.value,
    status: Number(addTeamData.value.status),
  }
  console.log(postData)

  const res = await myAxios.post('/team/add', postData, {})

  if (res.data.code == 1) {
    await router.push({
      path: '/team',
      replace: true,
    })
  }
};
</script>

<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="addTeamData.name"
          name="name"
          label="队伍名"
          placeholder="请输入队伍名"
          :rules="[{ required: true, message: '请输入队伍名' }]"
      />

      <van-field
          v-model="addTeamData.description"
          rows="1"
          autosize
          label="队伍描述"
          type="textarea"
          placeholder="请输入队伍描述"
      />

      <van-field
          is-link
          readonly
          name="datePicker"
          label="过期时间"
          :placeholder="addTeamData.expireTime ?? '点击选择过期时间'"
          @click="showPicker = true"
      />
      <van-popup v-model:show="showPicker" position="bottom">
        <van-datetime-picker
            v-model="addTeamData.expireTime"
            type="datetime"
            title="请选择过期时间"
            :min-date="mindate"
            @confirm="showPicker = false"
            @cancel="showPicker = false"
        />
      </van-popup>


      <van-field name="stepper" label="最大人数">
        <template #input>
          <van-stepper v-model="addTeamData.maxNum" max="10" min="2"/>
        </template>
      </van-field>

      <van-field name="radio" label="单选框">
        <template #input>
          <van-radio-group v-model="addTeamData.status" direction="horizontal">
            <van-radio name="0">公开</van-radio>
            <van-radio name="1">私有</van-radio>
            <van-radio name="2">加密</van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <van-field
          v-if="Number(addTeamData.status) === 2"
          v-model="addTeamData.password"
          type="password"
          name="password"
          label="队伍密码"
          placeholder="请输入队伍密码"
          :rules="[{ required: true, message: '请输入队伍密码' }]"
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