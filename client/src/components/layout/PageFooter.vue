<template>
  <div id="page-footer">
    <span v-if="submitButton" @click.prevent="back" class="footer-button" id="submit-button">
      <i class="material-icons" id="check-icon">done</i>
      <span>Submit</span>
    </span>
    <span class="desktop-hide">
      <span @click.prevent="back" class="footer-button" id="back-button">
        <i class="material-icons">arrow_back_ios</i>
        <span class="mobile-hide">Back</span>
      </span>
    </span>
  </div>
</template>

<script>

export default {
  props: {
    submitButton: Boolean
  },
  name: "PageFooter",
  methods: {
    back() {
      this.$router.push('/');
    },
  }
};
</script>
<style scoped>
.footer-button {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 20px;
}

.material-icons {
  padding-right: 6px;
}

#page-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(187, 57, 42);
  color: white;
  width: 100%;
  font-size: 28px;
  height: 7%;
}

#check-icon {
  font-size: 38px;
}

@media screen and (min-width: 600px){
#page-footer {
  justify-content: center;
}
}


</style>
