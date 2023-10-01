<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";

const searchText = ref('');
const onSearch = () => {
  activeIds.value = tagList.value
      .flatMap(parentTag => parentTag.children)
      .filter(item => searchText.value.includes(item.text))
      .map(item => item.id)
};
const onCancel = () => {
  searchText.value = ''
  activeIds.value = []
};
// 移除标签
const close = (tag:string) => {
  // 保留id不等于tag的标签
  activeIds.value = activeIds.value.filter(item => item !== tag)
};

const router = useRouter()
const doSearchResult = () => {
  router.push({
    path: "/user/list",
    query: {
      tags: activeIds.value
    }
  })
}


const activeIds = ref([]);
const activeIndex = ref(0);
// 标签列表
let tagList = ref([
  {
    text: '性别',
    children: [
      {text: '男', id: '男'},
      {text: '女', id: '女'},
    ],
  },
  {
    text: '方向',
    children: [
      {text: 'Java', id: 'Java'},
      {text: 'C++', id: 'C++'},
      {text: 'Go', id: 'Go'},
    ],
  },
  {
    text: '段位',
    children: [
      {text: '初级', id: '初级'},
      {text: '中级', id: '中级'},
      {text: '高级', id: '高级'},
    ],
  },
  {
    text: '目标',
    children: [
      {text: '考研', id: '考研'},
      {text: '春招', id: '春招'},
      {text: '秋招', id: '秋招'},
    ],
  },
]);
</script>

<template>
  <form action="/">
    <van-search
        v-model="searchText"
        show-action
        placeholder="请输入要搜索的标签"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>

  <van-divider content-position="left">已选标签</van-divider>
  <div v-if="activeIds.length === 0">请选择标签</div>
  <van-row gutter="16">
    <van-col v-for="tag in activeIds">
      <van-tag round closeable size="medium" type="primary" @close="close(tag)">
        {{ tag }}
      </van-tag>
    </van-col>
  </van-row>

  <van-divider content-position="left">选择标签</van-divider>
  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tagList"
  />

  <div style="padding: 12px">
    <van-button block type="primary" @click="doSearchResult">搜索</van-button>
  </div>


</template>

<style scoped>

</style>