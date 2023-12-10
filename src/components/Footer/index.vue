<template>
  <div class="footer">
    <div class="btn_block">
      <button
        type="button"
        data-key="smart otp"
        class="btn"
        @click="handleButtonClick(dataKey)"
      >
        Smart OTP
      </button>
    </div>
    <!-- <div class="footer_note">{{ $t("sac.subnote") }}</div>
    <div class="footer_note" style="text-align: center">
      <img src="/images/sac/login_show.png" />
      <img
        style="max-width: 100%; height: auto"
        src="../../assets/images/sac/login_show.png"
        alt=""
      />
    </div>
    <div class="countdown_block">
      <p class="countdown_message">
        <span id="countdown_time" class="warning_message fw_b">2</span>
      </p>
    </div>-->
  </div> 
</template>

<script>
export default {
  props: {
    dataKey: {
      require: true,
      vnPayments:{
        key:'smart',
        
      }
    },
  },
  methods: {
    handleButtonClick(e) {
      console.log("🚀  e:", e);
      this.$emit("submit-clicked", e);
    },
  },
};
</script>

<style></style>
