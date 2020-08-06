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

#back-button {
  position: absolute;
  bottom: 32px;
  right: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  background-color: rgb(187, 57, 42);
  border-radius: 30px;
  color: white;
}


</style>