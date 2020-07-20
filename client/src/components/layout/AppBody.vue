<template>
  <div class="container">
    <div v-for="list in lists"
      :list="list"
      :key="list.id">
      <shopping-list :list="list"/>
    </div>
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
      lists: []
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
    this.lists = await ListService.getLists(this.$auth.user.email);
    this.lists.sort(this.compare);
  }
}
</script>

<style scoped>
</style>