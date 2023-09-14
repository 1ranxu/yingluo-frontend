<script setup lang="ts">
const onClickLeft = () => alert('左');
const onClickRight = () => alert('右');
</script>

<template>
  <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  ></van-nav-bar>

</template>

<style scoped>

</style>