<template>
  <div style="display: flex; display: -webkit-flex; flex-direction: column; height: 100vh;">
    <app-header />
    <app-body v-if="listsLoaded"/>
  </div>
</template>

<script>
import AppHeader from "../components/layout/AppHeader";
import AppBody from "../components/layout/AppBody";
import ListService from "../api-service/ListService";

export default {
  name: "Main",
  components: {
    AppHeader,
    AppBody
  },
  computed: {
    listsLoaded() {
      return this.$store.state.lists[0] !== -1;
    },
    lists() {
      let listsUnsorted = this.$store.state.lists;
      return listsUnsorted ? listsUnsorted.sort(this.compareLists) : '';
    }
  },
  async created() {
    if (this.lists[0] === -1) {
      ListService.getLists(await this.$auth.getTokenSilently())
        .then(res => {
          if (res[0] === 'SUCCESS') {
            var listsFromApi = res[1];
            this.$store.commit('setLists', listsFromApi);
            this.$store.commit('setLoading', false);
          } else {
            this.$store.commit('showGenericError');
          }
        }).catch(() => {
          this.$store.commit('setLoading', false);
        });
    }
  }
};
</script>
<style scoped>
</style>