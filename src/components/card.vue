<template>
  <div class="card_preview">
    <el-card style="max-width: 480px" class="card">
      <template #header>Yummy hamburger</template>

      <el-skeleton el-skeleton :rows="5" animated :loading="cardLoading">
        
      </el-skeleton>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from "vue";

const cardLoading = ref(true);

// cardLoading.value = false;
// cardLoading.value = true;
</script>

<style scoped>
.card {
  border-radius: 5px;
}

/* @media screen and (min-width: 1100px) {
  .card {
    width: 15pc;
  }
} */

@media screen and (max-width: 600px) {
  .card {
    width: 100%;
  }
}
</style>