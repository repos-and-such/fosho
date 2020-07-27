<template>
  <div class="insert-item">
    <textarea
      ref="insertItem"
      spellcheck="false" 
      class="text-field" 
      v-model="entry" 
      @keydown.enter.prevent
      @keydown.enter="insertItem"
    />
    <span class="custom-button">
     <i class="material-icons" @click="insertItem">add</i>
    </span>
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
  },
  created() {
    setTimeout(() => {
      if (!this.editedListId) {
        this.$refs.insertItem.focus();
      }
    }, 0);
  }
}
</script>
<style scoped>
.insert-item {
  display: flex;
  align-items: center;
  margin-right:10px;
  margin: 10px 0px;
}
.text-field {
  width: 85%;
}
.text-field:focus {
  border: 1px solid rgb(105, 185, 98);
  box-shadow: 0 0 5px rgb(105, 185, 98); 
}
</style>