<template>
  <div class="card_preview">
    <el-card class="card">
      <template #header
        ><el-button :icon="Refresh" circle @click="update"
      /></template>

      <el-skeleton el-skeleton :rows="5" animated :loading="cardLoading">
        <el-space direction="vertical">
          <el-text class="mx-1">{{ contentText }}</el-text>
        </el-space>
      </el-skeleton>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Refresh } from "@element-plus/icons-vue";

const cardLoading = ref(true);
import axios from "axios";

const contentText = ref("");

cardLoading.value = false;
// cardLoading.value = true;

const api = axios.create({
  baseURL: "https://api.vvhan.com/api",
});

function update() {
  // axios
  //   .get("https://api.uomg.com/api/rand.qinghua")
  //   .then((qinghua) => {
  //     contentText.value = qinghua.data.content;
  //     console.log(qinghua.data);
  //   })
  //   .catch((err) => {
  //     console.log("qinghua()");
  //   });
  api
    .get("/text/love?type=json")
    .then((love) => {
      contentText.value = love.data.data.content;
    })
    .catch((err) => {
      console.log("love()");
    });
}
update();
</script>

<style scoped>
.card_preview .card {
  border-radius: 10px;
  width: 18pc;
}

@media screen and (max-width: 600px) {
  .card {
    width: 100%;
  }
}
</style>