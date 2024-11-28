<template>
  <div class="card_preview">
    <el-card style="max-width: 480px" class="card">
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
  baseURL: "https://api.uomg.com/api",
});

function update() {
  api
    .get("/rand.qinghua?format=json")
    .then((qinghua) => {
      contentText.value = qinghua.data.content;
    })
    .catch((err) => {
      console.log("qinghua()");
    });
}
update();
</script>

<style scoped>
.card {
  border-radius: 10px;
  width: 15pc;
}

@media screen and (max-width: 600px) {
  .card {
    width: 100%;
  }
}
</style>