<template>
  <div id="shopping-list" @click="handleClick">
    <shopping-list-header :list="this.list" :isOpen="isOpen"/>
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
      isOpen: false
  }
  },
  methods: {
    handleClick() {
      setTimeout(() => {
        this.isOpen = !this.isOpen;
      }, 200);
    }
  },
}
</script>
<style scoped>
#shopping-list {
  cursor: pointer;
}
</style>