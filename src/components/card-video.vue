<template>
  <div class="card_preview">
    <div class="card">
      <video :src="video_url" class="video" ref="video" />
    </div>
    <el-button :icon="Refresh" circle @click="updateVideo" />
    <el-button
      v-if="is_show == 0"
      :icon="VideoPlay"
      circle
      @click="playVideo"
    />
    <el-button v-else :icon="VideoPause" circle @click="playVideo" />
  </div>
</template>

<script lang='ts' setup>
import axios from "axios";
import { ref, watch } from "vue";
import { Refresh, VideoPlay, VideoPause } from "@element-plus/icons-vue";

const video_url = ref();
const video = ref<HTMLVideoElement | null>(null);
const is_show = ref(0);
const currentTime = ref();
const duration = ref();

const api = axios.create({
  baseURL: "https://api.kuleu.com",
  timeout: 5000,
});

function updateVideo() {
  api.get("/api/MP4_xiaojiejie?type=json").then((MP4_xiaojiejie) => {
    if (MP4_xiaojiejie.status == 200) {
      video_url.value = MP4_xiaojiejie.data.mp4_video;
    }
  });
}

updateVideo();

const playVideo = (): void => {
  if (video.value?.paused) {
    video.value.play();
    is_show.value = 1;

    console.log(video.value.currentTime);
    console.log(video.value.duration);
    
  } else if (video.value?.played) {
    video.value.pause();
    is_show.value = 0;
  }
};
</script>

<style scoped>
.card {
  border-radius: 5px;
  width: 15pc;
}

.video {
  width: 15pc;
}

@media screen and (min-width: 1100px) {
  .card {
    width: 15pc;
  }
}

@media screen and (max-width: 600px) {
  .card {
    width: 100%;
  }
}
</style>