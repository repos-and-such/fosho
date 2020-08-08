<template>
  <div id="insert-item">
    <textarea
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
  width: 90%;
  padding-top: 6px;
  white-space: nowrap;
  overflow: hidden;
}

.material-icons {
  color: rgb(65, 148, 156); 
  font-size: 38px;
}

#insert-item {
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0px 0px 4px 0px;
}

@media screen and (min-width: 800px) {
#insert-item {
  justify-content: center;
  margin: 7px 0px 10px 0px;
}

.material-icons {
  font-size: 44px;
}

}

@media screen and (max-height: 700px) {
.text-field {
  zoom: 0.85;
} 
}

</style>