<template>
  <div id="app-header">
    <div style="display: flex; color: white">
      <loading-icon v-if="insertListLoading" style="padding: 10px"/>
      <i v-else class="material-icons" id="header-icon" @click="insertList">add</i>
      <i class="material-icons" id="header-icon" @click="openSearch">search</i>
    </div>
    <span style="display:flex;">
      <span id="f-bomb">
        f
      </span>
      <span id="osho">
        o sho      
      </span>
    </span>
    <router-link to="/profile" style="display:flex; background-color: w; text-decoration: none;">
      <!-- <img
        v-if="$auth.user.picture"
        :src="$auth.user.picture"
        width="42"
        id="profile-icon"
      /> -->
      <i class="material-icons" id="header-icon">settings</i>
    </router-link>
  </div>
</template>

<script>
import ListService from '../../api-service/ListService';
import LoadingIcon from '../common/LoadingIcon';

export default {
  components: { LoadingIcon },
  name: "AppHeader",
  data() {
    return {
      insertListLoading: false
    }
  },
  methods: {
    async insertList() {
      this.insertListLoading = true;
      ListService.insertList(await this.$auth.getTokenSilently())
        .then(res => {
          if ((Array.isArray(res.data) && res.data[0] !== 'ERROR') || !Array.isArray(res.data)) {
            let insertedList = Object.assign({}, res.data[0]);
            this.$store.commit('insertList', insertedList);
            this.insertListLoading = false;
            this.$store.commit('setEditedListId', insertedList.id);
            this.$store.commit('openTopList'); 
          } else {
            this.$store.commit('showGenericError');
          }
        }).catch(() => {
          this.$store.commit('showGenericError');
        });
    },
    openSearch() {
    }
  }
}
</script>

<style scoped>
#f-bomb {
  font: helvetica;
  color: white;
  font-size: 36px;
  margin-right: 4px;
  margin-top: 3px;
}
#osho {
  margin-right: 1vw;
  font: helvetica;
  color: white;
  font-size: 30px;
}
#app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(209, 80, 80);
  padding: 0px 4px;
}
#header-icon {
  padding: 10px;
  color: white;
  font-size: 40px;
  cursor:pointer;
}
#profile-icon {
  border-radius: 50px;
  font-size: 40px;
  margin-right: 5px;
  box-shadow: 0 0 8px rgb(77, 23, 23);
}

</style>