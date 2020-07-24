<template>
  <div id="list-menu">
    <i
      id="delete-list"
      class="material-icons"
      @click="openDeleteConfirmation"
    >delete_forever</i>
    <i
      id="copy-list"
      class="material-icons" 
      @click="copyListToClipboard"
    >content_copy</i>
    <i
      id="edit-list"
      class="material-icons" 
      @click="editList"
    >create</i>
  </div>
</template>

<script>
import ListService from '../../api-service/ListService'
export default {
  name: "ListMenu",
  methods: {
    openDeleteConfirmation() {
      if (this.items.length !== 0) {
        alert('yo');
      } else {
        this.deleteList();
      }
    },
    async deleteList() {      
      ListService.deleteList(this.key, await this.$auth.getTokenSilently())
        .then(res => {
          if ((Array.isArray(res.data) && res.data[0] !== 'ERROR') || !Array.isArray(res.data)) {
            this.$store.commit('deleteList', this.list);
            this.$store.commit('showAlert', { timeout: 1000, message: 'List Deleted', type: 'success' });
          } else {
            this.$store.commit('showGenericError');
          }
        });
    },
    editList() {
      this.$store.commit('setEditedListId', this.key);
    },
    copyListToClipboard() {
      let listContent = this.items.map(item => listContent.push(item.name));
      let dummy = document.createElement("textarea");
      document.body.appendChild(dummy);
      dummy.value = listContent.join(', ');
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
      this.$store.commit('showAlert', { timeout: 1000, message: 'List copied to Clipboard', type: 'success' });
    }
  },
  computed: {
    key() {
      return this.$vnode.key;
    },
    items() {
      return this.$store.state.items;
    },
    list() {
      return this.$store.getters.getListById(this.key);
    }
  }
}
</script>
<style scoped>
#list-menu {
  height: 60px;
  display: flex; 
  justify-content: space-around;
  align-items: center;
}
#delete-list {
  color: rgb(185, 2, 2);
  font-size: 36px;
  margin: 10px;
}
#copy-list {
  color: rgb(68, 68, 68);
  font-size: 30px;
  margin: 10px;
  margin-top: 14px;
}
#edit-list {
  color: rgb(36, 48, 128);
  font-size: 34px;
  margin: 10px;
  margin-top: 12px;
}
</style>
