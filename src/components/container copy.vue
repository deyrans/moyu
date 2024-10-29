<script setup>
import useDark from "./useDark.vue";
import moyuimage from "./moyuimage.vue";
import timeRubric from "./time-rubric.vue";
import CardModules from "./card.vue";
</script>

<template>
  <!-- elmentu 布局 -->
   


  <!-- css 布局 -->
  <div>
    <!-- 头部 -->
    <div class="header">
      <useDark />
    </div>

    <!-- 中间部分 -->
    <div class="row">
      <!-- 中间左边卡片 -->
      <div class="leftcolumn">
        <div class="card column">
          <CardModules />
        </div>
        <div class="card column">
          <CardModules />
        </div>
        <div class="card column">
          <CardModules />
        </div>
        <div class="card column">
          <CardModules />
        </div>
      </div>

      <!-- 中间右边卡片 -->
      <div class="rightcolumn">
        <div class="card column1">
          <!-- <CardModules /> -->
        </div>
        <div class="card">
          <!-- <moyuimage /> -->
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <div class="footer">
      <timeRubric />
    </div>
  </div>
  
</template>

<style scoped>
* {
  box-sizing: border-box;
  font-family: Arial;
}

/* 头部标题 */
.header {
  background: darkgray;
  margin-top: -50px;
}

/* 左侧 */
.leftcolumn {
  float: left;
  width: 75%;
}

/* 右侧 */
.rightcolumn {
  float: right;
  width: 25%;
}

.column {
  float: left;
}

/* 文章卡片效果 */
.card {
  border-radius: 5px;
  background-color: white;
  padding: 10px;
  margin: auto;
}

.column1 {
  margin: 2px;
  margin: auto;
  background-color: rgb(185, 118, 118);
  border-radius: 10px;
  min-height: 20pc;
  min-width: 15pc;
}

/* 列后面清除浮动 */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* 底部 */
.footer {
  padding: 10px;
  background: #ddd;
  /* margin: auto; */
}

/* 响应式布局 - 屏幕尺寸小于 700px 时，两列布局改为上下布局 */
@media screen and (max-width: 700px) {
  .leftcolumn,
  .rightcolumn {
    width: 100%;
    padding: 0;
  }
}

/* 响应式布局 - 小于 700px 时改为上下布局 */
@media screen and (max-width: 700px) {
  .column {
    width: 100%;
  }
}
</style>
