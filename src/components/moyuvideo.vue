<template>
  <div class="video_preview">
    <video :src="video_url" controls class="video" />
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";
import { ref } from "vue";

// https://dayu.qqsuu.cn/moyuribaoshipin/apis.php?type=json
const video_url = ref();

const api = axios.create({
  baseURL: "https://dayu.qqsuu.cn",
  timeout: 5000,
});

function get_moyuribaoshipin() {
  return api.get("/moyuribaoshipin/apis.php?type=json");
}

axios.all([get_moyuribaoshipin()]).then(
  axios.spread(function (moyuribaoshipin) {
    if (moyuribaoshipin.status == 200) {
      video_url.value = moyuribaoshipin.data.data;
    }
  })
);
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
