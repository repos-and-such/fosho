<template>
  <div class="container">
    <shopping-list v-for="list in lists"
      :key="list.id" />
  </div>
</template>

<script>
import ShoppingList from './ShoppingList.vue'
import ListService from '../../api-service/ListService';

export default {
  components: {
    ShoppingList
  },
  name: "AppBody",
  data() {
    return {
    }
  },
  methods: {
    compare(a, b) {
      const timeA = a.created_on;
      const timeB = b.created_on;

      let comparison = 0;
      if (timeA > timeB) {
        comparison = -1;
      } else if (timeA < timeB) {
        comparison = 1;
      }
      return comparison;
    }
  },
  async created() {
    ListService.getLists(await this.$auth.getTokenSilently())
      .then(res => {
        if (res) {
          var listsFromApi = res;
          this.$store.commit('setLists', listsFromApi);
          this.$store.commit('setLoading', false);
        }
      }).catch(err => {
        this.$store.commit('setLoading', false);
        throw err;
      });
  },
  computed: {
    lists() {
      let listsUnsorted = this.$store.state.lists;
      return listsUnsorted ? listsUnsorted.sort(this.compare) : '';
    }
  }
}
</script>

<style scoped>
</style>