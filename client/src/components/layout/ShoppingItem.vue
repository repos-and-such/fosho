<template>
  <div>
    <transition name="fade">
      <div id="shopping-item" :class="{ 'item-bought': item.bought, 'item-active': !item.bought }" style="display: flex">
        <span id="shopping-item-text" @click="toggleBought">
          {{ item.name }}
        </span>
        <span v-if="!menuIsOpen" id="category-indicator" @click.self="toggleCategoryMenu"/>
        <i v-if="menuIsOpen" class="material-icons" id="delete-icon" @click="deleteItem">delete_forever</i>
        <i v-if="menuIsOpen" class="material-icons" id="edit-icon" @click="editItem">create</i>
      </div>
    </transition>
    <category-select v-if="thisCategoryMenuIsOpen"/>
  </div>
</template>

<script>
import ItemService from '../../api-service/ItemService'
import CategorySelect from '../common/CategorySelect';

export default {
  name: "ShoppingItem",
  props: {
    listKey: Number
  },
  components: {
    CategorySelect
  },
  methods: {
    toggleBought() {
      if (!this.menuIsOpen) {
        let updatedItem = Object.assign({}, this.item);
        updatedItem.bought = !updatedItem.bought;
        this.executeUpdate(updatedItem);
      }
    },
    toggleCategoryMenu() {
      if (this.thisCategoryMenuIsOpen) {
        this.$store.commit('setOpenCategoryMenuId', null);
      } else {
        this.$store.commit('setOpenCategoryMenuId', this.key);
      }
    },
    editItem() {
      this.$store.commit('toggleConfirmDiag',
        {
          open: true, 
          message: 'Edit item', 
          type: 'editItem'
        });
        // ???
        this.$store.commit('setEditedItem', this.item);
    },
    async executeUpdate(item) {
      ItemService.updateItem(item, this.item, await this.$auth.getTokenSilently())
          .then(res => {
            if (res.data[0] === 'SUCCESS') {
              let originalItem = this.item;
              let updatedItem = Object.assign({}, res.data[1]);
              this.$store.commit('updateItem', { originalItem, updatedItem });
              this.$store.commit('toggleConfirmDiag', false);
            } else {
              this.$store.commit('showGenericError');
            }
          });        
    },
    async deleteItem() {
      ItemService.deleteItem(this.key, await this.$auth.getTokenSilently())
        .then(res => {
          if (res.data[0] === 'SUCCESS') {
            console.log('lets delete')
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
    triggerConfirmUpdate() {
      return this.$store.state.triggerConfirmUpdate;
    },
    editedItem() {
      return this.$store.state.editedItem;
    },
    thisCategoryMenuIsOpen() {
      return this.key === this.$store.state.openCategoryMenuId;
    }
  },
  watch: {
    triggerConfirmUpdate() {
      setTimeout(() => {
        if (this.key === this.editedItem.id) {
          this.executeUpdate(this.editedItem);
        } // siia erinevuse check ka?
      }, 0);
     
    }
  }
}
</script>

<style scoped>
.material-icons {
  margin-left: 16px;
}
#delete-icon {
  color:rgb(185, 2, 2);
}
#edit-icon {
  margin-right: 12px;
  color:rgb(70, 70, 92);
}
#shopping-item {
  display: flex;
  align-items: center;
  margin: 3px;
  margin-bottom: 7px;
  border-radius: 20px;
  text-align: left;
}
#category-indicator {
  margin: 0px 9px;
  border: 10px solid rgb(210, 170, 248);
  border-radius: 20px;
  box-shadow: 0 0 5px blueviolet;
  cursor: pointer;
}
#shopping-item-text {
  padding: 3px 6px 3px 14px;
  font-size: 24px;
  cursor: pointer;
  word-break: break-word;
}
.item-active {
  border: 1px solid rgb(255, 145, 0);
  box-shadow: 0 0 4px rgb(255, 145, 0);
  color: rgb(98, 85, 85);
}
  
.item-bought {
  border: 1px solid rgb(172, 172, 172);
  box-shadow: 0 0 4px  rgb(172, 172, 172);
  color: rgb(172, 172, 172);
}
</style>