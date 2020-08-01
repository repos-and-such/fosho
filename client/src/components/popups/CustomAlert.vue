<template>
  <transition name="fade">
    <div v-if="$store.state.alertOpen" id="custom-alert" :class="[$store.state.alertType]">
      <div>{{ $store.state.alertMessage }}</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "custom-alert"
}
</script>

<style scoped>
.error {
  background-color: rgb(177, 0, 0);
  color: white;
  font-weight: bold;
}

.success {
  background-color: rgb(255, 255, 255);
  color: rgb(25, 129, 65);
  font-weight: bold;
}

#custom-alert {
  position: absolute;
  width: 100vw;
  height: 64px;
  z-index: 9999;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
}
</style>
