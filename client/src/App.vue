<template>
  <div style="display: flex; justify-content: center">
    <custom-alert />
    <confirm-diag />
    <div class="app">
      <router-view />
    </div>
  </div>
</template>

<script>
import CustomAlert from "./components/common/CustomAlert"
import ConfirmDiag from "./components/common/ConfirmDiag"

export default {
  components: {
    CustomAlert,
    ConfirmDiag
  },
  computed: {
    msg() {
      return this.$auth.err;
    }
  },
  watch: {
    msg() {
      if (this.msg) {
        this.$store.commit('showGenericError');
        console.log(this.msg);
      }
    }
  }
};
</script>
<style>
  @import './globalCss.css';
</style>
