<template>
  <div class="container">
    <div v-for="item in myArray"
      :item="item"
      :key="item">
      {{ item }}<shopping-list />
    </div>
      {{ $auth.user }}

  </div>
</template>

<script>
import ShoppingList from './ShoppingList.vue'
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
}
</script>

<style scoped>
</style>