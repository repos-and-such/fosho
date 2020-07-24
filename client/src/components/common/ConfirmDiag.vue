<template>
  <div class="confirm-diag">
    <div class="snackbar" v-if="$store.state.diagOpen">{{ $store.state.diagMessage }}</div>
  </div>
</template>

<script>
export default {
  name: "ConfirmDiag",
  data() {
    return {
    }
  },
  methods: {
  
  },
  computed: {

  }
}
</script>

<style scoped>
.confirm-diag {
  position: absolute;
  margin-top: 180px;
  width: 80vw;
  z-index: 9999;
  padding: 20px 30px;
  background-color: rgb(196, 103, 204);
  opacity: 0.8;
}
</style>
