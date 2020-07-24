<template>
  <div>
    <span class="lds-dual-ring" style="margin-right: 5px"></span>
  </div>
</template>

<script>
export default {
  name: "LoadingIcon",
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
.lds-dual-ring {
  display: inline-block;
  width: 20px;
  height: 20px;
}
.lds-dual-ring:after {
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
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>