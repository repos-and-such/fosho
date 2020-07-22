<template>
  <div id="shopping-list-body">
    <insert-item :key="key"/>
    <div v-if="!itemsLoading" id="shopping-list-items">
      <shopping-item v-for="item in items" :key="item.id" />
    </div>
  </div>
</template>

<script>
import ShoppingItem from './ShoppingItem.vue';
import ItemService from '../../api-service/ItemService';
import InsertItem from './/InsertItem.vue';

export default {
  components: {
    ShoppingItem,
    InsertItem
  },
  name: "ShoppingListBody",
  methods: {
  },
  created() {
    this.$store.commit('setLoading', true);
    ItemService.getItems(this.list.id)
      .then(res => {
        if (res) {
          var itemsFromApi = res;
          this.$store.commit('setItems', itemsFromApi);
          this.$store.commit('setLoading', false);
        }
      }).catch(err => {
        this.$store.commit('setLoading', false);
        throw err;
      });
  },
  computed: {
    list() {
      return this.$store.getters.getListById(this.key);
    },
    items() {
      return this.$store.state.items;
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
  padding-right: 12px;
  display: flex;
  flex-wrap: wrap;
}
#shopping-list-body {
  margin-bottom: 20px;
  margin-top: 8px;
}
</style>