<template>
  <div id="main-view">
    <app-header />
    <app-body v-if="listsLoaded"/>
  </div>
</template>

<script>
import AppHeader from "../components/layout/AppHeader";
import AppBody from "../components/layout/AppBody";
import ListService from "../api-service/ListService";
import ItemService from "../api-service/ItemService";
import moment from "moment";

export default {
  name: "Main",
  components: {
    AppHeader,
    AppBody
  },
  methods: {
    async getRecentLists(lists) {

      let recentListIds = [];
      lists.forEach(list => {
        if (moment().unix() - moment(list.created_on).unix() < 5184000000) {
          recentListIds.push(list.id)
        }
      });

      if (recentListIds.length > 0) {
        this.$store.commit('addLoadedListId', recentListIds);
        ItemService.getItems(recentListIds, await this.$auth.getTokenSilently())
          .then(res => {
            if (res[0] === 'SUCCESS') {
              var itemsFromApi = res[1];
              this.$store.commit('addItems', itemsFromApi);
              this.$store.commit('setLoading', false);
              this.$store.commit('addLoadedListId', this.key)
            } else {
              this.$store.commit('showGenericError');
            }
          }).catch(() => {
            this.$store.commit('setLoading', false);
            });
      }
    }
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
            this.getRecentLists(listsFromApi);
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
#main-view {
  display: flex; 
  display: -webkit-flex;
  flex-direction: column;
  width: 100vw;
  max-width: 1000px;
}
</style>