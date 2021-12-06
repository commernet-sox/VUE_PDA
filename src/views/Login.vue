<template>
  <div class="loginContainer">
    <div class="center">
      <img class="logo" src="../assets/login.jpg" alt="" />
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="username"
            name="userName"
            label="工号"
            placeholder="工号"
            :rules="[{ required: true, message: '请填写工号' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button round block type="primary" native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import { login } from "../utils/user.js";
import { setLocal } from "../common/js/utils.js";
import { Toast } from "vant";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const username = ref("");
    const password = ref("");
    const data=ref("");
    console.log(typeof login);
    // console.log(store.state.isLogin);

    // if (store.state.isLogin == 1) {
    //   router.push({ path: "/home" });
    // }
    const onSubmit = async (values) => {
      // console.log(store.state.isLogin);
      console.log("submit", values, typeof values);
      await login({
        userName: values.userName,
        pwd: values.password,
      }).then((res) => {
        console.log(res.token);
        data.value=res.token;
      });
      console.log(data.value);
      if (data.value != null && data.value !=undefined && data.value !="") {
      if (store.state.token == "") {
        store.dispatch("updateToken", data.value);
        console.log(store.state.token);
      }
        setLocal("token", data.value);
        router.push({ path: "/home" });
      } else {
        Toast.fail("账号或密码错误！");
      }
    };

    return {
      username,
      password,
      onSubmit,
    };
  },
};
</script>

<style>
.loginContainer {
  height: 100%;
  position: absolute;
  background-color: aliceblue;
  width: 100%;
}
.center {
  height: 240px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
</style>