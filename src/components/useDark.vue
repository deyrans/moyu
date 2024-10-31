<script setup lang="ts">
import { ref } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import { Sunny, Moon } from "@element-plus/icons-vue";

const is_dark = ref(false);
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <el-switch v-model="is_dark" @change="toggleDark">
    <template #active-action>
      <el-icon><Moon /></el-icon>
    </template>
    <template #inactive-action>
      <el-icon><Sunny /></el-icon>
    </template>
  </el-switch>
</template>

<style>
.dark {
  background: #252525;
  color: white;
}
</style> 