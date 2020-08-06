<template>
  <div v-if="!isLoading" id="shopping-list-body">
    <insert-item :key="key"/>
    <transition-group name="bounce" id="shopping-list-items" v-if="items[0] !== -1">
      <shopping-item v-for="item in itemsToBuy" :key="item.id" :listKey="key" />
    </transition-group>
    <div v-if="itemsBought.length !== 0" class="separator-line"/>
    <div v-if="itemsBought.length !== 0" style="font-size: 15px; margin: 0px 0px 10px 5px; color: rgba(209, 80, 80, 0.718);">BOUGHT:</div>
    <transition-group name="bounce" id="shopping-list-items">
      <shopping-item v-for="item in itemsBought" :key="item.id" :listKey="key" />
    </transition-group>
    <div v-if="items.length === 0" class="empty-body-message"> 
        <span class="desktop-hide">Enter shopping item and tap the green checkmark or Go on the keypad</span>
        <span class="mobile-hide">Enter shopping item and click the green checkmark or hit Enter</span> 
    </div>
  </div>
</template>

<script>
import ShoppingItem from './ShoppingItem';
import InsertItem from './InsertItem';

export default {
  components: {
    ShoppingItem,
    InsertItem
  },
  name: "ShoppingListBody",
  methods: {
    compareItems(a, b) {
      let catA = a.category ? ('0' + a.category) : '1';
      let catB = b.category ? ('0' + b.category) : '1';

      const argA = catA + a.created_on.toLowerCase();
      const argB = catB + b.created_on.toLowerCase();

      let comparison = 0;
      if (argA < argB) {
        comparison = -1;
      } else if (argA > argB) {
        comparison = 1;
      }
      return comparison;
    },
  },
  computed: {
    list() {
      return this.$store.getters.getListById(this.key);
    },
    items() {
      let unsortedItems = this.$store.getters.getItemsByListId(this.key);
      return unsortedItems.sort(this.compareItems);
    },
    itemsBought() {
      return this.items.filter(item => item.bought && item.list_id === this.key);
    },
    itemsToBuy() {
      return this.items.filter(item => !item.bought && item.list_id === this.key);
    },
    key() {
      return this.$vnode.key;
    },
    isLoading() {
      return this.$store.state.isLoading;
    }
  }
}
</script>

<style scoped>
.empty-body-message {
  display: flex;
  display: -webkit-flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 50px 20px; 
  color: gray;
}

#shopping-list-body {
  min-height: 200px;
  padding: 10px 8px 8px 8px;
}

#shopping-list-items {
  padding-right: 20px;
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
}
</style>