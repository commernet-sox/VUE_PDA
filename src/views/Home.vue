<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import OrganizationVue from "../components/Organization.vue";
export default {
  name: "home",
  components:{
    OrganizationVue
  },
  created() {
    console.log("home Create...");
  },
  setup() {
    console.log("home...");
    const route = useRoute();
    const router = useRouter();
    const active = ref(0);
    // const icon1 = reactive({
    //   active:require("../assets/ActiveReceipt.png"),
    //   inactive:require("../src/assets/Receipt.png")
    // });

    const icon = {
      active: "/assets/ActiveReceipt.png",
      inactive: "/assets/Receipt.png",
    };
    // router.push({ path: '/my' });
    return { route, router, active, icon };
  },
};
</script>

<template>
  <div class="homeContent">
    <organization-vue></organization-vue>
    <router-view></router-view>
    <van-tabbar
      v-model="active"
      :route="true"
      :placeholder="true"
      active-color="#1196db"
    >
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
  </div>
</template>

<style>
  .homeContent {
      /* height: calc(100vh - 50px); */
      height: 100%;
    }

    @media screen and (max-height:600px) {
      .homeContent {
        height: 100%;
      }
    }
</style>
