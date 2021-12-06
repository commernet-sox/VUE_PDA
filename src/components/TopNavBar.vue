<template>
  <van-nav-bar
    :title=title
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
</template>

<script>
export default {
  name: "TopNavBar",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  setup() {
    const onClickLeft = () => history.back(-1);
    return {
      onClickLeft,
    };
  },
};
</script>

<style>
</style>