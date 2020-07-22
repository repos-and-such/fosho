<template>
  <div style="display: flex; margin-right:20px">
    <textarea 
      spellcheck="false" 
      :placeholder="'insert item'" 
      id="insert-item" 
      v-model="entry" 
      @keydown.enter.prevent
      @keydown.enter="insertItem"
    />
   <i class="material-icons" id="insert-button" @click="insertItem()">check</i>
  </div>
</template>

<script>
import ItemService from '../../api-service/ItemService'
export default {
  name: "InsertItem",
  data() {
    return {
      entry: ''
    }
  },
  methods: {
    insertItem() {
      if (this.entry) {
        let entryInput = this.entry;
        this.entry = '';
              console.log(this.key);

        ItemService.insertItem({name: entryInput, list_id: this.key})
          .then(res => {
            if (res.data && res.data[0] !== 'ERROR') {
              let insertedItem = Object.assign({}, res.data[0]);
              this.$store.commit('insertItem', insertedItem);
            } 
          });        
      }
    }
  },
    computed: {
    key() {
      return this.$vnode.key;
    }
  }
}
</script>
<style scoped>
#insert-item {
  margin-left: 16px;
  margin-bottom: 8px;
  padding-left: 9px;
  padding-right: 9px;
  padding-top: 6px;
  font-size: 20px;
  width: 30vw;
  height: 76px;
  border: 1px solid  rgb(184, 184, 184);
  border-radius:2px;
  resize: none;
  box-shadow: 0 0 5px rgb(184, 184, 184);
  caret-color: rgb(124, 79, 58);
  color: gray;
}
#insert-item:focus {
    outline: none !important;
    border:1px solid rgb(255, 145, 0);
    box-shadow: 0 0 5px rgb(255, 145, 0);
    background-color: rgb(255, 250, 243);
    color: rgb(124, 66, 58);
}
#insert-button {
  margin: 0px;
  padding: 0px;
  height: 34px;
  margin-left: 9px;
  color:rgb(105, 185, 98);
  cursor:pointer;
  font-size: 34px;
  border: 2px solid rgb(105, 185, 98);
  border-radius: 2px;
  box-shadow: 0 0 5px rgb(105, 185, 98);
}
#insert-button:active {
  box-shadow: none;
}

@media all and (max-width: 880px) {
#insert-item {
  margin-left: 16px;
  margin-bottom: 5px;
  font-size: 20px;
  width: 85%;
  height: 28px;
  overflow: hidden;
  }
}

</style>