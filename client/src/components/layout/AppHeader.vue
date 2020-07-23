<template>
  <div class="container">
    <div>
      <i class="material-icons" id="add-list" @click="insertList">add</i>
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
import ListService from '../../api-service/ListService'

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
    async insertList() {
      ListService.insertList(this.$auth.user.email, await this.$auth.getTokenSilently())
        .then(res => {
          if (res.data && res.data[0] !== 'ERROR') {
            let insertedList = Object.assign({}, res.data[0]);
            this.$store.commit('insertList', insertedList);
          } else {console.log('Database error: ' + res.data[1])}
        }).catch(err => {
          console.log(err)
        });        
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