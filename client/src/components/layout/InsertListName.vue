
// confida
<template>
  <div id="insert-list-name" style="display: flex; align-items: center; margin-right:20px; font-size: 14px">
    <input 
      maxlength="20"
      ref="nameField"
      @blur="closeNameField"
      spellcheck="false" 
      :placeholder="'insert list name (optional)'" 
      id="text-area" 
      v-model="entry" 
      @keydown.enter.prevent
      @keydown.enter="insertListName"
    />
    <span>
    </span>
    <span class="custom-button">
      <i class="material-icons" @click="insertListName">check</i>
    </span>
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
      console.log('inserting')
      if (this.entry) {
        let entryInput = this.entry;
        this.entry = '';
        ListService.updateList({
          name: entryInput, 
          list_id: this.key
          }, 
          await this.$auth.getTokenSilently())
            .then(res => {
              if (Array.isArray(res.data) && res.data[0] !== 'ERROR') {
                let updatedList = Object.assign({}, res.data[0]);
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
    // this.$refs.nameField.focus();
    setTimeout(() => {
      this.$refs.nameField.focus();
    }, 0);
  }
}
</script>
<style scoped>
#insert-list-name {
  margin: 0px;
}
#text-area {
  margin-left: 4px;
  padding-left: 9px;
  padding-right: 9px;
  padding-top: 2px;
  font-size: 20px;
  width: 100%;
  height: 30px;
  border: 1px solid  rgb(184, 184, 184);
  border-radius:2px;
  resize: none;
  box-shadow: 0 0 5px rgb(184, 184, 184);
  caret-color: rgb(124, 79, 58);
  color: gray;
  font-family:"Helvetica Neue", Helvetica, Sans-serif;
}
#text-area:focus {
    outline: none !important;
    background-color: rgb(255, 250, 243);
    color: rgb(124, 66, 58);
}
.custom-button {
  height: 20px;
  width: 20px;
}
</style>