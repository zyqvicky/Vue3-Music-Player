<template>
  <div class="container-main">
    <MenuList></MenuList>
    <el-container class="main">
      <el-main class="mask">
        <Search></Search>
        <MusicProgress></MusicProgress>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
  import MenuList from '@/components/MenuList.vue'
  import Search from '@/components/Search.vue'
import PlayRecently from '../menu/PlayRecently.vue';
</script>

<style lang="scss" scoped>
  .container-main {
  display: flex;
  width: 100%;
  height: 100vh;
  }

  .main {
    position: relative;
    background: url('@/assets/bgc.jpg') no-repeat;
    background-size: cover;
  }

  .mask {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    position: relative;
  }
</style>