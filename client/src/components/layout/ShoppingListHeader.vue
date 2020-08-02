<template>
  <div
    v-if="list"
    :class="{ 'list-open': isOpen, 'list-closed': !isOpen }"
    id="list-header"
  >
    <div 
      :class="{ 'list-text-open': isOpen, 'list-text-closed': !isOpen }" 
      style="display: flex; align-items: center; flex-wrap: wrap; width: 88%;"
      @click="setOpen"
    >
      <span id="createdDate-time" style="margin-right: 12px; display: flex; white-space: nowrap">
        {{ dateTimeDisplay }}
      </span>

      <span id="list-name" style="display: flex; align-items: center; white-space: nowrap; font-weight: bold;">
        <span v-if="list.name && editedListId !== key">
          {{ list.name }}
        </span>
        <span style="display: flex; align-items: center;">
          <insert-list-name v-if="key === editedListId" :key="this.key"/>
        </span>
      </span>

    </div>
    <span v-if="itemsLoading && isOpen" class="lds-dual-ring" style="margin-right: 4px"></span>
    <span v-else-if="isOpen" :class="{ 'edit-icon-pressed': menuIsOpen, 'edit-icon': !menuIsOpen}">
      <i class="material-icons" @click="toggleListMenu">create</i>
    </span>
  </div>
</template>

<script>
import InsertListName from './InsertListName';
import moment from 'moment';

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
    openNameField() {
      this.$store.commit('setEditedListId', this.key);
    }
  },
  computed: {
    list() {
      return this.$store.getters.getListById(this.key);
    },
    dateTimeDisplay() {
      let time = this.list.created_on.split('T')[1];
      time = time.split('.')[0]

      let currentDate = moment().format('YYYY-MM-DD');
      let yesterDaysDate = moment().subtract(1, 'days').format('YYYY-MM-DD');
      let createdDate = moment(this.list.created_on).format('YYYY-MM-DD');

      if (createdDate === currentDate) {
        return 'Today ' + time;
      } else if (createdDate === yesterDaysDate) {
        return 'Yesterday ' + time;
      } else if (this.list.created_on) {
        let createdDateArray = createdDate.split('-');
        let createdDateReversed = createdDateArray.reverse().join('-');  
        return createdDateReversed + ' ' + time;
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
.list-open {
  color: white;
  background-color: rgb(213, 82, 68);
}

.list-closed {
  margin-top: -1px; 
  background-color: white;
  border-top: 1px solid rgb(230, 227, 227);
  border-bottom: 1px solid rgb(230, 227, 227);
}

.list-text-open {
  color: white;
}

.list-text-closed {
  color: rgb(151, 151, 151);
}

.edit-icon {
  display:flex;
  justify-content: center;
  align-items: center; 
  height: 40px; 
  width: 40px; 
  border-radius: 30px;
}

.edit-icon-pressed {
  display:flex;
  justify-content: center;
  align-items: center; 
  height: 40px; 
  width: 40px; 
  border-radius: 30px;
  box-shadow: inset 0 0 4px rgba(34, 32, 32, 0.692);
  background: rgb(187, 57, 42);
}

#list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  cursor: pointer;
}
</style>