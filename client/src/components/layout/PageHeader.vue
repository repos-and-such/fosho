<template>
  <div id="page-header">
    <span class="mobile-hide" style="width: 155px;"></span>
    <span class="desktop-hide"></span>
    <span style="display:flex; justify-content: center; align-items: center;">
      <span class="material-icons">{{ icon }}</span>
      <div>{{ text }}</div>
    </span>
    <button class="mobile-hide">
      <span @click.prevent="back" class="header-button" id="back-button">
        <i class="material-icons">keyboard_backspace</i>
        <span style="font-size: 20px; font-family: Montserrat;">BACK</span>
      </span>
    </button>
  </div>
</template>

<script>

export default {
  props: {
    text: String,
    icon: String
  },
  name: "PageHeader",
  methods: {
    back() {
      this.$router.push('/');
    },
  }
};
</script>
<style scoped>
.header-button {
  display: flex;
  display: -webkit -flex;
  align-items: center;
  cursor: pointer;
  margin-right: 12px;
}

.material-icons {
  color: rgb(245, 233, 232); 
  font-size: 30px;
  margin-right: 8px;
}

#page-header {
  display: flex;
  display: -webkit -flex;
  align-items: center;
  justify-content: space-between;
  background-image: linear-gradient(160deg, rgb(72, 0, 90), rgb(0, 77, 90));
  color: rgb(255, 253, 252);
  width: 100%;
  font-size: 28px;
  height: 48px;
  margin: 0px 6px;
}

@media screen and (max-width: 800px){
#page-header {
  justify-content: center;
}
}
</style>
