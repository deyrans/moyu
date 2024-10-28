<script lang="ts" setup>
import axios from "axios";
import { ref } from "vue";

// https://api.j4u.ink/v1/store/other/proxy/remote/moyu.json
// https://api.vvhan.com/api/moyu
// https://moyu.qqsuu.cn/?type=json
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
  baseURL: "https://api.j4u.ink/v1/store/other",
  timeout: 5000,
});

//使用axios实例来发送请求
api.get("/proxy/remote/moyu.json").then((res) => {
  img_url.value = res.data.data.img_url;
  srcList.value = res.data.data.img_url;
});


</script>

<template>
  <div class="demo-image__preview">
    <el-image
      style="width: 15%; height: 10%"
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

<style scoped>
.demo-image__error .image-slot {
  font-size: 30px;
}
.demo-image__error .image-slot .el-icon {
  font-size: 30px;
}
.demo-image__error .el-image {
  width: 100%;
  height: 200px;
}
</style>
