<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  name: "home",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const active = ref(0);
    const icon = {
      active: "../src/assets/images/ActiveReceipt.png",
      inactive: "../src/assets/images/Receipt.png",
    };
    // router.push({ path: '/my' });
    return { route, router, active, icon };
  },
};
</script>

<template>
  <router-view></router-view>
  <van-tabbar v-model="active" :route="true" :placeholder="true" active-color="#1196db">
    <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
    <van-tabbar-item to="/receipt">
      <span>入库</span>
      <template #icon="props">
        <img :src="props.active ? icon.active : icon.inactive" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item icon="search" to="/release">出库</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/warehouse">库内</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to="/report">报表</van-tabbar-item>
  </van-tabbar>
</template>

<style>
</style>
