import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lists: [],
    items: [],
  },
  mutations: {
    setLists(state, listsFromApi) {
      state.lists = listsFromApi;
      state.lists.map(list => list.isOpen = false);
    },
    setItems(state, itemsFromApi) {
      state.items = itemsFromApi;
    },
    insertItem(state, insertedItem) {
      this.state.items.push(insertedItem);
    },
    deleteItem(state, item) {
      let index = state.items.indexOf(item);
      this.state.items.splice(index, 1);
    },
    toggleListBody(state, list) {
      let index = state.lists.indexOf(list);
      let listClone = {...list};
      listClone.isOpen = !listClone.isOpen;
      state.lists.splice(index, 1, listClone)
    }
  },
  getters: {
    getListById: state => id => {
      return state.lists.find(list => list.id === id);
    },
    getOpenStatusById: state => id => {
      return state.lists.find(list => list.id === id).isOpen;
    },
    getItemById: state => id => {
      return state.items.find(item => item.id === id);
    },
  }
});