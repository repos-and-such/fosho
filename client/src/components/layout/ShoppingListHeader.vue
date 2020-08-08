<template>
    <div
      v-if="list && !deleting"
      :class="{ 'list-open': isOpen, 'list-closed': !isOpen }"
      id="list-header"
      v-hammer:swipe.horizontal="openDeleteConfirmation"
    >
      <div :class="{ 'list-text-open': isOpen, 'list-text-closed': !isOpen }" id="list-text" @click="setOpen">
        <span id="createdDate-time" style="margin-right: 12px; white-space: nowrap; padding: 6px 0px;">
          {{ dateTimeDisplay }}
        </span>
        <span 
          :class="{'list-name': key !== editedListId && list.name, 'list-name-icon': !list.name && isOpen && key !== editedListId}"
          v-hammer:press="openNameField" 
          @dblclick="openNameField"
        >
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
      <span :class="{ 'list-text-open': isOpen, 'list-text-closed': !isOpen }">
        <i id="delete-list" class="material-icons" @click="openDeleteConfirmation">delete_forever</i>
      </span>
      </button>
      <span v-if="itemCount > 0" :class="{ 'list-open-count': isOpen, 'list-closed-count': !isOpen }" id="item-count">
        {{ itemCount }}
       </span>
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
        ItemService.getItems( [this.list.id], await this.$auth.getTokenSilently())
          .then(res => {
            if (res[0] === 'SUCCESS') {
              var itemsFromApi = res[1];
              this.$store.commit('addItems', itemsFromApi);
              this.$store.commit('addLoadedListId', this.key)
            } else {
              this.$store.commit('showGenericError');
            }
          }).catch(() => {
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
  color: rgb(255, 253, 252);
  background-image: linear-gradient(170deg, rgb(134, 63, 130), rgb(86, 99, 141));
  transform: skew(5deg);
  -webkit-transform: skew(5deg);
  -moz-transform: skew(5deg);
  -o-transform: skew(5deg);
  margin-right: 2px;
}

.list-closed {
  color: rgb(151, 151, 151);
  background-color: rgb(255, 253, 252);
}

.list-text-open {
  transform: skew(-5deg);
  -webkit-transform: skew(-5deg);
  -moz-transform: skew(-5deg);
  -o-transform: skew(-5deg);
}

.list-name {
  font-weight: bold;
  max-width: 340px;
  word-break: break-word;
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

.list-open-count {
  border: 1px solid white;
}

.list-closed-count {
  border: 1px solid rgb(149, 149, 149);
}

.delete-confirmation {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0px 50px;
  background-image: linear-gradient(140deg, rgb(85, 85, 85), rgb(144, 16, 2));
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
  box-shadow: 0px 0px 3px rgb(141, 134, 155);
}

#list-text {
  display: flex;
  display: -webkit-flex; 
  align-items: center; 
  flex-wrap: wrap;
  width: 100%;
  margin: 4px 12px;
}

#item-count {
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  width: 22px !important;
  min-width: 22px !important;
  height: 22px;
  border-radius: 30px;
  font-size: 14px;
  margin: 4px 16px 4px 0px;
}

@media screen and (max-width: 800px) {
  #list-header {
  transform: none;
  -webkit-transform: none;
  -moz-transform: none;
  -o-transform: none;
  margin: 0px;
  box-shadow: none;
  }
}
</style>