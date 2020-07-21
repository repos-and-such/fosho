<template>
  <div class="container">
    <div>
      <i class="material-icons" id="add-list">add</i>
      <i class="material-icons" id="search" @click="openSearch">search</i>
    </div>
    <div>
      <router-link to="/profile" id="button">
      <i class="material-icons" id="profile">person</i>
    </router-link>
    <i class="material-icons" @click.prevent="logout" id="settings">settings</i>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
    }
  },
  methods: {
    logout() {
      this.$auth.logout();
    },
    openSearch() {
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  position: fixed;
  margin-bottom: 40px;
}
#settings {
  margin: 5px;
  color: rgb(59, 35, 80);
  font-size: 34px;
  cursor:pointer;
}
#profile {
  margin: 5px;
  color: rgb(59, 35, 80);
  font-size: 34px;
  cursor:pointer;
}
#add-list {
  margin: 5px;
  color: rgb(59, 35, 80);
  font-size: 34px;
  cursor:pointer;
}
</style>