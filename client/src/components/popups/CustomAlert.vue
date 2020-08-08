<template>
  <transition name="fade-quick">
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
  background-color: rgb(116, 13, 2);
  color: rgb(255, 253, 252);
  font-weight: bold;
}

.success {
  background-color: rgb(255, 255, 255);
  color: rgb(65, 148, 156);
  font-weight: bold;
}

#custom-alert {
  position: absolute;
  width: 100vw;
  height: 49px;
  z-index: 9999;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
}
</style>
