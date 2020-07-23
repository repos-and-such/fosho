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
  },
  mutations: {
    setLoading(state, isLoading) {
      state.itemsLoading = isLoading;
    },

    // Items mutations
    setItems(state, itemsFromApi) {
      state.items = itemsFromApi;
    },
    insertItem(state, insertedItem) {
      state.items.push(insertedItem);
    },
    deleteItem(state, item) {
      let index = state.items.indexOf(item);
      state.items.splice(index, 1);
    },

    // Lists mutations
    setLists(state, listsFromApi) {
      state.lists = listsFromApi;
    },
    insertList(state, insertedList) {
      state.lists.push(insertedList);
    },
    updateList(state, lists) {
      let index = state.lists.indexOf(lists[0]);
      let tempCopy = {...lists[1]};
      state.lists.splice(index, 1, tempCopy);
    },
    deleteList(state, list) {
      let index = state.lists.indexOf(list);
      state.lists.splice(index, 1);
    },
    setOpen(state, id) {
      let index = state.lists.indexOf(state.lists.find(list => list.id === id))
      state.openListIndex = index;
    },
    setOpenListMenu(state, id) {
      state.openMenuId = id;
    },
    setEditedListId(state, id) {
      state.editedListId = id;
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
      // saaks lihtsamini?
      return state.openListIndex === state.lists.indexOf(state.lists.find(list => list.id === id));
    },
    getOpenMenuStatusById: state => id => {
      return state.openMenuId === id;
    }
  }
});