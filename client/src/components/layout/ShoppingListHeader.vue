<template>
  <div>
    <div
      v-if="list && !deleting"
      :class="{ 'list-open': isOpen, 'list-closed': !isOpen }"
      id="list-header"
      v-hammer:swipe.horizontal="openDeleteConfirmation"
    >
      <div class="list-text" @click="setOpen">
        <span id="createdDate-time" style="margin-right: 12px; white-space: nowrap; padding: 6px 0px;">
          {{ dateTimeDisplay }}
        </span>
        <span :class="{'list-name': key !== editedListId && list.name, 'list-name-icon': !list.name && isOpen && key !== editedListId}" @dblclick="openNameField">
          <span v-if="key !== editedListId && list.name">
            {{ list.name }}
          </span>
          <button v-if="!list.name && isOpen && key !== editedListId">
            <i class="material-icons" @click="openNameField">create</i>
          </button>
          <insert-list-name v-if="key === editedListId" :key="this.key"/>
        </span>
      </div>
      <button 
        type="delete"
        name="delete-list"
        class="mobile-hide"
        style="position: relative; right: 10px;"
        id="delete-list"
        v-if=" isOpen && !mainMenuIsOpen"
      >
        <i id="delete-list" class="material-icons" @click="openDeleteConfirmation">delete_forever</i>
      </button>
      <span v-if="itemCount > 0" :class="{ 'list-open-count': isOpen, 'list-closed-count': !isOpen }" class="item-count">
        {{ itemCount }}
       </span>
      <!-- <span v-if="isLoading && isOpen" class="lds-dual-ring" style="margin-right: 4px"></span>       -->
    </div>
    <div v-else-if="deleting" class="delete-confirmation">
      <span class="mobile-hide" style="width: 50%"></span>
      <button class="button" @click="closeDeleteConfirmation" >
        <i class="material-icons">clear</i>
        <span style="font-family: Montserrat;">Cancel</span>
      </button>
      <button class="button" @click="deleteList">
        <i class="material-icons">delete_forever</i>
        <span style="font-family: Montserrat;">Delete</span>
      </button>
    </div>
  </div>
</template>

<script>
import InsertListName from './InsertListName';
import ListService from '../../api-service/ListService';
import ItemService from '../../api-service/ItemService';
import moment from 'moment';

export default {
  name: "ShoppingListHeader",
  components: { InsertListName },
  data() {
    return {
    }
  },
  methods: {
    async setOpen() {
      if (this.isLoaded) {
        this.$store.commit('setopenListId', this.key);
      } else {
        // this.$store.commit('setLoading', true);
        ItemService.getItems( [this.list.id], await this.$auth.getTokenSilently())
          .then(res => {
            if (res[0] === 'SUCCESS') {
              var itemsFromApi = res[1];
              this.$store.commit('addItems', itemsFromApi);
              // this.$store.commit('setLoading', false);
              this.$store.commit('addLoadedListId', this.key)
            } else {
              this.$store.commit('showGenericError');
            }
          }).catch(() => {
            // this.$store.commit('setLoading', false);
            this.$store.commit('showGenericError');
          });
      }
    },
    openNameField() {
      this.$store.commit('setEditedListId', this.key);
    },
    openDeleteConfirmation() {
      setTimeout(() => {
        this.$store.commit('setDeleteConfirmationId', this.key);        
      }, 0);
    },
    closeDeleteConfirmation() {
      this.$store.commit('setDeleteConfirmationId', null);
    },
    async deleteList() {
      this.$store.commit('setLoading', true);
      ListService.deleteList(this.key, await this.$auth.getTokenSilently())        
        .then(res => {
          if (res.data[0] === 'SUCCESS') {
            this.$store.commit('deleteList', this.key);
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
        time = time.slice(0,5);

        let currentDate = moment().format('YYYY-MM-DD');
        let yesterDaysDate = moment().subtract(1, 'days').format('YYYY-MM-DD');

        let createdDate = moment.utc(this.list.created_on).format('YYYY-MM-DD');

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
    isLoaded() {
      return this.$store.getters.getLoadedStatus(this.key);

    },
    editedListId() {
      return this.$store.state.editedListId;
    },
    itemCount() {
      return this.items.length > 0 ? this.items.length : '';
    },
    items() {
      return this.$store.getters.getItemsByListId(this.key);
    },
    deleting() {
      return this.$store.state.deleteConfirmationId === this.key;
    },
    mainMenuIsOpen() {
      return this.$store.state.mainMenuIsOpen;
    }
  }
}
</script>
<style scoped>
.list-open {
  color: white;
  background-color: rgb(218, 98, 84);
  background-image: linear-gradient(160deg, rgb(134, 63, 130), rgb(96, 86, 141));

}

.list-closed {
  color: rgb(151, 151, 151);
  background-color: white;
}

.list-text {
  display: flex;
  display: -webkit-flex; 
  align-items: center; 
  flex-wrap: wrap;
  width: 100%;
  margin: 4px 12px;
}

.list-name {
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80vw;
  max-width: 340px;
}

.list-name-icon {
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80vw;
  max-width: 340px;
  width: 32px;
}

.item-count {
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  width: 22px !important;
  min-width: 22px !important;
  height: 22px;
  border-radius: 30px;
  box-shadow: 0px 0px 3px white;
  font-size: 14px;
  margin: 4px 16px 4px 0px;
}

.list-closed-count {
  color: rgb(151, 151, 151);
  border: 1px solid rgb(151, 151, 151);
}

.delete-confirmation {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0px 50px;
  background-color: rgb(116, 13, 2);
  min-height: 44px;
  font-family: Montserrat;
}

.button {
  font-size: 22px;
}

.material-icons {
  padding-right: 6px;
}

#list-header {
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  touch-action: pan-y !important;
  min-height: 32px;
  cursor: pointer;
}
</style>