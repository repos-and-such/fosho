<template>
  <button 
    type="back"
    @click.prevent="back"
    id="back-button"
  >
    <i class="material-icons" >arrow_back_ios</i>  
  </button>
</template>

<script>
export default {
  name: "BackButton",
  methods: {
    back() {
      this.$router.push('/');
    },
  }
};
</script>

<style scoped>
.material-icons {
  font-size: 34px;
  margin-left: 14px;
}

@media screen and (max-width: 600px) {
#back-button {
  position: absolute;
  bottom: 44px;
  right: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background-color: rgb(187, 57, 42);
  border-radius: 30px;
  color: white;
  box-shadow: 0px 0px 5px 5px white;
}
}
</style>