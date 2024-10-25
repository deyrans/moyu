<script lang="ts" setup>
const url = "https://api.vvhan.com/api/moyu";
const srcList = ["https://api.vvhan.com/api/moyu"];
</script>

<template>
  <div class="demo-image__preview">
    <el-image
      style="width: 15%; height: 10%"
      :src="url"
      :zoom-rate="1.2"
      :max-scale="7"
      :min-scale="0.2"
      :preview-src-list="srcList"
      :initial-index="1"
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
