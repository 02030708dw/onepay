<template>
  <div class="content_step">
    <ul class="step_icon">
      <li class="item take">
        <p class="icon"><span>1</span></p>
        <span class="txt">{{ $t("step.login") }}</span>
      </li>
      <li class="item active">
        <p class="icon"><span>2</span></p>
        <span class="txt">{{ $t("step.login_otp") }}</span>
      </li>
      <li class="item">
        <p class="icon"><span>3</span></p>
        <span class="txt">{{ $t("step.transfer_acc") }}</span>
      </li>
      <li class="item ">
        <p class="icon "><span>4</span></p>
        <span class="txt">{{ $t("step.authorization") }}</span>
      </li>
      <li class="item">
        <p class="icon"><span>5</span></p>
        <span class="txt">{{ $t("step.result") }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  
  data() {
    return {

    };
  },
};
</script>

<style scoped></style>
