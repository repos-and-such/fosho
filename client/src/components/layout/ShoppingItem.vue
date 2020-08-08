<template>
  <div>
    <div id="shopping-item" :class="{ 'item-bought': item.bought, 'item-active': !item.bought }" style="display: flex">
      <span 
        v-if="!editMode" 
        class="button"
        ref="itemName"
        @click="toggleBought"
        v-hammer:press="openEditMode"
      >
        {{ item.name }}
      </span>
      <span v-else style="display: flex; align-items: center;">
          <textarea 
          v-model="item.name"
          class="text-field"
          ref="itemNameField"
          spellcheck="false"
          @keydown.esc="cancelEdit"
          @keydown.enter="commitEdit" 
        />
        <span class="icon-container">
          <i 
            class="material-icons" 
            @click="commitEdit" 
            style="margin-right: 16px; color: rgb(65, 156, 92);"
          >
            check
          </i>
          <i 
            class="material-icons"
            @click="deleteItem"
            style="margin-right: 16px; color: rgb(180, 3, 3);">
            delete_forever
          </i>
        </span>
      </span>
      <span 
        v-if="!editMode"
        @click="toggleCategoryMenu"
        id="category-indicator"
        :class="{
          'none': item.category === 'none' || !item.category,
          'fruit': item.category === 'fruit',
          'vegetable': item.category === 'vegetable',
          'drink': item.category === 'drink',
          'bread-and-bakery': item.category === 'bread-and-bakery',
          'dairy': item.category === 'dairy',
          'grains-and-dry': item.category === 'grains-and-dry',
          'meat': item.category === 'meat',
          'personal-care': item.category === 'personal-care',
          'household': item.category === 'household',
          }"
      />
    </div>
    <slide-up-down :active="categoryMenuIsOpen">
      <item-menu
        v-if="categoryMenuIsOpen"
        :item="item"
      />
    </slide-up-down>
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
  data() {
    return {
      editMode: false,
      rollBackValue: ''
    }
  },
  methods: {
    openEditMode() {
      let editedNameHeight = this.$refs.itemName.clientHeight;
      let editedNameWidth = this.$refs.itemName.clientWidth;
      document.documentElement.style.setProperty('--nameHeight', `${editedNameHeight}px`);
      document.documentElement.style.setProperty('--nameWidth', `${editedNameWidth}px`);



      this.rollBackValue = this.item.name;
      this.editMode = true;
      setTimeout(() => {
        this.$refs.itemNameField.focus();
      }, 0);
    },
    cancelEdit() {
      this.item.name = this.rollBackValue;
      this.editMode = false;
    },
    commitEdit() {
      let freshItem = Object.assign({}, this.item);
      this.executeUpdate(freshItem);
      this.editMode = false;
    },
    toggleBought() {
      let freshItem = Object.assign({}, this.item);
      freshItem.bought = !freshItem.bought;
      this.executeUpdate(freshItem);
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
    async executeUpdate(freshItem) {
      let originalItem = Object.assign({}, this.item);
      let originalItemBackup = Object.assign({}, this.item);
      if (!this.editMode) {
        this.$store.commit('updateItem', { originalItem, freshItem });
      }
      ItemService.updateItem(freshItem, this.item, await this.$auth.getTokenSilently())
          .then(res => {
            if (res.data[0] !== 'SUCCESS') {
              this.$store.commit('showGenericError');
              originalItem = Object.assign({}, freshItem);
              freshItem = originalItemBackup;
              this.$store.commit('updateItem', { originalItem, freshItem });
            } else if (this.rollBackValue) {
              this.$store.commit('updateItem', { originalItem, freshItem });
              this.rollBackValue = '';
            }
          });        
    },
    async deleteItem() {
      ItemService.deleteItem(this.item.id, await this.$auth.getTokenSilently())
        .then(res => {
          if (res.data[0] === 'SUCCESS') {
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
.item-active {
  border: 1px solid rgb(246, 186, 240);
  box-shadow: 0 0 4px rgb(246, 186, 240);
  color: rgb(98, 85, 85);
}
  
.item-bought {
  border: 1px solid rgb(172, 172, 172);
  box-shadow: 0 0 4px  rgb(172, 172, 172);
  color: rgb(172, 172, 172);
}

.button {
  padding: 3px 6px 3px 14px;
  font-size: 24px;
  cursor: pointer;
  word-break: break-word;
}

.text-field {
  border: none;
  box-shadow: none;
  padding: px 0px 2px 14px;
  background-color: transparent;
  border-radius: 0px;
  margin: 0px;
  width: calc(var(--nameWidth)*0.80);
  height: (--nameHeight);
  min-height: 80px;
  color: rgb(219, 92, 41);
}

.icon-container {
  display: flex; 
  flex-direction: column; 
  justify-content: space-between; 
  height: calc(var(--nameHeight)*1);
  padding: 6px 0px;
  min-height: 70px;
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
  display: -webkit-flex;
  align-items: center;
  margin: 0px 2px 0px 3px;
  margin-top: 7px;
  border-radius: 24px;
  text-align: left;
  background-color: white;
}

#category-indicator {
  margin: 0px 9px;
  border-radius: 20px;
  cursor: pointer;
}
</style>