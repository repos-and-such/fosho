<template>
  <div id="shopping-list-body">
    <div v-for="item in items"
      :key="item.id"><shopping-item :itemName="item.name"/>
    </div>
  </div>
</template>

<script>
import ShoppingItem from './ShoppingItem.vue';
import ItemService from '../../api-service/ItemService';

export default {
  props: {
    listId: Number
  },
  components: {
    ShoppingItem
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
}
</style>