<template>
  <div id="list-menu">
    <i
      id="delete-list"
      class="material-icons"
      @click="deleteList"
    >delete_forever</i>
    <i
      id="copy-list"
      class="material-icons" 
      @click="copyList"
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
    async deleteList() {
      console.log('deleted key:' + this.key)
      ListService.deleteList(this.key, await this.$auth.getTokenSilently())
        .then(res => {
          if (res.data && res.data[0] !== 'ERROR') {
            this.$store.commit('deleteList', this.list);
          } 
        });
    }
  },
  computed: {
    list() {
      return this.$store.getters.getListById(this.key);
    },
    key() {
      return this.$vnode.key;
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
