<template>
  <form id="form" ref="form" :model="formData">
    <input type="hidden" name="token" v-model="formData.token" />
    <div class="form_style">
      <!-- 金额 -->
      <div class="item deposit">
        <div class="item_tit">{{ $t("login.deposit") }}</div>
        <div class="item_txt">
          {{ currency }}<span class="num">{{ amount }}</span>
        </div>
      </div>
      <!-- 账号 -->
      <div class="item">
        <div class="item_tit item_subtit">
          {{ $t("login.SAC") }}
        </div>
        <div class="item_txt item_username item_input">
          <input
            style="border: none"
            type="text"
            name="username"
            maxlength="40"
            v-model="formData.username"
            @blur="handleBlur('account')"
            @input="hideErrorMessage('account')"
          />
        </div>
        <div
          v-if="isAccountEmpty || this.userStatus"
          class="input_message warning_message"
        >
          <i class="icon_warning"></i>
          <span>{{ $t("result.field_required") }}.</span>
        </div>
      </div>
      <!-- 密码 -->
      <div class="item">
        <div class="item_tit item_subtit">
          {{ $t("password.SAC") }}
        </div>
        <div class="item_txt item_password item_input">
          <span
            @click="toggle"
            :class="isShowPwd ? 'show' : ''"
            class="toggle_password"
          ></span>
          <input
            style="border: none"
            v-model="formData.pwd"
            :type="isShowPwd ? 'text' : 'password'"
            name="password"
            @blur="handleBlur('password')"
            @input="hideErrorMessage('password')"
          />
        </div>
        <div
          v-if="isPasswordEmpty || this.pwdStatus"
          class="input_message warning_message"
        >
          <i class="icon_warning"></i>
          <span>{{ $t("result.field_required") }}.</span>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    userStatus: Boolean,
    pwdStatus: Boolean,
  },
  data() {
    return {
      formData: {
        username: "",
        pwd: "",
      },
      currency: "VND",
      amount: "99999",
      isAccountEmpty: false, // 用于控制账号输入框的错误提示显示
      isPasswordEmpty: false, // 用于控制密码输入框的错误提示显示
      isShowPwd: false, // 控制密码是否显示
    };
  },
  methods: {
    handleBlur(field) {
      // 根据字段名检查输入框的值是否为空
      if (field === "account" && this.formData.username.trim() === "") {
        this.isAccountEmpty = true;
      } else if (field === "password" && this.formData.pwd.trim() === "") {
        this.isPasswordEmpty = true;
      }
    },
    hideErrorMessage(field) {
      // 在输入时隐藏错误提示
      if (field === "account") {
        this.isAccountEmpty = false;
        this.$emit("account", this.isAccountEmpty);
      } else if (field === "password") {
        this.isPasswordEmpty = false;
        this.$emit("password", this.isPasswordEmpty);
      }
      this.$emit("userData", this.formData);
    },
    toggle() {
      this.isShowPwd = !this.isShowPwd;
    },
  },
};
</script>

<style></style>
