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
  baseURL: "https://api.uomg.com/api/rand.qinghua?format=json",
});

function update() {
  axios
    .get("https://api.kuleu.com/api/yiyan")
    .then((yiyan) => {
      contentText.value = yiyan.data;
    })
    .catch((err) => {
      console.log("yiyan()");
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