<template>
  <div 
    :class="{ 'list-open': isOpen, 'list-closed': !isOpen }"
    id="list-header"
  >
    <div 
      :class="{ 'list-text-open': isOpen, 'list-text-closed': !isOpen }" 
      style="display: flex; align-items: center; flex-wrap: wrap; width: 95%;"
      @click="setOpen"
    >
      <span id="date-time" style="margin-right: 12px; display: flex; white-space: nowrap">
        {{ dateTimeDisplay }}
      </span>

      <span id="list-name" style="display: flex; align-items: center; white-space: nowrap">
        <span v-if="list.name && editedListId !== key">
          {{ list.name }}
        </span>
        <span style="display: flex; align-items: center;">
          <insert-list-name v-if="key === editedListId" :key="this.key"/>
        </span>
      </span>

    </div>
    <span v-if="itemsLoading && isOpen" class="lds-dual-ring" style="margin-right: 5px"></span>
    <i v-else class="material-icons" style="display:flex;" @click="toggleListMenu">menu</i>
  </div>
</template>

<script>
import InsertListName from './InsertListName';

export default {
  name: "ShoppingListHeader",
  components: { InsertListName },
  data() {
    return {
    }
  },
  methods: {
    setOpen() {
      this.$store.commit('setOpen', this.key);
    },
    toggleListMenu() {
      if (this.menuIsOpen) {
        this.$store.commit('setOpenListMenu', null);
      } else {
        this.$store.commit('setOpenListMenu', this.key);
      }
    },
    // red?
    openNameField() {
      this.$store.commit('setEditedListId', this.key);
    }
  },
  computed: {
    list() {
      return this.$store.getters.getListById(this.key);
    },
    dateTimeDisplay() {
        if (this.list.created_on) {
        let date = this.list.created_on.split('T')[0];
        let dateArray = date.split('-');
        let dateReversed = dateArray.reverse().join('-');  
        let time = this.list.created_on.split('T')[1];
        time = time.split('.')[0]
      
        return dateReversed + ' ' + time;
      } else {
        return '';
      }
    },
    key() {
      return this.$vnode.key;
    },
    isOpen() {
      return this.$store.getters.getOpenStatusById(this.key);
    },
    menuIsOpen() {
      return this.$store.getters.getOpenMenuStatusById(this.key);
    },
    itemsLoading() {
      return this.$store.state.itemsLoading;
    },
    editedListId() {
      return this.$store.state.editedListId;
    }
  }
}
</script>
<style scoped>
#list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 12px;
  padding-top: 5px;
  padding-bottom: 5px;

}
.list-open {
  color: white;
  background-color: rgb(70, 4, 114);
}
.list-closed {
  background-color: rgb(228, 228, 228);
  border: 1px solid rgb(255, 255, 255);
  border-bottom: 0px;
}
.list-text-open {
  color: white;
}
.list-text-closed {
  color: rgb(151, 151, 151);
}
.lds-dual-ring {
  display: inline-block;
  width: 20px;
  height: 20px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 15px;
  height: 15px;
  margin: 0px;
  border-radius: 50%;
  border: 3px solid white;
  border-color: white transparent white transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>