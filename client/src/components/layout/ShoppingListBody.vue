<template>
  <div class="container">
    <div v-for="item in items"
      :item="item"
      :key="item">
      {{ item }}<shopping-list-item />
    </div>
  </div>
</template>

<script>
import ShoppingListItem from './ShoppingListItem.vue';
import ItemService from '../../api-service/ItemService';

export default {
  components: {
    ShoppingListItem
  },
  name: "ShoppingListBody",
  data() {
    return {
      items: []
    }
  },
  methods: {
  },
  created() {
    this.items = ItemService.getItems();
  }
}
</script>

<style scoped>
</style>