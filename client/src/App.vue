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
.lds-dual-ring {
  display: inline-block;
  width: 20px;
  height: 20px;
}
.lds-dual-ring-large {
  display: inline-block;
  width: 40px;
  height: 40px;
}
.lds-dual-ring:after, .lds-dual-ring-large:after {
  content: " ";
  display: block;
  width: 15px;
  height: 15px;
  margin: 0px;
  border-radius: 50%;
  border: 3px solid white;
  border-color: white transparent white transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
.lds-dual-ring-large:after {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 4px solid white;
  border-color: white transparent white transparent;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media screen and (max-width: 1000px){
.container {
  width: 100vw;
  overflow: hidden;
}
@media screen and (max-width: 1000px){
.mobile-hide {
  display: none;
}
}
}
</style>
