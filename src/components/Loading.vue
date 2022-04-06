<template>
  <!-- 可修改文案和加载图标的颜色 -->
  <!-- <div class="loading">
    <van-loading color="#0094ff" vertical>加载中...</van-loading>
  </div> -->
  <van-loading class="loading" color="#0094ff" vertical>加载中...</van-loading>
</template>

<script>
export default {};
</script>

<style>
.loading {
  height: 40px;
  position: fixed !important;
  z-index: 999;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
</style>