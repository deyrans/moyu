<script setup lang="ts">
import { ref } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import { Sunny, Moon } from "@element-plus/icons-vue";

const is_switchDark = ref<boolean>(
  localStorage.getItem("useDarkKEY") === "dark" ? true : false
);
// useDark 来检测当前是否为深色模式，并通过 useToggle 来切换深色与浅色模式
const isDark = useDark({
  // 存储到localStorage中的Key 根据自己的需求更改
  storageKey: "useDarkKEY",
  // 暗黑class名字
  valueDark: "dark",
  // 高亮class名字
  valueLight: "light",
});
const toggleDark = useToggle(isDark);
</script>

<template>
  <el-switch v-model="is_switchDark" @change="toggleDark">
    <template #active-action>
      <el-icon><Moon /></el-icon>
    </template>
    <template #inactive-action>
      <el-icon><Sunny /></el-icon>
    </template>
  </el-switch>
</template>