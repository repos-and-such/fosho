
// confida
<template>
  <div id="insert-list-name" style="display: flex; align-items: center; margin-right:20px; font-size: 14px">
    <input 
      maxlength="20"
      ref="nameField"
      class="text-field"
      spellcheck="false" 
      :placeholder="'insert list name'" 
      id="text-area" 
      v-model="entry" 
      @keydown.enter.prevent
      @keydown.enter="insertListName"
    />
    <i class="material-icons" @click="insertListName" style="padding: 0px 10px;">check</i>
    <i class="material-icons" @click="closeNameField">clear</i>

    <span>
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
.text-field {
  margin-left: 0px;
  width: 80%;
  height: 26px;
  font-size: 18px;
}
.custom-button {
  height: 26px;
  width: 26px;
}

</style>