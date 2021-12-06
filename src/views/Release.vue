<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "home",
  setup() {
    const router = useRouter();
    const goToDetail = (item) => {
      router.push({ path: `/content/${item}` });
    };
    return { goToDetail };
  },
};
</script>

<template>
  <van-grid :gutter="10" :column-num="3">
    <van-grid-item
      v-for="value in 20"
      :key="value"
      icon="photo-o"
      :text="value"
      @click="goToDetail(value)"
    />
  </van-grid>
</template>

<style>
</style>
