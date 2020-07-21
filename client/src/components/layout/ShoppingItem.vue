<template>
  <div id="shopping-item" style="display: flex">
      {{ item.name }}
      <i class="material-icons" id="clear-icon" @click="deleteItem(item.id)">clear</i>
  </div>
</template>

<script>
import ItemService from '../../api-service/ItemService'
export default {
  props: {
    item: Object
  },
  name: "ShoppingItem",
  data() {
    return {
    }
  },
  methods: {
    updateItem() {

    },
    deleteItem(id) {
      ItemService.deleteItem(id);
    }
  }  
}
</script>

<style scoped>
#clear-icon {
  margin-left: 4px;
  color:rgb(185, 2, 2);
}
#shopping-item {
  margin: 3px;
  padding: 4px;
  padding-top: 3px;
  padding-left: 12px;
  padding-right: 7px;
  margin-bottom: 7px;
  border: 1px solid rgb(255, 145, 0);
  border-radius: 2px;
  box-shadow: 0 0 4px rgb(255, 145, 0);
  font-family:monospace;
  text-align: left;
  overflow-wrap: break-word;
}
</style>