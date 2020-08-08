<template>
  <div id="shopping-list">
    <shopping-list-header :key="key" />
    <slide-up-down :active="isOpen">
      <div v-if="isOpen">
         <shopping-list-body :key="key" />
      </div>
    </slide-up-down>
  </div>
</template>

<script>
import ShoppingListHeader from './ShoppingListHeader'
import ShoppingListBody from './ShoppingListBody'

export default {
  components: {
    ShoppingListHeader,
    ShoppingListBody,
  },
  name: "ShoppingList",
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
  },
}
</script>

<style scoped>
#shopping-list {
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  margin: 3px 6px 6px 6px;
}

@media screen and (max-width: 800px) {
  #shopping-list {
    box-shadow: 0px 0px 3px rgb(171, 171, 171);
    margin: 0px 0px 6px 0px;
    background-color: rgb(255, 253, 252);
  }
}
</style>