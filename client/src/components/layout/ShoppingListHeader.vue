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
      <span id="createdDate-time" style="margin-right: 12px; display: flex; white-space: nowrap">
        {{ dateTimeDisplay }}
      </span>

      <span id="list-name" style="display: flex; align-items: center; white-space: nowrap;">
        <span v-if="list.name && editedListId !== key">
          {{ list.name }}
        </span>
        <span style="display: flex; align-items: center;">
          <insert-list-name v-if="key === editedListId" :key="this.key"/>
        </span>
      </span>

    </div>
    <span v-if="itemsLoading && isOpen" class="lds-dual-ring" style="margin-right: 4px"></span>
    <span v-else-if="isOpen" :class="{ 'list-text-open': isOpen, 'list-text-closed': !isOpen }">
      <i class="material-icons" style="display:flex;" @click="toggleListMenu">create</i>
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
  background-color: rgb(213, 82, 68);
}
.list-closed {
  background-color: white;
  border-top: 1px solid rgb(230, 227, 227);
}
.list-text-open {
  color: white;
}
.list-text-closed {
  color: rgb(151, 151, 151);
}

</style>