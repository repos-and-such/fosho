<template>
  <div id="shopping-list">
    <shopping-list-header :key="key" />
    <div v-if="menuIsOpen">
       <list-menu :key="key"/>
    </div>
    <div v-if="isOpen">
       <shopping-list-body :key="key" v-if="true"/>
    </div>
    <div v-if="isOpen" class="separator-line"/>
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
    menuIsOpen() {
      return this.$store.getters.getOpenMenuStatusById(this.key);
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
}
</style>