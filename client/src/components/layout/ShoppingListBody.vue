<template>
  <div v-if="!isLoading" id="shopping-list-body">
    <insert-item :key="key"/>
    <transition-group 
      :name="animationName"
      id="shopping-list-items" 
      v-if="items[0] !== -1">
        <shopping-item v-for="item in itemsToBuy" :key="item.id" :listKey="key" />
    </transition-group>
    <div v-if="itemsBought.length !== 0" class="separator-line"/>
    <div v-if="itemsBought.length !== 0" style="font-size: 15px; margin: 0px 0px 10px 5px; color: rgba(209, 80, 80, 0.718);">BOUGHT:</div>
    <transition-group 
      :name="animationName"
      id="shopping-list-items">
      <shopping-item v-for="item in itemsBought" :key="item.id" :listKey="key" />
    </transition-group>
    <transition name="fade">
      <div v-if="listBodyTip">
        {{ listBodyTip }}
      </div>
    </transition>
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
  data() {
    return {
      animationName: '',
      listBodyTip: ''
    }
  },
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
    editedListId() {
      return this.$store.state.editedListId;
    },
    isLoading() {
      return this.$store.state.isLoading;
    }
  },
  watch: {
    items() {
      this.listBodyTip = null;
      setTimeout(() => {
        console.log(this.items.length === 0)
        console.log(this.key !== this.editedListId)
        if (this.items.length === 0 && this.key !== this.editedListId) {
          this.listBodyTip = 'Push Enter or green check-mark to submit';  
        } else if (this.items.length === 1) {
          this.listBodyTip = 'Push the circle next to item name to change category';
        } else if (this.items.length === 2) {
          this.listBodyTip = 'Long press item name to edit or delete';
        } else if (this.items.length === 3) {
          this.listBodyTip = 'Vertical swipe list header to delete a list';
        }
      }, 1000);
    }
  }
}
</script>


    <!-- <transition-group name="fade">
      <div :key="0" v-if="items.length === 0 && key !== editedListId" class="list-body-tip"> 
        {{ listBodyTip }}
      </div>
      <div :key="1" v-if="items.length === 1" class="list-body-tip"> 
        Long press item name to edit or delete
      </div>
      <div key="2" v-if="items.length === 2" class="list-body-tip">
          Push the circle next to item name to change category
      </div>
    </transition-group> -->


<style scoped>
.list-body-tip {
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 50px 20px 20px 20px; 
  color: gray;
}

#shopping-list-body {
  min-height: 180px;
  padding: 10px 8px 8px 8px;
}

#shopping-list-items {
  padding-bottom: 10px;
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
}
</style>