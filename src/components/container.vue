<script setup>
import useDark from "./useDark.vue";
import moyuimage from "./moyuimage.vue";
import timeRubric from "./time-rubric.vue";
import CardModules from "./card.vue";
</script>

<template>
  <!-- elmentu 布局 -->
  <div>
    <!-- 顶部 -->
    <el-row>
      <el-col :span="24">
        <div class="header">
          <useDark class="header-dark" />
          <timeRubric />
        </div>
      </el-col>
    </el-row>

    <!-- 中间部分 -->
    <el-row :gutter="10">
      <!-- 中间左边卡片 -->
      <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">
        <div class="grid-content">
          <div class="card">
            <CardModules />
          </div>
          <div class="card">
            <CardModules />
          </div>
          <div class="card">
            <CardModules />
          </div>
        </div>
      </el-col>

      <!-- 中间右边卡片 -->
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <!-- 摸鱼日历卡片单排居中 -->
        <div class="card">
          <moyuimage />
        </div>
        <!-- 多排居中 -->
        <div class="grid-content"></div>
      </el-col>
    </el-row>

    <!-- 底部 -->
    <el-row>
      <el-col :span="24">
        <div class="footer"></div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
/* 头部标题 */
.header {
  margin: 0;
}

.el-col {
  padding: 5px;
}

.header-dark {
  float: right;
  margin-right: 1pc;
}

/* 文章卡片效果 */
.card {
  /* 居中 */
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  border-radius: 5px;
  padding: 5px;
}

.grid-content {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-justify-content: center;
  justify-content: center;
}

/* 底部 */
.footer {
  padding: 10px;
}
</style>
