<template>
  <div v-if="!isLoading" id="shopping-list-body">
    <insert-item :key="key"/>
    <div id="shopping-list-items" v-if="items[0] !== -1">
      <shopping-item v-for="item in itemsToBuy" :key="item.id" :listKey="key" />
    </div>
    <div v-if="itemsBought.length !== 0" id="separator-line"/>
    <div v-if="itemsBought.length !== 0" style="font-size: 15px; margin: 0px 0px 10px 5px; color: rgba(209, 80, 80, 0.718);">BOUGHT:</div>
    <div id="shopping-list-items">
      <shopping-item v-for="item in itemsBought" :key="item.id" :listKey="key" />
    </div>
    <div v-if="items.length === 0" class="empty-body-message">
      Enter shopping item and push the green plus-button or hit enter</div>
  </div>
</template>

<script>
import ShoppingItem from './ShoppingItem';
import ItemService from '../../api-service/ItemService';
import InsertItem from './/InsertItem';

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
     }
  },
  async created() {
    if ((this.items.length === 0 || this.items[0].list_id !== this.list.id) && this.list.item_count !== 0) {
      this.$store.commit('setLoading', true);
        ItemService.getItems(this.list.id, await this.$auth.getTokenSilently())
          .then(res => {
            if (res[0] === 'SUCCESS') {
              var itemsFromApi = res[1];
              this.$store.commit('setItems', itemsFromApi);
              this.$store.commit('setLoading', false);
            } else {
              this.$store.commit('showGenericError');
            }
          }).catch(() => {
            this.$store.commit('setLoading', false);
          });
    }
  },
  computed: {
    list() {
      return this.$store.getters.getListById(this.key);
    },
    items() {
      let unsortedItems = this.$store.state.items;
      return unsortedItems.sort(this.compareItems);
    },
    itemsBought() {
      return this.items.filter(item => item.bought)
    },
    itemsToBuy() {
      return this.items.filter(item => !item.bought)
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
display: -webkit -flex;
  align-items: center; 
  justify-content: center;
  padding: 50px 20px; 
  color: gray;
}

#shopping-list-items {
  padding-right: 20px;
  display: flex;
display: -webkit -flex;
  flex-wrap: wrap;
}

#shopping-list-body {
  padding: 10px 8px 22px 8px;
}
</style>