<script lang="ts" setup>
import { ref } from "vue";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
const value1 = ref(true);
</script>

<template>
  <el-switch v-model="value1" @change="toggleDark">
    <template #active-action>
      <span class="custom-active-action">D</span>
    </template>
    <template #inactive-action>
      <span class="custom-inactive-action">L</span>
    </template>
  </el-switch>
</template>

<style>
.dark {
  background: #252525;
  color: white;
}
</style>