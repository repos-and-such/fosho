<template>
  <div id="shopping-list">
    <shopping-list-header :key="key" />
    <div v-if="isOpen">
      <shopping-list-body :key="key" />
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
    }
  },
  methods: {
  },
  computed: {
    lists() {
      return this.$store.state.lists;
    },
    isOpen() {
      return this.$store.getters.getOpenStatusById(this.key);
    },
    key() {
      return this.$vnode.key;
    }
  }
}
</script>
<style scoped>
#shopping-list {
  cursor: pointer;
}
</style>