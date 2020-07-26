<template>
  <transition name="fade">
    <div id="shopping-item" :class="{ 'item-bought': item.bought, 'item-active': !item.bought }" style="display: flex" @click="toggleBought">
      {{ item.name }}
      <i v-if="menuIsOpen" class="material-icons" id="clear-icon" @click="deleteItem">clear</i>
      <i v-if="menuIsOpen" class="material-icons" id="edit-icon" @click="editItem">create</i>
    </div>
  </transition>
</template>

<script>
import ItemService from '../../api-service/ItemService'
export default {
  name: "ShoppingItem",
  props: {
    listKey: Number
  },
  methods: {
    toggleBought() {
      if (!this.menuIsOpen) {
        let updatedItem = Object.assign({}, this.item);
        updatedItem.bought = !updatedItem.bought;
        this.executeUpdate(updatedItem);
      }
    },
    editItem() {
      console.log(this.listKey);
      console.log(this.list);
      this.$store.commit('toggleConfirmDiag',
        {
          open: true, 
          message: 'Edit item', 
          type: 'editItem'
        });
      // this.executeUpdate();

    },
    async executeUpdate(item) {
      ItemService.updateItem(item, await this.$auth.getTokenSilently())
          .then(res => {
            if ((Array.isArray(res.data) && res.data[0] !== 'ERROR') || !Array.isArray(res.data)) {
              let originalItem = this.item;
              let updatedItem = Object.assign({}, res.data[0]);
              this.$store.commit('updateItem', { originalItem, updatedItem });
            } else {
              this.$store.commit('showGenericError');
            }
          });        
    },
    async deleteItem() {
      console.log('commitime: ' + this.key)

      ItemService.deleteItem(this.key, await this.$auth.getTokenSilently())
        .then(res => {
          if ((Array.isArray(res.data) && res.data[0] !== 'ERROR') || !Array.isArray(res.data)) {
            this.$store.commit('deleteItem', this.item);
          } else {
            this.$store.commit('showGenericError');
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
    },
    menuIsOpen() {
      return this.$store.getters.getOpenMenuStatusById(this.listKey);
    },
    list() {
      return this.$store.getters.getListById(this.listKey);
    },
    triggerItemEdit() {
      return this.$store.state.triggerItemEdit;
    }
  },
  watch: {
    triggerItemEdit() {
      if (this.key === 100)
      console.log(this.key);
        
    }
  }
}
</script>

<style scoped>
#clear-icon {
  margin-left: 16px;
  color:rgb(185, 2, 2);
}
#edit-icon {
  margin-left: 16px;
  color:rgb(46, 46, 80);
}
#shopping-item {
  margin: 3px;
  padding: 4px;
  padding-left: 12px;
  padding-right: 13px;
  margin-bottom: 7px;
  border-radius: 20px;
  text-align: left;
  overflow-wrap: break-word;
}
.item-active {
  border: 1px solid rgb(255, 145, 0);
  box-shadow: 0 0 4px rgb(255, 145, 0);
  color:rgb(49, 33, 33);
}
  
.item-bought {
  border: 1px solid rgb(172, 172, 172);
  box-shadow: 0 0 4px  rgb(172, 172, 172);
  color: rgb(172, 172, 172);
}
</style>