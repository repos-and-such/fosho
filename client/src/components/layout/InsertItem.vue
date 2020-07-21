<template>
  <div class="container">
    <textarea 
      spellcheck="false" 
      :placeholder="'insert item'" 
      id="insert-item" 
      style="display: flex"
      v-model="entry" 
      @keydown.enter.prevent
      @keydown.enter="insertItem"
    />
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
      ItemService.insertItem(this.entry).then(this.entry = '');
    }
  }
}
</script>
<style scoped>
#insert-item {
  margin-left: 16px;
  margin-bottom: 8px;
  padding-left: 9px;
  padding-top: 6px;
  font-size: 20px;
  width: 70%;
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
@media all and (max-width: 880px) {
#insert-item {
  margin-left: 16px;
  margin-bottom: 5px;
  font-size: 20px;
  width: 60%;
  height: 28px;
  overflow: hidden;
  }
}

</style>