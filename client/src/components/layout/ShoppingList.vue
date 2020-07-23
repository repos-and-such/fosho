<template>
  <div id="shopping-list">
    
    <shopping-list-header :key="key" />
      <transition name="slide">
        <div v-if="isOpen">
           <shopping-list-body :key="key" v-if="true"/>


        </div>
      </transition>
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

.slide-enter-active {
   -moz-transition-duration: 0.8s;
   -webkit-transition-duration: 0.8s;
   -o-transition-duration: 0.8s;
   transition-duration: 0.8s;
   -moz-transition-timing-function: ease-in;
   -webkit-transition-timing-function: ease-in;
   -o-transition-timing-function: ease-in;
   transition-timing-function: ease-in;
}

.slide-leave-active {
   -moz-transition-duration: 0.6s;
   -webkit-transition-duration: 0.6s;
   -o-transition-duration: 0.6s;
   transition-duration: 0.6s;
   -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
   overflow: hidden;
   max-height: 1000px;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0;
}
</style>