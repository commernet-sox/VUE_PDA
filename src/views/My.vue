<template>
  <div class="myContainer">
    <div class="content">
      <van-cell-group inset title="用户信息">
        <van-field border label="当前用户:" model-value="03328" readonly />
        <van-field
          label="登录时间:"
          model-value="2021-11-25 11:15:23"
          readonly
        />
        <van-field label="版本号:" model-value="9.1.5" readonly />
        <van-field label="工作中心:" model-value="HD-HZ-01" readonly />
        <van-field label="当前货主:" model-value="测试货主" readonly />
        <van-field label="当前仓库:" model-value="东洲一号仓" readonly />
        <van-field label="设备编号:" model-value="32232435424324" readonly />
        <van-field label="命令编号" :colon="true" model-value="001" readonly />
        <van-field
          label="IP地址"
          :colon="true"
          model-value="192.168.0.1"
          readonly
        />
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
      <van-cell-group inset class="cellborder">
        <van-cell title="修改密码" is-link @click="onPassword()" />
      </van-cell-group>
      <van-cell-group inset class="cellborder">
        <van-cell title="检查更新" is-link @click="onUpdate()" />
      </van-cell-group>
      <van-cell-group inset class="cellborder">
        <van-cell title="退出" is-link @click="onLogout()" />
      </van-cell-group>
      <van-cell-group inset class="cellborder">
        <van-cell title="测试token" is-link @click="onTestToken()" />
      </van-cell-group>
      <van-dialog
        v-model:show="showPassword"
        title="修改密码"
        show-cancel-button
        :before-close="confirmPassword"
      >
        <van-cell-group inset>
          <van-field
            v-model="oldpassword"
            type="password"
            name="旧密码"
            label="旧密码"
            placeholder="旧密码"
            :clearable="true"
            :required="true"
            :rules="[
              { required: true, message: '请填写旧密码', trigger: 'onChange' },
            ]"
          />
          <van-field
            v-model="newpassword"
            type="password"
            name="新密码"
            label="新密码"
            placeholder="新密码"
            :clearable="true"
            :required="true"
            :rules="[
              { required: true, message: '请填写新密码', trigger: 'onChange' },
            ]"
          />
          <van-field
            v-model="passwordComfirm"
            type="password"
            name="确认密码"
            label="确认密码"
            placeholder="再输一次新密码"
            :clearable="true"
            :required="true"
            :rules="[
              {
                required: true,
                message: '请填写确认密码',
                trigger: 'onChange',
              },
            ]"
          />
        </van-cell-group>
      </van-dialog>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { testToken } from '../utils/user';
export default {
  setup() {
    const router = useRouter();
    const oldpassword = ref("");
    const newpassword = ref("");
    const passwordComfirm = ref("");
    const Organizations = [
      { text: "渔山基地", value: 10 },
      { text: "四川坤正", value: 11 },
      { text: "总部运营", value: 12 },
    ];
    const result = ref("");
    const showPicker = ref(false);
    const showPassword = ref(false);
    const onConfirm = (value) => {
      result.value = value.text;
      showPicker.value = false;
      console.log(result.value, value.value);
    };
    const onPassword = (item) => {
      showPassword.value = true;
    };
    const onUpdate = (item) => {
      Toast.loading({
        message: "检查更新中...",
        forbidClick: true,
        duration: 0,
      });
      setTimeout(() => {
        Toast.clear();
        Toast.success("已是最新版本");
      }, 3000);
    };
    const onLogout = (item) => {
      router.push({ path: `/` });
    };
    const onConfirmPassword = (item) => {
      if (oldpassword.value.trim() == "") {
        Toast.fail("旧密码不能为空！");
        return false;
      }
      if (newpassword.value.trim() == "") {
        Toast.fail("新密码不能为空！");
        return false;
      }
      if (passwordComfirm.value.trim() == "") {
        Toast.fail("确认密码不能为空！");
        return false;
      }
      if (newpassword.value != passwordComfirm.value) {
        Toast.fail("新密码输入不一致，请重新输入！");
        return false;
      }
      return true;
    };
    const confirmPassword = (action) => {
      console.log(action);
      if (action == "cancel") {
        return true; //关闭弹窗
      }
      if (action == "confirm") {
        if (onConfirmPassword()) {
          console.log("修改成功！。。。");
          return true;
        } else {
          return false;
        }
      }
    };
    const onTestToken=(item)=>{
      testToken().then(res=>{
        console.log(res);
        Toast.success(res.username);
      });
    };
    return {
      oldpassword,
      newpassword,
      passwordComfirm,
      Organizations,
      result,
      showPassword,
      showPicker,
      onPassword,
      onConfirm,
      onLogout,
      onUpdate,
      confirmPassword,
      onTestToken
    };
  },
};
</script>

<style scoped>
.myContainer {
  height: 100%;
  background-color: aliceblue;
  width: 100%;
}
.cellborder {
  margin-top: 10px;
}
</style>