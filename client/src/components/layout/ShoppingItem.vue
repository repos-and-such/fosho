<template>
  <div id="shopping-item" style="display: flex">
      {{ item.name }}
      <i class="material-icons" id="clear-icon" @click="deleteItem(item.id)">clear</i>
  </div>
</template>

<script>
import ItemService from '../../api-service/ItemService'
export default {
  name: "ShoppingItem",
  methods: {
    updateItem() {

    },
    async deleteItem(id) {
      ItemService.deleteItem(id, await this.$auth.getTokenSilently())
        .then(res => {
          if (res.data && res.data[0] !== 'ERROR') {
            this.$store.commit('deleteItem', this.item);
          } 
        });
    }
  },
  computed: {
    item() {
      return this.$store.getters.getItemById(this.key);
    },
    key() {
      return this.$vnode.key;
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
  border-radius: 20px;
  box-shadow: 0 0 4px rgb(255, 145, 0);
  /* font-family:monospace; */
  text-align: left;
  overflow-wrap: break-word;
}
</style>