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
  </div>
</template>

<script>
import ListService from '../../api-service/ListService'
export default {
  name: "ListMenu",
  methods: {
    openDeleteConfirmation() {
      if (this.items.length !== 0) {
        this.$store.commit('toggleConfirmDiag',
          {
            open: true, 
            message: 'This list contains items, are you sure you want to delete it?', 
            type: 'deleteListConfirm'
          });
      } else {
        this.deleteList();
      }
    },
    async deleteList() {      
      ListService.deleteList(this.key, await this.$auth.getTokenSilently())
        .then(res => {
          if (res.data[0] === 'SUCCESS') {
            this.$store.commit('deleteList', this.list);
            this.$store.commit('showAlert', { timeout: 1000, message: 'List Deleted', type: 'success' });
          } else {
            this.$store.commit('showGenericError');
          }
        });
    },
    copyListToClipboard() {
      console.log('copied')
      let listContent = []
      this.items.forEach(item => listContent.push(item.name));
      let dummy = document.createElement("textarea");
      document.body.appendChild(dummy);
      dummy.value = listContent.join(', ');
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
      this.$store.commit('showAlert', { timeout: 1000, message: 'List copied to Clipboard', type: 'success' });
    },
    editList() {
      this.$store.commit('setEditedListId', this.key);
    },
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
    },
    triggerListDelete() {
      return this.$store.state.triggerListDelete;
    }
    
  },
  created() {
    this.editList();
    this.$store.commit('showAlert', { timeout: 1000, message: 'List Editing Mode Active', type: 'success' });
  },
  watch: {
    triggerListDelete() {
      console.log('triggering in watch')
      this.deleteList();
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
  background-color: rgb(213, 82, 68);
}
#delete-list {
  color: rgb(255, 255, 255);
  font-size: 36px;
  margin: 10px;
}
#copy-list {
  color: white;
  font-size: 30px;
  margin: 10px;
  margin-top: 14px;
}
#close-list-menu {
  color: white;
  font-size: 34px;
  margin: 10px;
  margin-top: 12px;
}
</style>
