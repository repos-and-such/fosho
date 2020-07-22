
// confida
<template>
  <div style="display: flex; margin-right:20px">
    <textarea 
      spellcheck="false" 
      :placeholder="'insert list name'" 
      id="insert-list-name" 
      v-model="entry" 
      @keydown.enter.prevent
      @keydown.enter="insertListName"
    />
   <i class="material-icons" id="insert-button" @click="insertListName()">check</i>
   <i class="material-icons" id="close-button" @click="closeNameField()">clear</i>
  </div>
</template>

<script>
import ListService from '../../api-service/ListService'
export default {
  name: "InsertList",
  data() {
    return {
      entry: ''
    }
  },
  methods: {
    insertListName() {
      if (this.entry) {
        let entryInput = this.entry;
        this.entry = '';
        ListService.updateList({
          name: entryInput, 
          list_id: this.key
          })
          .then(res => {
            if (res.data && res.data[0] !== 'ERROR') {
              let updatedList = Object.assign({}, res.data[0]);
              this.$store.commit('updateList', [this.listBeforeUpdate, updatedList]);
            } else {
              console.log('Database error: ' + res.data[1]
              )}
            this.closeNameField();
          }).catch(err => {
          console.log(err)
        });        
      }
    }, 
    closeNameField() {
      console.log('closing')
      this.$store.commit('setEditedListId', null);
    }
  },
    computed: {
    key() {
      return this.$vnode.key;
    },
    listBeforeUpdate() {
      return this.$store.getters.getListById(this.key);
    }
  }
}
</script>
<style scoped>
#insert-list-name {
  margin-left: 10px;
  padding-left: 9px;
  padding-right: 9px;
  padding-top: 2px;
  font-size: 16px;
  width: 30vw;
  height: 24px;
  border: 1px solid  rgb(184, 184, 184);
  border-radius:2px;
  resize: none;
  box-shadow: 0 0 5px rgb(184, 184, 184);
  caret-color: rgb(124, 79, 58);
  color: gray;
}
#insert-list:focus {
    outline: none !important;
    border:1px solid rgb(255, 145, 0);
    box-shadow: 0 0 5px rgb(255, 145, 0);
    background-color: rgb(255, 250, 243);
    color: rgb(124, 66, 58);
}
#insert-button {
  margin: 0px;
  padding: 0px;
  height: 22px;
  margin-left: 9px;
  color:rgb(105, 185, 98);
  cursor:pointer;
  font-size: 22px;
  border: 2px solid rgb(105, 185, 98);
  border-radius: 2px;
  box-shadow: 0 0 5px rgb(105, 185, 98);
}
#insert-button:active {
  box-shadow: none;
}
#close-button {
  margin: 0px;
  padding: 0px;
  height: 22px;
  margin-left: 9px;
  color:rgb(185, 2, 2);
  cursor:pointer;
  font-size: 22px;
  border: 2px solid rgb(185, 2, 2);
  border-radius: 2px;
  box-shadow: 0 0 5px rgb(185, 2, 2);
}
</style>