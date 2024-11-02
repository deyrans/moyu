<template>
  <div class="video_preview">
    <el-skeleton
      style="width: 240px"
      el-skeleton
      :rows="5"
      animated
      :loading="cardLoading"
      @dblclick="SwitchVideo"
    >
      <template #template>
        <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
        <el-skeleton-item animated style="width: 50%" />
        <el-skeleton-item animated style="width: 50%" />
        <el-skeleton-item animated style="width: 40%" />
        <el-button
          :icon="SwitchButton"
          
          circle
          @click="SwitchVideo"
        />
        <el-skeleton-item animated style="width: 40%" />
      </template>
      <template #default>
        <video
          :src="video_url"
          ref="video"
          class="video"
          @click="playVideo"
          @dblclick="SwitchVideo"
        />
      </template>
    </el-skeleton>
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";
import { ref } from "vue";
import { SwitchButton } from "@element-plus/icons-vue";

const cardLoading = ref(true);
const Switch_Button = ref(true);
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
