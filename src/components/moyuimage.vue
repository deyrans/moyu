<template>
  <div class="image_preview">
    <el-image
      :src="img_url"
      :zoom-rate="1.2"
      :max-scale="7"
      :min-scale="0.2"
      :preview-src-list="srcList"
      :initial-index="1"
      fit="cover"
    />
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";
import { ref } from "vue";

// https://api.j4u.ink/v1/store/other/proxy/remote/moyu.json
// https://api.vvhan.com/api/moyu?type=json
// https://dayu.qqsuu.cn/moyuribao/apis.php?type=json
// https://dayu.qqsuu.cn/moyurili/apis.php?type=json
// https://dayu.qqsuu.cn/mingxingbagua/apis.php?type=json
// https://dayu.qqsuu.cn/neihanduanzi/apis.php?type=json
// https://dayu.qqsuu.cn/weiyujianbao/apis.php?type=json
// https://dayu.qqsuu.cn/xingzuoyunshi/apis.php?type=json
// https://dayu.qqsuu.cn/moyuribaoshipin/apis.php?type=json
const img_url = ref();
const srcList = ref();

const api = axios.create({
  baseURL: "https://dayu.qqsuu.cn",
  timeout: 5000,
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

function get_moyuribaoshipin() {
  return api.get("/moyuribaoshipin/apis.php?type=json");
}

axios
  .all([
    get_j4u(),
    get_vvhan(),
    get_moyuribao(),
    get_moyurili(),
    get_mingxingbagua(),
    get_neihanduanzi(),
    get_weiyujianbao(),
    get_xingzuoyunshi(),
  ])
  .then(
    axios.spread(function (
      j4u,
      vvhan,
      moyuribao,
      moyurili,
      mingxingbagua,
      neihanduanzi,
      weiyujianbao,
      xingzuoyunshi
    ) {
      // 初始化
      srcList.value = [];

      if (vvhan.status == 200) {
        img_url.value = vvhan.data.url;
        
        srcList.value.push(vvhan.data.url);

        
        srcList.value.push(moyuribao.data.data);
        srcList.value.push(moyurili.data.data);
        srcList.value.push(mingxingbagua.data.data);
        srcList.value.push(neihanduanzi.data.data);
        srcList.value.push(weiyujianbao.data.data);
        srcList.value.push(xingzuoyunshi.data.data);
      } else if (j4u.status == 200) {
        img_url.value = j4u.data.data.img_url;

        srcList.value.push(j4u.data.data.img_url);
        srcList.value.push(moyuribao.data.data);
        srcList.value.push(moyurili.data.data);
        srcList.value.push(mingxingbagua.data.data);
        srcList.value.push(neihanduanzi.data.data);
        srcList.value.push(weiyujianbao.data.data);
        srcList.value.push(xingzuoyunshi.data.data);
      } else if (moyuribao.data.code == 200) {
        img_url.value = moyuribao.data.data;

        srcList.value.push(moyuribao.data.data);
        srcList.value.push(moyurili.data.data);
        srcList.value.push(mingxingbagua.data.data);
        srcList.value.push(neihanduanzi.data.data);
        srcList.value.push(weiyujianbao.data.data);
        srcList.value.push(xingzuoyunshi.data.data);
      } else if (moyurili.data.code == 200) {
        img_url.value = moyurili.data.data;

        srcList.value.push(moyurili.data.data);
        srcList.value.push(mingxingbagua.data.data);
        srcList.value.push(neihanduanzi.data.data);
        srcList.value.push(weiyujianbao.data.data);
        srcList.value.push(xingzuoyunshi.data.data);
      } else if (mingxingbagua.data.code == 200) {
        img_url.value = mingxingbagua.data.data;

        srcList.value.push(mingxingbagua.data.data);
        srcList.value.push(neihanduanzi.data.data);
        srcList.value.push(weiyujianbao.data.data);
        srcList.value.push(xingzuoyunshi.data.data);
      } else if (neihanduanzi.data.code == 200) {
        img_url.value = neihanduanzi.data.data;

        srcList.value.push(neihanduanzi.data.data);
        srcList.value.push(weiyujianbao.data.data);
        srcList.value.push(xingzuoyunshi.data.data);
      } else if (weiyujianbao.data.code == 200) {
        img_url.value = weiyujianbao.data.data;

        srcList.value.push(weiyujianbao.data.data);
        srcList.value.push(xingzuoyunshi.data.data);
      } else if (xingzuoyunshi.data.code == 200) {
        img_url.value = xingzuoyunshi.data.data;

        srcList.value.push(xingzuoyunshi.data.data);
      }
    })
  );
</script>


<style scoped>
.el-image {
  border-radius: 5px;
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
