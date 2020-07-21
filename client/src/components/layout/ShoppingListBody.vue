<template>
  <div id="shopping-list-body">
    <insert-item />
    <div v-for="item in items"
      :key="item.id"><shopping-item :item="item"/>
    </div>
  </div>
</template>

<script>
import ShoppingItem from './ShoppingItem.vue';
import ItemService from '../../api-service/ItemService';
import InsertItem from './/InsertItem.vue';

export default {
  props: {
    listId: Number
  },
  components: {
    ShoppingItem,
    InsertItem
  },
  name: "ShoppingListBody",
  data() {
    return {
      items: []
    }
  },
  methods: {
  },
  async created() {
    this.items = await ItemService.getItems(this.listId);
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