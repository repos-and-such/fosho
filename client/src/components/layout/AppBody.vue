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
    let listsFromApi = await ListService.getLists(this.$auth.user.email);
    listsFromApi.sort(this.compare);
    this.$store.commit('setLists', listsFromApi);
  },
  computed: {
    lists() {
      return this.$store.state.lists;
    }
  }
}
</script>

<style scoped>
</style>