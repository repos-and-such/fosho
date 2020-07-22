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
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 20px;
}
.container {
  width: 70vw;
  max-width: 1000px;
}
@media screen and (max-width: 1000px){
.container {
  width: 100vw;
  overflow: hidden;
}
}
</style>
