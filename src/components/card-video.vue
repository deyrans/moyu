<template>
  <div class="card_preview">
    <el-card class="card" v-if="is_closeCard">
      <template #header>{{ cardHeard }}</template>
      <el-skeleton
        style="width: 15pc"
        el-skeleton
        :rows="5"
        animated
        :loading="cardLoading"
      >
        <video
          :src="video_url"
          class="video"
          ref="video"
          @click="playVideo"
          @dblclick="updateVideo"
          @timeupdate="onTimeupdate"
          @loadedmetadata="loadEdmetadata"
        />
      </el-skeleton>
      <br />
      <!-- 更新按键 -->
      <!-- <el-button :icon="Refresh" circle @click="updateVideo" /> -->
      <el-button :icon="Switch" circle @click="intercutVideo" />
      <el-button v-if="is_show" :icon="VideoPlay" circle @click="playVideo" />
      <el-button v-else :icon="VideoPause" circle @click="playVideo" />
      <el-button :icon="CircleClose" circle @click="closeVideo" />
    </el-card>
  </div>
</template>

<script lang='ts' setup>
import axios from "axios";
import { ref, watch } from "vue";
import {
  Refresh,
  VideoPlay,
  VideoPause,
  Switch,
  Loading,
  CircleClose,
} from "@element-plus/icons-vue";

const video_url = ref();
const video = ref<HTMLVideoElement | null>(null);
// is_show true 显示暂停，false 显示播放
const is_show = ref(false);
const is_closeCard = ref(true);
const cardHeard = ref("video");
const cardLoading = ref(true);
// 当前时间
const currentTime = ref(0);
// 总时间
const duration = ref(0);
let flag = true;

const api = axios.create({
  baseURL: "https://api.kuleu.com/api",
});

function MP4_xiaojiejie() {
  api
    .get("/MP4_xiaojiejie?type=json")
    .then((MP4_xiaojiejie) => {
      if (MP4_xiaojiejie.status == 200) {
        video_url.value = MP4_xiaojiejie.data.mp4_video;
        is_show.value = true;
        cardHeard.value = "高质量小姐姐";
        cardLoading.value = false;
      }
    })
    .catch((error) => {
      console.log("MP4_xiaojiejie");
    });
}

function xjj() {
  api
    .get("/xjj?type=json")
    .then((xjj) => {
      if (xjj.status == 200) {
        video_url.value = xjj.data.video;
        is_show.value = true;
        cardHeard.value = "随机小姐姐";
        cardLoading.value = false;
      }
    })
    .catch((error) => {
      console.log("xjj");
    });
}

MP4_xiaojiejie();

function intercutVideo() {
  cardLoading.value = true;
  if (flag) {
    xjj();
    flag = false;
  } else {
    MP4_xiaojiejie();
    flag = true;
  }
}

function updateVideo() {
  cardLoading.value = true;
  if (flag) {
    xjj();
  } else {
    MP4_xiaojiejie();
  }
}

// 通过ev.target.currentTime获取当前时间
const onTimeupdate = (ev: any) => {
  currentTime.value = ev.target.currentTime;
  if (video.value?.ended) is_show.value = true;
};

// 通过ev.target.duration获取总时长
const loadEdmetadata = (ev: any) => {
  duration.value = ev.target.duration;
};

// 点击播放或暂停
const playVideo = (): void => {
  // paused:暂停 played：播放
  if (video.value?.paused) {
    video.value.play();
    is_show.value = false;
  } else if (video.value?.played) {
    video.value.pause();
    is_show.value = true;
  }
};

const closeVideo = () => {
  if (is_closeCard.value) is_closeCard.value = false;
  else is_closeCard.value = true;
};
</script>

<style scoped>
.card {
  border-radius: 10px;
}

.video {
  width: 15pc;
}

@media screen and (max-width: 600px) {
  .card {
    width: 100%;
  }
}
</style>