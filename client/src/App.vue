<template>
  <div style="display: flex; justify-content: center">
    <custom-alert />
    <confirm-diag />
    <div class="app">
      <error />
      <router-view />
    </div>
  </div>
</template>

<script>
import Error from "./components/Error";
import CustomAlert from "./components/common/CustomAlert"
import ConfirmDiag from "./components/common/ConfirmDiag"

export default {
  components: {
    Error,
    CustomAlert,
    ConfirmDiag
  }
};
</script>
<style>
  @import './globalCss.css';
</style>
