<template>
  <div v-if="!isLoading" id="shopping-list-body">
    <insert-item :key="key"/>
    <div>
      <transition-group 
        :name="animationName"
        id="shopping-list-items" 
        v-if="items[0] !== -1"
      >
        <shopping-item v-for="item in itemsToBuy" :key="item.id" :listKey="key" />
      </transition-group>
      <slide-up-down :active="!!listBodyTip" :duration="slideDuration">
        <user-tip :text="listBodyTip"/>
      </slide-up-down>    
    </div>
    <div v-if="itemsBought.length !== 0" class="separator-line"/>
    <div v-if="itemsBought.length !== 0" style="font-size: 15px; margin: 0px 0px 10px 5px; color: rgba(209, 80, 80, 0.718);">BOUGHT:</div>
    <transition-group 
      :name="animationName"
      id="shopping-list-items"
    >
      <shopping-item v-for="item in itemsBought" :key="item.id" :listKey="key" />
    </transition-group>
  </div>
</template>

<script>
import ShoppingItem from './ShoppingItem';
import InsertItem from './InsertItem';
import UserTip from '../popups/UserTip'

export default {
  components: {
    ShoppingItem,
    InsertItem,
    UserTip
  },
  name: "ShoppingListBody",
  data() {
    return {
      animationName: '',
      listBodyTip: '',
      slideDuration: 0
    }
  },
  methods: {
    compareItems(a, b) {
      let catA = a.category ? ('0' + a.category) : '1';
      let catB = b.category ? ('0' + b.category) : '1';

      const argA = catA + a.created_on.toLowerCase();
      const argB = catB + b.created_on.toLowerCase();

      let comparison = 0;
      if (argA < argB) {
        comparison = -1;
      } else if (argA > argB) {
        comparison = 1;
      }
      return comparison;
    },
  },
  computed: {
    list() {
      return this.$store.getters.getListById(this.key);
    },
    listsLength() {
      return this.$store.getters.getListsLength;
    },
    items() {
      let unsortedItems = this.$store.getters.getItemsByListId(this.key);
      return unsortedItems.sort(this.compareItems);
    },
    itemsBought() {
      return this.items.filter(item => item.bought && item.list_id === this.key);
    },
    itemsToBuy() {
      return this.items.filter(item => !item.bought && item.list_id === this.key);
    },
    key() {
      return this.$vnode.key;
    },
    editedListId() {
      return this.$store.state.editedListId;
    },
    listNameFieldOpen() {
      return this.editedListId === this.key;
    },
    isLoading() {
      return this.$store.state.isLoading;
    },
    isMobile() {
      return 'ontouchstart' in document.documentElement;
    },
    tapOrClick() {
      return this.isMobile ? 'Tap' : 'Click';
    },
    iconOrSwipe() {
      return this.isMobile ? 'swipe list header left or right' : 'click delete icon the on list header';
    }
  },
  mounted() {
    setTimeout(() => {
      this.animationName = 'bounce';
    }, 1000);

  },
  watch: {
    items() {
      this.listBodyTip = '';
      this.slideDuration = 0;
      setTimeout(() => {
        if (this.itemsBought.length === 0) {
          if (this.items.length === 1) {
            if (this.listsLength < 4) {
              this.listBodyTip = `${this.tapOrClick} the circle next to item name to change item category`;
            } else {
              this.listBodyTip = `To delete a list, ${this.iconOrSwipe}`;
            }
          } else if (this.items.length === 2) {
            this.listBodyTip = `${this.tapOrClick} item name to mark as bought`;
          } else if (this.items.length === 3) {
            this.listBodyTip = `${this.tapOrClick} and hold item name to edit or delete`;
          }
        }
      }, 400);
    }, 
    listNameFieldOpen() {
      this.slideDuration = 0;
      setTimeout(() => {
        if (this.items.length === 0 && !this.listNameFieldOpen) {
          this.listBodyTip = `${this.tapOrClick} check-mark or hit Enter to to submit an item`; 
        } 

      }, 400);
    },
    itemsBought() {
      setTimeout(() => {
        if (this.itemsToBuy.length === 0 && this.itemsBought.length > 0) {
          this.slideDuration = 500;
          this.listBodyTip = `Need a new list? ${this.tapOrClick} + in the top-left corner!`;
        }
      }, 400);
    }
  }
}
</script>

<style scoped>
#shopping-list-body {
  min-height: 220px;
  padding: 10px 8px 8px 8px;
  background-color: rgb(255, 253, 252);
}

#shopping-list-items {
  padding-bottom: 10px;
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
}

@media screen and (min-width: 800px){
#shopping-list-body {
  margin-left: 4px;
  box-shadow: 0px 0px 3px gray;
}
}
</style>