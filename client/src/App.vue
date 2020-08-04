<template>
  <div>
    <custom-alert />
    <confirm-diag />
    <div class="app" @click="closePopups">
      <router-view />
    </div>
  </div>
</template>

<script>
import CustomAlert from "./components/popups/CustomAlert"
import ConfirmDiag from "./components/popups/ConfirmDiag"

export default {
  components: {
    CustomAlert,
    ConfirmDiag
  },
  methods: {
    closePopups() {
      this.$store.commit('toggleMainMenu', false);
      this.$store.commit('toggleConfirmDiag', false);
			this.$store.commit('setOpenCategoryMenuId', null);
    }
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
      }
    }
  }
};
</script>
<style>
  @import './globalCss.css';
</style>
