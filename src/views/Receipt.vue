<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from '../components/HelloWorld.vue'

import { ref } from "vue";
import { useRouter } from 'vue-router'
export default {
  name: 'home',
  setup() {
    const router = useRouter()
    const goToDetail = (item) => {
      router.push({ path: `/content/${item}` })
    }
    return {goToDetail };
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
    <div class="nav-btn">
      <router-link to="/"> Home</router-link>
      <router-link to="/contact">Contact </router-link>
    </div>
</template>

<style>

</style>
