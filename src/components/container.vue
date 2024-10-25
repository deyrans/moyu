<script setup>
import useDark from "./useDark.vue";
import moyuimage from "./moyuimage.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <useDark />
      </el-header>

      <el-main>
        <moyuimage />
      </el-main>

      <el-footer> </el-footer>
    </el-container>
  </div>
</template>

<style scoped>
</style>
