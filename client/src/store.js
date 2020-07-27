import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lists: [],
    items: [],
    openListIndex: 0,
    openMenuId: null,
    itemsLoading: false,
    editedListId: null,
    alertOpen: false,
    alertMessage: '',
    alertType: '',
    diagOpen: false,
    diagType: '',
    diagMessage: 'tests',
    triggerListDelete: 0,
    editedItem: {},
    triggerConfirmUpdate: 0,
    openCategoryMenuId: null
  },
  mutations: {
    setLoading(state, isLoading) {
      state.itemsLoading = isLoading;
    },
    toggleConfirmDiag(state, params) {
      state.diagOpen = params.open;
      state.diagMessage = params.message;
      state.diagType = params.type;
    },

    // Items mutations
    setItems(state, itemsFromApi) {
      state.items = itemsFromApi;
    },
    insertItem(state, insertedItem) {
      state.items.push(insertedItem);
    },
    updateItem(state, { originalItem, updatedItem }) {
      let index = state.items.indexOf(originalItem);
      state.items.splice(index, 1, updatedItem);
    },
    deleteItem(state, item) {
      let index = state.items.indexOf(item);
      state.items.splice(index, 1);
    },    
    triggerConfirmUpdate(state) {
      state.triggerConfirmUpdate++;
    },
    setEditedItem(state, item) {
      state.editedItem = Object.assign({}, item);
    },
    setOpenCategoryMenuId(state, id) {
      state.openCategoryMenuId = id;

    },

    // Lists mutations
    setLists(state, listsFromApi) {
      state.lists = listsFromApi;
    },
    insertList(state, insertedList) {
      state.lists.push(insertedList);
    },
    updateList(state, { originalList, updatedList }) {
      let index = state.lists.indexOf(originalList);
      state.lists.splice(index, 1, updatedList);
    },
    deleteList(state, list) {
      let index = state.lists.indexOf(list);
      state.lists.splice(index, 1);
    },
    triggerListDelete(state) {
      state.triggerListDelete++;
    }, 
    setOpen(state, id) {
      let index = state.lists.indexOf(state.lists.find(list => list.id === id))
      state.openListIndex = index;
    },
    openTopList(state) {
      state.openListIndex = 0;
    },
    setOpenListMenu(state, id) {
      state.openMenuId = id;
    },
    setEditedListId(state, id) {
      state.editedListId = id;
    },
    showAlert(state, { timeout, message, type }) {
      state.alertMessage = message;
      state.alertOpen = true;
      state.alertType = type;
      setTimeout(() => {
        state.alertOpen = false;
      }, timeout);
    },
    showGenericError(state) {
      state.alertMessage = 'Oops, something went wrong :(';
      state.alertOpen = true;
      state.alertType = 'error';
      setTimeout(() => {
        state.alertOpen = false;
      }, 2000);
    }
  },
  getters: {
    getListById: state => id => {
      return state.lists.find(list => list.id === id);
    },
    getItemById: state => id => {
      return state.items.find(item => item.id === id);
    },
    getOpenStatusById: state => id => {
      return state.openListIndex === state.lists.indexOf(state.lists.find(list => list.id === id));
    },
    getOpenMenuStatusById: state => id => {
      return state.openMenuId === id;
    }
  }
});