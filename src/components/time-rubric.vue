<template>
  <el-space direction="vertical" @click="updateTime">

    <el-text class="mx-1">当前时间：{{ currentTime }}</el-text>

    <el-row>
      <el-text class="mx-1">{{ greeting }}</el-text>
    </el-row>
    <el-text class="mx-1">{{ tip }} </el-text>
  </el-space>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Refresh } from "@element-plus/icons-vue";

const currentTime = ref(""); // 当前时间
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
    // currentTime.value = res.data.data.currentTime;
    greeting.value = res.data.data.greeting;
    tip.value = res.data.data.tip;
  });
}

const complement = (value: number): string => {
  return value < 10 ? `0${value}` : value.toString();
};

const formateDate = () => {
  const time = new Date();
  const year = time.getFullYear();
  const month = complement(time.getMonth() + 1);
  const day = complement(time.getDate());
  const hour = complement(time.getHours());
  const minute = complement(time.getMinutes());
  const second = complement(time.getSeconds());
  const week = "星期" + "日一二三四五六".charAt(time.getDay());
  return `${year}-${month}-${day} ${hour}:${minute}:${second} ${week}`;
};

onMounted(() => {
  setInterval(() => {
    currentTime.value = formateDate();
  }, 1000);
});

updateTime();
</script>
