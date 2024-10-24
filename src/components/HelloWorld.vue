<script lang="ts" setup>
const url = "https://api.vvhan.com/api/moyu";
</script>

<template>
  <div class="demo-image__preview">
    <el-image
      :src="url"
      :zoom-rate="1.2"
      :max-scale="7"
      :min-scale="0.2"
      :initial-index="4"
      fit="cover"
    />
  </div>
</template>

<style scoped>
.demo-image__error .image-slot {
  font-size: 30px;
}
.demo-image__error .image-slot .el-icon {
  font-size: 30px;
}
.demo-image__error .el-image {
  width: 100%;
  height: 200px;
}
</style>
