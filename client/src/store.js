import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lists: [-1],
    loadedListIds: [],
    items: [],
    openListIndex: 0,
    isLoading: false,
    editedListId: null,
    alertOpen: false,
    alertMessage: '',
    alertType: '',
    diagOpen: false,
    editedItem: {},
    openCategoryMenuId: null,
    mainMenuIsOpen: false,
    storeEntry: ''
  },
  mutations: {
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    toggleConfirmDiag(state, isOpen) {
      state.diagOpen = isOpen;
    },
    toggleMainMenu(state, isOpen) {
      state.mainMenuIsOpen = isOpen;
    },

    // Items mutations
    addItems(state, itemsFromApi) {
      state.items = state.items.concat(itemsFromApi.filter(item => 
        !state.items.some(stateItem => 
          stateItem.id === item.id)));
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
    setEditedItem(state, item) {
      state.editedItem = Object.assign({}, item);
    },
    setOpenCategoryMenuId(state, id) {
      state.openCategoryMenuId = id;
    },
    setStoreEntry(state, storeEntry) {
      state.storeEntry = storeEntry;
    },

    // Lists mutations
    setLists(state, listsFromApi) {
      state.lists = listsFromApi;
    },
    insertList(state, insertedList) {
      state.lists.push(insertedList);
    },
    addLoadedListId(state, id) {
      state.loadedListIds = state.loadedListIds.concat(id);
    },
    updateList(state, { originalList, updatedList }) {
      let index = state.lists.indexOf(originalList);
      state.lists.splice(index, 1, updatedList);
    },
    deleteOpenList(state) {
      let index = state.openListIndex;
      state.lists.splice(index, 1);
    },
    setopenListId(state, id) {
      let index = state.lists.indexOf(state.lists.find(list => list.id === id))
      state.openListIndex = index;
    },
    openTopList(state) {
      state.openListIndex = 0;
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
    getopenListId: state => {
      return state.lists[state.openListIndex].id;
    },
    getListsLength: state => {
      return state.lists.length;
    },
    getLoadedStatus: state => id => {
      return state.loadedListIds.includes(id);
    }
  }
});