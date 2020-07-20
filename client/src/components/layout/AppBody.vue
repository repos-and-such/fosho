<template>
  <div class="container">
    <div v-for="list in lists"
      :list="list"
      :key="list.id">
      <shopping-list :list="list"/>
      <br>
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
  },
  async created() {
    this.lists = await ListService.getLists(this.$auth.user.email);
  }
}
</script>

<style scoped>
</style>