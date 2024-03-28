<template>
  <el-aside width="200px">
    <div class="block">
      <el-avatar :size="100" :src="imgUrl" />
    </div>
    <el-menu
        active-text-color="#7093DB"
        :default-active="$route.path"
        text-color="#555"
        router
      >
        <el-menu-item index="/menu/find">
          <span>发现音乐</span>
        </el-menu-item>
        <el-menu-item index="/menu/video">
          <span>MV</span>
        </el-menu-item>
        <el-menu-item index="/menu/recent">
          <span>最近播放</span>
        </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script setup>
  import imgUrl from '@/assets/duck.jpg'
  import { ref } from 'vue'

</script>

<style scoped>
  .block {
    text-align: center;
    margin: 50px;
  }
</style>