<template>
  <div>
    <!-- <p>当前时间：{{ currentTime  }}</p> -->
    <p>{{ greeting }}</p>
    <p>{{ tip }}</p>
    <!-- <button @click="updateTime">更新</button> -->
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

const currentTime = ref("00:00:00"); // 当前时间
const greeting = ref("夜深了"); // 问候语句
const tip = ref("深夜了，好好休息吧！");

//创建axios实例
const api = axios.create({
  baseURL: "https://api.kuleu.com/api",
  timeout: 5000,
});

//使用axios实例来发送请求
function updateTime() {
  api.get("/getGreetingMessage?type=json").then((res) => {
    currentTime.value = res.data.data.currentTime;
    greeting.value = res.data.data.greeting;
    tip.value = res.data.data.tip;
  });
}

updateTime()

</script>

<style scoped>
.dark {
  background: #252525;
  color: white;
}
</style>