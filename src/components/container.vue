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
      <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">
        <div class="grid-content">
          <div class="card column">
            <CardModules />
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="card">
          <moyuimage />
        </div>
      </el-col>
    </el-row>

    <!-- 底部 -->
    <el-row>
      <el-col :span="24">
        <div class="footer">
          
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
/* 头部标题 */
.header {
  margin: 0;
}

.column {
  float: left;
}

.header-dark{
  float: right;
  margin-right: 1pc;
}

/* 文章卡片效果 */
.card {
  border-radius: 5px;
  padding: 10px;
  margin: auto;
}

/* 响应式布局 - 屏幕尺寸小于 700px 时，两列布局改为上下布局 */
/* @media screen and (max-width: 700px) {
  .el-col {
    width: 100%;
  }
} */

/* 底部 */
.footer {
  padding: 10px;
}
</style>
