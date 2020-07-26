<template>
  <div v-if="!itemsLoading" id="shopping-list-body">
    <insert-item :key="key"/>
    <div id="shopping-list-items">
      <shopping-item v-for="item in itemsToBuy" :key="item.id" :listKey="key" />
    </div>
    <div id="shopping-list-items">
      <shopping-item v-for="item in itemsBought" :key="item.id" :listKey="key" />
    </div>
    <div v-if="items.length === 0" style="height: 300px; display: flex; align-items: center; justify-content: center;">Please insert some items</div>
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
  },
  async created() {
    this.$store.commit('setLoading', true);
    ItemService.getItems(this.list.id, await this.$auth.getTokenSilently())
      .then(res => {
        if ((Array.isArray(res.data) && res.data[0] !== 'ERROR') || !Array.isArray(res.data)) {
          var itemsFromApi = res;
          this.$store.commit('setItems', itemsFromApi);
          this.$store.commit('setLoading', false);
        } else {
          this.$store.commit('showGenericError');
        }
      }).catch(() => {
        this.$store.commit('setLoading', false);
      });
  },
  computed: {
    list() {
      return this.$store.getters.getListById(this.key);
    },
    items() {
      return this.$store.state.items;
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
    itemsLoading() {
      return this.$store.state.itemsLoading;
    }
  }
}
</script>

<style scoped>
#shopping-list-items {
  padding-left: 12px;
  padding-right: 20px;
  display: flex;
  flex-wrap: wrap;
}
#shopping-list-body {
  /* margin-bottom: 20px; */
  /* margin-top: 8px; */
}
</style>