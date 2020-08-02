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
    <button
      type="insert"
      class="material-icons" 
      id="check-button" 
      style="color: rgb(105, 185, 98); font-size: 38px;" 
      @click="insertItem"
    >
      check
    </button>
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
        let entryInput = this.entry.trim();
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
    },
    storeEntry() {
      return this.$store.state.storeEntry;
    }
  },
  watch: {
    storeEntry() {
      this.entry = this.storeEntry;
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
 display: -webkit-flex;
  align-items: center;
  margin: 0px 0px 7px 0px;
}

</style>