<template>
  <div id="shopping-list">
    <shopping-list-header :list="this.list"/>
    <div v-if="isOpen">
      <shopping-list-body :listId="this.list.id"/>
    </div>
  </div>
</template>

<script>
import ShoppingListHeader from './ShoppingListHeader.vue'
import ShoppingListBody from './ShoppingListBody.vue'

export default {
  props: {
    list: Object
  },
  components: {
    ShoppingListHeader,
    ShoppingListBody
  },
  name: "ShoppingList",
  data() {
    return {
      isOpen: true
    }
  },
  methods: {
  },
}
</script>
<style scoped>
#shopping-list {
  cursor: pointer;
}
</style>