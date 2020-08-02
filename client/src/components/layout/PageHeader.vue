<template>
  <div id="page-header">
    <span class="mobile-hide" style="width: 155px;"></span>
    <div>{{ title }}</div>
    <span class="mobile-hide">
      <span @click.prevent="back" class="header-button" id="back-button">
        <i class="material-icons">keyboard_backspace</i>
        <span class="mobile-hide">Back</span>
      </span>
    </span>
  </div>
</template>

<script>

export default {
  props: {
    title: String
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
 display: -webkit-flex;
  align-items: center;
  cursor: pointer;
  padding: 20px;
}

.material-icons {
  padding-right: 6px;
  font-size: 34px;
}

#page-header {
  display: flex;
 display: -webkit-flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(187, 57, 42);
  color: white;
  height: 56px;
  width: 100%;
  font-size: 28px;
  height: 7%;
}

@media screen and (max-width: 600px){
#page-header {
  justify-content: center;
}
}
</style>
