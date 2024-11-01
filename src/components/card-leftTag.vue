<template>
  <div class="card_preview">
    <el-card class="card">
      <el-tag :round="true" :disable-transitions="true" :hit="true" @click="shuow_video">视频</el-tag>
      <el-tag :round="true" :disable-transitions="true" :hit="true" @click="shuow_moyuvideo">摸鱼日报视频</el-tag>
    </el-card>
  </div>
</template>

<script setup>

</script>

<style scoped>
.card {
  border-radius: 5px;
  width: 15pc;
}

@media screen and (min-width: 1100px) {
  .card {
    width: 15pc;
  }
}

@media screen and (max-width: 600px) {
  .card {
    width: 100%;
  }
}
</style>