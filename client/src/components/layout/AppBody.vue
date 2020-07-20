<template>
  <div class="container">
    <div v-for="list in lists"
      :list="list"
      :key="list">
      {{ list }}<shopping-list />
    </div>
      <!-- {{ $auth.user }} -->

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
      lists: ['helloImAList']
    }
  },
  methods: {
  },
}
</script>

<style scoped>
</style>