<template>
  <div class="video_preview" @click="playVideo" @dblclick="SwitchVideo">
    <el-skeleton el-skeleton :rows="5" animated :loading="cardLoading">
      <video :src="video_url" ref="video" class="video" />
    </el-skeleton>
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";
import { ref } from "vue";

const cardLoading = ref(true);
// https://dayu.qqsuu.cn/moyuribaoshipin/apis.php?type=json
const video_url = ref();
const video = ref<HTMLVideoElement | null>(null);

const api = axios.create({
  baseURL: "https://dayu.qqsuu.cn/moyuribaoshipin",
});

function get_moyuribaoshipin() {
  return api.get("/apis.php?type=json");
}

axios.all([get_moyuribaoshipin()]).then(
  axios.spread(function (moyuribaoshipin) {
    video_url.value = moyuribaoshipin.data.data;
  })
);

// 点击播放或暂停
const playVideo = (): void => {
  // paused:暂停 played：播放
  if (video.value?.paused) {
    video.value.play();
  } else if (video.value?.played) {
    video.value.pause();
  }
};

const SwitchVideo = () => {
  if (cardLoading.value) {
    cardLoading.value = false;
  } else {
    cardLoading.value = true;
  }
};
</script>


<style scoped>
.video {
  border-radius: 5px;
  width: 15pc;
}

@media screen and (min-width: 1100px) {
  .video_preview {
    width: 15pc;
  }
}

@media screen and (max-width: 600px) {
  .video {
    width: 100%;
  }
}
</style>
