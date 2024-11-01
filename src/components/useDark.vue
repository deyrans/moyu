<script setup lang="ts">
import { ref, watch } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import { Sunny, Moon } from "@element-plus/icons-vue";

// useDark 来检测当前是否为深色模式，并通过 useToggle 来切换深色与浅色模式
const isDark = useDark();

// switch的v-model的值
const is_switchDark = ref(isDark.value);

const toggleDark = useToggle(isDark);

// 监听收到更改系统主题色，重新设置switch的v-model的值
watch(isDark, (newValue, oldValue) => {
  is_switchDark.value = newValue;
});
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