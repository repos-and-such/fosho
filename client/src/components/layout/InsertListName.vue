
// confida
<template>
  <div id="insert-list-name">
    <input 
      maxlength="20"
      ref="nameField"
      class="text-field"
      spellcheck="false" 
      :placeholder="'list name (optional)'" 
      v-model="entry" 
      @keydown.enter.prevent
      @keydown.enter="insertListName"
      @blur="closeNameField"
    />
    <button 
      class="material-icons" 
      @click="insertListName" 
      style="padding: 0px 10px;"
    >
      check
    </button>
    <button 
      class="material-icons" 
      @click="closeNameField"
    >
      clear
    </button>
  </div>
</template>

<script>
import ListService from '../../api-service/ListService'
export default {
  name: "InsertList",
  data() {
    return {
      entry: '',
      input: this.$refs.email
    }
  },
  methods: {
    async insertListName() {
      if (this.entry) {
        let entryInput = this.entry;
        this.entry = '';
        ListService.updateList({
          name: entryInput, 
          list_id: this.key
          }, 
          await this.$auth.getTokenSilently())
            .then(res => {
              if (res.data[0] === 'SUCCESS') {
                let updatedList = Object.assign({}, res.data[1]);
                let originalList = this.listBeforeUpdate;
                this.$store.commit('updateList', { originalList, updatedList });
              } else {
                this.$store.commit('showGenericError');
              }
              this.closeNameField();
            }).catch(() => {
            this.$store.commit('showGenericError');
        });        
      }
    }, 
    closeNameField() {
      setTimeout(() => {
        this.$store.commit('setEditedListId', null);      
      }, 150);
    }
  },
  computed: {
    key() {
      return this.$vnode.key;
    },
    listBeforeUpdate() {
      return this.$store.getters.getListById(this.key);
    }
  },
  created() {
    setTimeout(() => {
      this.$refs.nameField.focus();
    }, 0);
  }
}
</script>

<style scoped>
.text-field {
  margin: 0px;
  width: 80%;
  min-width: 150px;
  max-width: 180px;
  height: 26px;
  font-size: 18px;
}

#insert-list-name {
  display: flex;
  display: -webkit-flex;
  margin: 0px;
}
</style>