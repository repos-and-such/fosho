<template>
  <div>
    <transition name="fade">
      <div id="shopping-item" :class="{ 'item-bought': item.bought, 'item-active': !item.bought }" style="display: flex">
        <span id="shopping-item-text" @click="toggleBought">
          {{ item.name }}
        </span>
        <span 
          @click="toggleCategoryMenu"
          id="category-indicator"
          :class="{
            'none': item.category === 'none' || !item.category,
            'fruit': item.category === 'fruit',
            'vegetable': item.category === 'vegetable',
            'drink': item.category === 'drink',
            'bread-and-bakery': item.category === 'bread-and-bakery',
            'dairy': item.category === 'dairy',
            'grains': item.category === 'grains',
            'meat': item.category === 'meat',
            'personal-care': item.category === 'personal-care',
            'household': item.category === 'household',
            }"
        />
      </div>
    </transition>
    <item-menu
      v-if="categoryMenuIsOpen"
      :item="item"
    />
  </div>
</template>

<script>
import ItemService from '../../api-service/ItemService'
import ItemMenu from '../popups/ItemMenu';

export default {
  name: "ShoppingItem",
  props: {
    listKey: Number
  },
  components: {
    ItemMenu
  },
  methods: {
    toggleBought() {
      if (!this.menuIsOpen) {
        let updatedItem = Object.assign({}, this.item);
        updatedItem.bought = !updatedItem.bought;
        this.executeUpdate(updatedItem);
      } else {
        this.$store.commit('showAlert', { timeout: 1400, message: 'Edit mode Active', type: 'success' });
      }
    },
    toggleCategoryMenu() {
      if (this.categoryMenuIsOpen) {
        this.$store.commit('setOpenCategoryMenuId', null);
      } else {
        setTimeout(() => {
          this.$store.commit('setOpenCategoryMenuId', this.key);          
        }, 0);
      }
    },
    // editItem() {
    //   this.$store.commit('toggleConfirmDiag',
    //     {
    //       open: true, 
    //       message: 'Edit item', 
    //       type: 'editItem'
    //     });
    //     this.$store.commit('setEditedItem', this.item);
    // },
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
    categoryMenuIsOpen() {
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

.none {
  border: 12px solid rgb(235, 235, 235);
  box-shadow: 0 0 5px rgb(185, 183, 183);
}

.fruit {
  border: 12px solid rgba(255, 115, 0, 0.3);
  box-shadow: 0 0 5px rgb(255, 115, 0);
}

.vegetable {
  border: 12px solid rgba(90, 209, 54, 0.3);
  box-shadow: 0 0 5px rgb(90, 209, 54);
}

.drink {
  border: 12px solid rgba(207, 209, 54, 0.3);
  box-shadow: 0 0 5px rgb(207, 209, 54);
}

.bread-and-bakery {
  border: 12px solid rgba(177, 78, 17, 0.3);
  box-shadow: 0 0 5px rgb(196, 101, 42);
}

.meat {
  border: 12px solid rgba(255, 0, 0, 0.3);
  box-shadow: 0 0 5px rgb(255, 0, 0);
}

.dairy {
  border: 12px solid rgb(255, 255, 255);
  box-shadow: 0 0 5px rgb(165, 164, 164);
}

.grains-and-dry {
  border: 12px solid rgba(255, 187, 0, 0.3);
  box-shadow: 0 0 5px rgb(255, 187, 0);
}

.drink {
  border: 12px solid rgba(207, 209, 54, 0.3);
  box-shadow: 0 0 5px rgb(207, 209, 54);
}

.personal-care {
  border: 12px solid rgba(130, 105, 185, 0.3);
  box-shadow: 0 0 5px rgb(140, 104, 218);
}

.household {
  border: 12px solid rgba(71, 202, 180, 0.3);
  box-shadow: 0 0 5px rgb(95, 180, 166);
}

#edit-icon {
  margin-right: 12px;
  color:rgb(70, 70, 92);
}

#shopping-item {
  display: flex;
display: -webkit -flex;
  align-items: center;
  margin: 0px 2px 0px 3px;
  margin-bottom: 7px;
  border-radius: 24px;
  text-align: left;
}

#category-indicator {
  margin: 0px 9px;
  border-radius: 20px;
  cursor: pointer;
}

#shopping-item-text {
  padding: 3px 6px 3px 14px;
  font-size: 24px;
  cursor: pointer;
  word-break: break-word;
}
</style>