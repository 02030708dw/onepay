<template>
  <div class="content">
    <Lang />
    <Logo />
    <Form
      @account="isAccount"
      @password="isPassword"
      @userData="handleUserInput"
      :userStatus="userStatus"
      :pwdStatus="pwdStatus"
    />
    <Footer :dataKey="userInput" @submit-clicked="handleState" />
  </div>
</template>

<script>
import Lang from "../Lang";
import Logo from "../Logo";
import Form from "../Form";
import Footer from "../Footer";
export default {
  components: {
    Lang,
    Logo,
    Form,
    Footer,
  },
  data() {
    return {
      userInput: "",
      userStatus: false,
      pwdStatus: false,
    };
  },
  methods: {
    handleUserInput(value) {
      this.userInput = value;
    },
    handleState(e) {
      this.userStatus = !e.username; // 如果username为空，status为true，否则为false
      this.pwdStatus = !e.pwd; // 如果pwd为空，status1为true，否则为false
    },
    isAccount(e) {
      this.userStatus = e;
    },
    isPassword(e) {
      this.pwdStatus = e;
    },
  },
};
</script>

<style></style>
