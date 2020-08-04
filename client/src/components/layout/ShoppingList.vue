<template>
  <div id="shopping-list">
    <shopping-list-header :key="key" />
    <slide-up-down :active="isOpen">
    <div v-if="isOpen">
       <shopping-list-body :key="key" v-if="true"/>
    </div>
    </slide-up-down>

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