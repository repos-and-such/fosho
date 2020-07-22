import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lists: [],
    items: [],
    openListIndex: 0,
    itemsLoading: false,
    editedListId: null
  },
  mutations: {
    setLists(state, listsFromApi) {
      state.lists = listsFromApi;
    },
    setItems(state, itemsFromApi) {
      state.items = itemsFromApi;
    },
    insertItem(state, insertedItem) {
      state.items.push(insertedItem);
    },
    insertList(state, insertedList) {
      state.lists.push(insertedList);
    },
    updateList(state, lists) {
      let index = state.lists.indexOf(lists[0]);
      let tempCopy = {...lists[1]};
      state.lists.splice(index, 1, tempCopy);
    },
    deleteItem(state, item) {
      let index = state.items.indexOf(item);
      state.items.splice(index, 1);
    },
    setOpen(state, id) {
      let index = state.lists.indexOf(state.lists.find(list => list.id === id))
      state.openListIndex = index;
    },
    setLoading(state, isLoading) {
      state.itemsLoading = isLoading;
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
      return state.openListIndex === state.lists.indexOf(state.lists.find(list => list.id === id));
    }
  }
});