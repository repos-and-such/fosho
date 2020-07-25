<template>
  <div v-if="$store.state.alertOpen" id="custom-alert" :class="[$store.state.alertType]">
    <div style="color: white; font-size: 22px;">{{ $store.state.alertMessage }}</div>
  </div>
</template>

<script>
export default {
  name: "custom-alert"
}
</script>

<style scoped>
#custom-alert {
  position: absolute;
  width: 100vw;
  height: 61px;
  z-index: 9999;
  font-family:"Helvetica Neue", Helvetica, Sans-serif;
  display:flex;
  justify-content: center;
  align-items: center;
}
.error {
  background-color: rgb(177, 0, 0);
}
.success {
  background-color: rgb(61, 134, 89);
}
</style>
