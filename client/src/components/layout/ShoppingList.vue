<template>
  <div id="shopping-list">
    <shopping-list-header :key="key" />
      <transition name="slide">
        <div v-if="menuIsOpen">
           <list-menu :key="key"/>
        </div>
      </transition>
      <transition name="slide">
        <div v-if="isOpen">
           <shopping-list-body :key="key" v-if="true"/>
        </div>
      </transition>
    </div>
</template>

<script>
import ShoppingListHeader from './ShoppingListHeader'
import ShoppingListBody from './ShoppingListBody'
import ListMenu from './ListMenu'

export default {
  components: {
    ShoppingListHeader,
    ShoppingListBody,
    ListMenu
  },
  name: "ShoppingList",
  data() {
    return {
      closingTime: false
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
    menuIsOpen() {
      return this.$store.getters.getOpenMenuStatusById(this.key);
    },
    key() {
      return this.$vnode.key;
    }
  },
  watch: {
    isOpen() {
      this.$store.commit('setOpenListMenu', null);
    }
  }
}
</script>
<style scoped>
#shopping-list {
  cursor: pointer;
}
</style>