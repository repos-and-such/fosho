
// confida
<template>
  <div id="insert-list-name" style="display: flex; align-items: center; margin-right:20px">
    <textarea 
      spellcheck="false" 
      :placeholder="'list name'" 
      id="text-area" 
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
              if (res.data && res.data[0] !== 'ERROR') {
                let updatedList = Object.assign({}, res.data[0]);
                this.$store.commit('updateList', [this.listBeforeUpdate, updatedList]);
              } else {
                console.log(res.data[1]
                )}
              this.closeNameField();
            }).catch(err => {
          console.log(err)
        });        
      }
    }, 
    closeNameField() {
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
  margin: 0px;
}
#text-area {
  margin-left: 2px;
  padding-left: 9px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-right: 9px;
  padding-top: 5px;
  font-size: 20px;
  width: 30vw;
  height: 28px;
  resize: none;
  caret-color: rgb(124, 79, 58);
  color: gray;
}
#text-area:focus {
    outline: none !important;
    background-color: rgb(255, 250, 243);
    color: rgb(124, 66, 58);
}
#insert-button {
  margin: 0px;
  padding: 0px;
  height: 28px;
  margin-left: 9px;
  color:rgb(105, 185, 98);
  cursor:pointer;
  font-size: 28px;
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
  height: 28px;
  margin-left: 9px;
  color:rgb(185, 2, 2);
  cursor:pointer;
  font-size: 28px;
  border: 2px solid rgb(185, 2, 2);
  border-radius: 2px;
  box-shadow: 0 0 5px rgb(185, 2, 2);
}
#close-button:active {
  box-shadow: none;
}
</style>