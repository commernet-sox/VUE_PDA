<template>
  <van-cell-group class="organContent">
    <van-field
      v-model="result"
      is-link
      readonly
      label="组织"
      placeholder="选择组织"
      @click="showPicker = true"
    />
    <van-popup v-model:show="showPicker" round position="bottom">
      <van-picker
        :columns="Organizations"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
  </van-cell-group>
  <div class="placehold"></div>
</template>

<script>
import { Toast } from "vant";
import { ref, reactive, toRefs } from "vue";
import store from "../store";
export default {
  created(){
    this.result=store.state.organizationText;
  },
  setup() {
    const Organizations = [
      { text: "渔山基地", value: 10 },
      { text: "四川坤正", value: 11 },
      { text: "总部运营", value: 12 },
    ];
    const result = ref("");
    const showPicker = ref(false);
    const onConfirm = (value) => {
      result.value = value.text;
      showPicker.value = false;
      Toast.success(value.text + value.value);
      store.commit('changeOrganization',value.value);
      store.commit('changeOrganizationText',value.text)
    };

    return {Organizations,showPicker,onConfirm,result};
  },
};
</script>

<style>
.placehold{
    height: 44px;
    width:100%;
}
.organContent{
    position: fixed;
    height: 44px;
    z-index: 999;
    width:100%;
}
</style>