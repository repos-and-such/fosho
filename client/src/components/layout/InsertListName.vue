
// confida
<template>
  <div id="insert-list-name" style="display: flex;
display: -webkit -flex; align-items: center; margin-right:20px; font-size: 14px">
    <input 
      maxlength="20"
      ref="nameField"
      class="text-field"
      spellcheck="false" 
      :placeholder="'enter list name'" 
      v-model="entry" 
      @keydown.enter.prevent
      @keydown.enter="insertListName"
      @blur="closeNameField"
    />
    <button 
      class="material-icons" 
      @click="insertListName" 
      style="padding: 0px 10px;"
    >
      check
    </button>
    <button 
      class="material-icons" 
      @click="closeNameField"
    >
      clear
    </button>
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
    setTimeout(() => {
      this.$refs.nameField.focus();
    }, 0);
  }
}
</script>

<style scoped>
.text-field {
  margin: 0px;
  width: 80%;
  height: 26px;
  font-size: 18px;
}

.custom-button {
  height: 26px;
  width: 26px;
}

#insert-list-name {
  margin: 0px;
}
</style>