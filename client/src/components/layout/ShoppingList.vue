<template>
  <div id="shopping-list" @click="handleClick">
    <div>
      SHOPPING LIST {{ isOpen }}
    </div>
    <div v-if="isOpen">
      <shopping-list-header />
      <shopping-list-body />
    </div>
  </div>
</template>

<script>
import ShoppingListHeader from './ShoppingListHeader.vue'
import ShoppingListBody from './ShoppingListBody.vue'

export default {
  components: {
    ShoppingListHeader,
    ShoppingListBody
  },
  name: "ShoppingList",
  data() {
    return {
      ShoppingItems: ['item1', 'item2', 'item3'],
      isOpen: false
  }
  },
  methods: {
    handleClick() {
      this.isOpen = !this.isOpen;
    }
  },
}
</script>
<style scoped>
#shopping-list {
  cursor: pointer;
}
</style>