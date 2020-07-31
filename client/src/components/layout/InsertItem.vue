<template>
  <div id="insert-item">
    <input
      maxlength="500"
      ref="insertItem"
      spellcheck="false" 
      class="text-field" 
      v-model="entry" 
      @keydown.enter.prevent
      @keydown.enter="insertItem"
    />
    <span class="custom-button" style="border: 2px solid">
     <i class="material-icons" style="font-size: 32px;" @click="insertItem">add</i>
    </span>
  </div>
</template>

<script>
import ItemService from '../../api-service/ItemService';

export default {
  name: "InsertItem",
  data() {
    return {
      entry: ''
    }
  },
  methods: {
    async insertItem() {
      if (this.entry) {
        let entryInput = this.entry;
        this.entry = '';
        ItemService.insertItem(
          { name: entryInput, list_id: this.key }, 
          await this.$auth.getTokenSilently()
          )
            .then(res => {
              if (res.data[0] === 'SUCCESS') {
                let insertedItem = Object.assign({}, res.data[1]);
                this.$store.commit('insertItem', insertedItem);
              } else {
                this.$store.commit('showGenericError');
              }
            });        
      }
    }
  },
  computed: {
    key() {
      return this.$vnode.key;
    },
    editedListId() {
      return this.$store.state.editedListId;
    }
  }
}
</script>

<style scoped>
.text-field {
  width: 70%;
  padding-top: 6px;
}

#insert-item {
  display: flex;
  align-items: center;
  margin: 0px 0px 7px 0px;
}

</style>