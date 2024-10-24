<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <!-- 国际化组件 -->
  <el-config-provider :locale="zhCn">
    <app />
  </el-config-provider>

  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
