<template>
  <div class="image_preview">
    <el-skeleton style="width: 240px" :loading="loading" animated>
      <template #template>
        <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
        <el-skeleton-item animated style="width: 50%" />
        <el-skeleton-item animated style="width: 100%" />
        <el-skeleton-item animated style="width: 30%" />
      </template>
      <template #default>
        <el-image
          :src="img_url"
          :zoom-rate="1.2"
          :max-scale="7"
          :min-scale="0.2"
          :preview-src-list="srcList"
          :initial-index="0"
          fit="cover"
        >
          <template #error>
            <el-card class="card">
              <el-icon><Picture /></el-icon>
            </el-card>
          </template>
        </el-image>
      </template>
    </el-skeleton>
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";
import { ref, watch } from "vue";
import { Picture } from "@element-plus/icons-vue";

// https://api.j4u.ink/v1/store/other/proxy/remote/moyu.json
// https://api.vvhan.com/api/moyu?type=json
// https://dayu.qqsuu.cn/moyuribao/apis.php?type=json
// https://dayu.qqsuu.cn/moyurili/apis.php?type=json
// https://dayu.qqsuu.cn/mingxingbagua/apis.php?type=json
// https://dayu.qqsuu.cn/neihanduanzi/apis.php?type=json
// https://dayu.qqsuu.cn/weiyujianbao/apis.php?type=json
// https://dayu.qqsuu.cn/xingzuoyunshi/apis.php?type=json
const img_url = ref("");
const srcList = ref();
const loading = ref(true);

const api = axios.create({
  baseURL: "https://dayu.qqsuu.cn",
});

function get_j4u() {
  return axios.get("https://api.j4u.ink/v1/store/other/proxy/remote/moyu.json");
}

function get_vvhan() {
  return axios.get("https://api.vvhan.com/api/moyu?type=json");
}

function get_moyuribao() {
  return api.get("/moyuribao/apis.php?type=json");
}

function get_moyurili() {
  return api.get("/moyurili/apis.php?type=json");
}

function get_mingxingbagua() {
  return api.get("/mingxingbagua/apis.php?type=json");
}

function get_neihanduanzi() {
  return api.get("/neihanduanzi/apis.php?type=json");
}

function get_weiyujianbao() {
  return api.get("/weiyujianbao/apis.php?type=json");
}

function get_xingzuoyunshi() {
  return api.get("/xingzuoyunshi/apis.php?type=json");
}

srcList.value = [];

axios
  .all([
    get_vvhan(),
    get_j4u(),
    get_moyuribao(),
    get_moyurili(),
    get_mingxingbagua(),
    get_neihanduanzi(),
    get_weiyujianbao(),
    get_xingzuoyunshi(),
  ])
  .then(
    axios.spread(function (
      get_vvhan,
      j4u,
      moyuribao,
      moyurili,
      mingxingbagua,
      neihanduanzi,
      weiyujianbao,
      xingzuoyunshi
    ) {
      loading.value = false;
      if (get_vvhan.data.success) {
        img_url.value = get_vvhan.data.url;
        srcList.value.push(get_vvhan.data.url);
      } else if (j4u.data.message == "success") {
        img_url.value = j4u.data.data.img_url;
        srcList.value.push(j4u.data.data.img_url);
      } else if (moyuribao.data.msg == "success") {
        img_url.value = moyuribao.data.data;
      } else {
        loading.value = true;
      }

      if (moyuribao.data.msg == "success") {
        srcList.value.push(moyuribao.data.data);
        srcList.value.push(moyurili.data.data);
        srcList.value.push(mingxingbagua.data.data);
        srcList.value.push(neihanduanzi.data.data);
        srcList.value.push(weiyujianbao.data.data);
        srcList.value.push(xingzuoyunshi.data.data);
      } else {
        loading.value = true;
      }
    })
  );
</script>


<style scoped>
.el-image,
.card {
  border-radius: 5px;
  width: 15pc;
}

@media screen and (min-width: 1100px) {
  .image_preview {
    width: 15pc;
  }
}

@media screen and (max-width: 600px) {
  .el-image {
    width: 100%;
  }
}
</style>
