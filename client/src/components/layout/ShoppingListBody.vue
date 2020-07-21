<template>
  <div id="shopping-list-body">
    <insert-item />
    <shopping-item v-for="item in items"
      :key="item.id" />
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
  async created() {
    let itemsFromApi = await ItemService.getItems(this.list.id);
    this.$store.commit('setItems', itemsFromApi);
    console.log(this.key);
    console.log(this.items);

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
    }
  }
}
</script>

<style scoped>
#shopping-list-body {
  padding-left: 12px;
  padding-right: 12px;
  display: flex;
  flex-wrap: wrap;
}
</style>