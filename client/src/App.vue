<template>
  <div style="display: flex; justify-content: center">
    <custom-alert />
    <div class="app">
      <error />
      <router-view />
    </div>
  </div>
</template>

<script>
import Error from "./components/Error";
import CustomAlert from "./components/common/CustomAlert"

export default {
  components: {
    Error,
    CustomAlert
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

@media screen and (max-width: 1000px){
.container {
  width: 100vw;
  overflow: hidden;
}
}

</style>
