<script setup>
import useDark from "./useDark.vue";
import moyuimage from "./moyuimage.vue";
import timeRubric from "./time-rubric.vue";
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

      <el-footer> 
        <timeRubric />
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped>
</style>
