<template>
  <div id="list-menu" style="display: flex; justify-content: flex-end">
    <div @click="deleteList">
      delete list
    </div>
    <div>
      copy list
    </div>
     <i
        v-if="editedListId !== key"
        class="material-icons" 
        style="display:inline-flex; padding-left: 10px; font-size: 22px;"
        @click="openNameField"
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
