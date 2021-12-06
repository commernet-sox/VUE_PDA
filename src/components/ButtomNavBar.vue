<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from '../components/HelloWorld.vue'

import { ref } from "vue";
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const active = ref(0);
    return { active };
  },
};
</script>

<template>
    <van-tabbar v-model="active" placeholder="true" route>
      <van-tabbar-item icon="home-o" to="/my">首页</van-tabbar-item>
      <van-tabbar-item icon="home-o" to="/title1">标签</van-tabbar-item>
      <van-tabbar-item icon="search" to="/title2">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/title3">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/title4">标签</van-tabbar-item>
    </van-tabbar>
</template>

<style>

</style>
