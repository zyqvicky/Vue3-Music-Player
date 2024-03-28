<template>
  <div class="container">
    <el-card style="width: 480px" shadow="always">Always</el-card>
    <el-card style="width: 480px" shadow="hover">Hover</el-card>
    <el-card style="width: 480px" shadow="never">Never</el-card>
  </div>
</template>

<script setup>

</script>

<style scoped>
  .container {
    width: 500px;
    height: 200px;
    background-color: pink;
  }
</style>