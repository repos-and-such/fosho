<template>
  <div 
    :class="{ 'list-open': isOpen, 'list-closed': !isOpen }"
    id="list-header"
    @click="setOpen">
    <div :class="{ 'list-text-open': isOpen, 'list-text-closed': !isOpen }">
      <span style="margin-right: 12px;">
        {{ dateTime }}
      </span>
      
      <span v-if="list.name">
        {{ list.name }}
      </span>
      <i
        v-if="!editedListId"
        class="material-icons" 
        style="display:inline-flex; align-self: center; padding-left: 10px; font-size: 22px;"
        @click="openNameField"
      >create</i>
      <insert-list-name v-if="key === editedListId" :key="this.key"/>
    </div>
    <span v-if="itemsLoading && isOpen" class="lds-dual-ring"></span>
    <div>
      <i class="material-icons" style="display:flex;" @click="openListMenu">menu</i>
    </div>
  </div>
</template>

<script>
import InsertListName from './InsertListName'

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
    openListMenu() {
      alert('yo')
    },
    openNameField() {
      this.$store.commit('setEditedListId', this.key);
    }
  },
  computed: {
    list() {
      return this.$store.getters.getListById(this.key);
    },
    dateTime() {
      return this.list.created_on.replace('T', ' ').split('.')[0];
    },
    key() {
      return this.$vnode.key;
    },
    isOpen() {
      return this.$store.getters.getOpenStatusById(this.key);
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
  margin: 3px;
  padding: 8px;
  padding-left: 10px;
  padding-right: 12px;
  margin-right: 0px;
  margin-left: 0px;
}
.list-open {
  /* box-shadow: 0 0 4px rgb(8, 116, 62); */
  color: white;
  background-color: rgb(70, 4, 114);
;
}
.list-closed {
  border: 1px solid rgb(151, 151, 151);
}
.list-text-open {
  display: flex;
  color: white;
}
.list-text-closed {
  display: flex;
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