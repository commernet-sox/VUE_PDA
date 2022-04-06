<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { onMounted, ref } from "vue";
import TopNavBar from "../components/TopNavBar.vue";
import { useRoute, useRouter } from "vue-router";
export default {
  components: {
    TopNavBar,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const text = ref("content");
    const title = ref("content1");
    onMounted(async () => {
      const { id } = route.params;
      console.log(route);
      console.log("id:", id);
      title.value = id;
    });
    return {
      text,
      title,
    };
  },
};
</script>

<template>
  <top-nav-bar :title="title"></top-nav-bar>
  <div class="contentContainer">
    <div>{{ text }}</div>
  </div>
</template>

<style>
.contentContainer {
  height: 100%;
  position: absolute;
  background-color: aliceblue;
  width: 100%;
}
</style>
