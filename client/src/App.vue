<template>
  <div style="display: flex; justify-content: center">
    <div class="modal" v-if="$store.state.modalOpen">{{ $store.state.modalMessage }}</div>
    <div class="app">
      <error />
      <router-view />
    </div>
  </div>
</template>

<script>
import Error from "./components/Error";

export default {
  components: {
    Error,
  }
};
</script>
<style>
.app {
  display: flex;
  position: absolute;
  justify-content: center;
  overflow: hidden;
  font-family:"Helvetica Neue", Helvetica, Sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 20px;
}
.modal {
  position: absolute;
  margin-top: 180px;
  width: 80vw;
  z-index: 9999;
  padding: 20px 30px;
  background-color: rgb(196, 103, 204);
  opacity: 0.8;
}
@media screen and (max-width: 1000px){
.container {
  width: 100vw;
  overflow: hidden;
}
}

</style>
