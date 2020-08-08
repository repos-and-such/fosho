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

@media screen and (max-width: 800px) {
#back-button {
  position: absolute;
  top: calc(var(--vh, 1vh) - 90px);
  right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background-image: linear-gradient(160deg, rgb(72, 0, 90), rgb(0, 77, 90));
  border-radius: 30px;
  color: rgb(255, 253, 252);
  box-shadow: 0px 0px 5px 5px white;
}
}
</style>