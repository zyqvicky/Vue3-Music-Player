<template>
  <div class="search">
    <el-input 
  v-model="search" 
  style="width: 480px" 
  placeholder="搜索歌曲" 
  size="large"
  :suffix-icon="Search"
  class="search"
  />
    <el-button type="primary" plain class="duiqi">搜索</el-button>
  </div>
</template>

<script setup>
  import { Search } from '@element-plus/icons-vue';
  import { ref } from 'vue'

  const search = ref('')
</script>

<style scoped lang="scss">
  .search {
    text-align: center;
    margin-top: 20px;
  }

  .icon {
    vertical-align: middle
  }

  .duiqi {
    margin-top: 20px;
    margin-left: 15px;
  }
</style>