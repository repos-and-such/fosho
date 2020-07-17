<template>
  <div>    
    <router-link to="/profile" id="button">
      Profile
    </router-link>
    <a id="button" @click.prevent="logout">
      Log out
    </a></div>
  
</template>

<script>
export default {
  name: "Main",
  methods: {
    logout() {
      this.$auth.logout();
    }
  }
};
</script>
<style scoped>
#button {
  border: 1px solid blue;
  text-decoration: none;
  padding: 4px;
  margin: 4px;
  color: blue;
  cursor: pointer;

}

</style>