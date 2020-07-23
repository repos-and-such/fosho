<template>    
  <div class="app">
    <error />
    <router-view />
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
  justify-content: center;
  overflow: hidden;
  font-family:"Helvetica Neue", Helvetica, Sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 20px;
}
.container {
  width: 100vw;
  max-width: 1000px;
}
@media screen and (max-width: 1000px){
.container {
  width: 100vw;
  overflow: hidden;
}
}
</style>
