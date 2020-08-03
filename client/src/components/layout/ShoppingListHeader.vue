<template>
  <div
    v-if="list"
    :class="{ 'list-open': isOpen, 'list-closed': !isOpen }"
    id="list-header"
  >
    <div 
      :class="{ 'list-open-text': isOpen, 'list-closed-text': !isOpen }"
      @click="setOpen"
    >
      <span id="createdDate-time" style="margin-right: 12px; white-space: nowrap; padding: 6px 0px;">
        {{ dateTimeDisplay }}
      </span>
      <span id="list-name" @dblclick="openNameField">
        <span v-if="key !== editedListId && list.name">
          {{ list.name }}
        </span>
        <button :class="{ 'list-open-text': isOpen, 'list-closed-text': !isOpen }" v-if="!list.name && isOpen && key !== editedListId">
          <i class="material-icons" @click="openNameField">create</i>
        </button>
        <insert-list-name v-if="key === editedListId" :key="this.key"/>
      </span>
    </div>
    <span v-if="itemCount > 0" :class="{ 'list-open-count': isOpen, 'list-closed-count': !isOpen }" id="item-count">
      {{ itemCount }}
     </span>
    <span v-if="isLoading && isOpen" class="lds-dual-ring" style="margin-right: 4px"></span>
    <button 
      type="delete"
      name="delete-list"
      v-else-if="isOpen && (itemCount > 0 || $store.getters.getListsLength > 1)">
      <i id="delete-list" class="material-icons" @click="openDeleteConfirmation">delete_forever</i>
    </button>
  </div>
</template>

<script>
import InsertListName from './InsertListName';
import ListService from '../../api-service/ListService';
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
      this.$store.commit('setOpenList', this.key);
    },
    openNameField() {
      this.$store.commit('setEditedListId', this.key);
    },
    openDeleteConfirmation() {
      if (this.items.length !== 0) {
        setTimeout(() => {
          this.$store.commit('toggleConfirmDiag',
          {
            open: true, 
            message: 'This list contains items, are you sure you want to delete it?' 
          });
        }, 0);
      } else {
        this.deleteList();
      }
    },
    async deleteList() {  
      this.$store.commit('setLoading', true);
      ListService.deleteList(this.key, await this.$auth.getTokenSilently())        
        .then(res => {
          if (res.data[0] === 'SUCCESS') {
            this.$store.commit('deleteOpenList');
            this.$store.commit('showAlert', { timeout: 1400, message: 'List Deleted', type: 'success' });
            this.$store.commit('setLoading', false);
          } else {
            this.$store.commit('showGenericError');
            this.$store.commit('setLoading', false);
          }
        });
    }    
  },
  computed: {
    list() {
      return this.$store.getters.getListById(this.key);
    },
    dateTimeDisplay() {
      if (this.list.created_on) {
        let time = this.list.created_on.split('T')[1];
        time = time.split('.')[0]

        let currentDate = moment().format('YYYY-MM-DD');
        console.log(this.list.name);
        console.log('current datetime: ' + moment().format());
        console.log('current date: ' + currentDate);
        let yesterDaysDate = moment().subtract(1, 'days').format('YYYY-MM-DD');
        console.log('yesterdays date: ' + yesterDaysDate);

        let createdDate = moment(this.list.created_on).format('YYYY-MM-DD');
        console.log('created date: ' + createdDate);

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
      } else return null; 
    },
    key() {
      return this.$vnode.key;
    },
    isOpen() {
      return this.$store.getters.getOpenStatusById(this.key);
    },
    isLoading() {
      return this.$store.state.isLoading;
    },
    editedListId() {
      return this.$store.state.editedListId;
    },
    itemCount() {
      if (this.items.length > 0 && this.items[0].list_id == this.key) {
        return this.items.length;
      } else {
        return this.list.item_count;
      }
    },
    items() {
      return this.$store.state.items;
    }
  }
}
</script>
<style scoped>
.list-open {
  color: white;
  background-color: rgb(218, 98, 84);
}

.list-closed {
  background-color: white;
}

.list-open-text {
  display: flex;
 display: -webkit-flex; 
  align-items: center; 
  flex-wrap: wrap; 
  width: 82%;
  color: white;
}

.list-closed-text {
  display: flex;
 display: -webkit-flex; 
  align-items: center; 
  flex-wrap: wrap; 
  color: rgb(151, 151, 151);
  width: 92%;
}

.list-closed-count {
  color: rgb(151, 151, 151);
  border: 1px solid rgb(151, 151, 151);
}

.list-open-count {
  border: 1px solid white;
}

#list-header {
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  min-height: 32px;
  padding: 7px 12px 7px 10px;
  cursor: pointer;
}

#list-name {
  display: inline-block;
  align-items: center; 
  white-space: nowrap; 
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
}

#item-count {
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  border-radius: 20px;
  box-shadow: 0px 0px 3px white;
  font-size: 14px;
}

</style>