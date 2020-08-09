
<template>
  <div id="insert-list-name">
    {{ entryLengthExceeded }}
    {{ entry.length }}
    <textarea 
      maxlength="20"
      ref="nameField"
      :class="{ 'length-exceeded': entryLengthExceeded }"
      class="text-field"
      spellcheck="false" 
      :placeholder="'list name (optional)'" 
      v-model="entry" 
      @keydown.enter="insertListName"
      @blur="handleBlur"
    />
    <button 
      class="material-icons" 
      @click="initiateInsert" 
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
      blurLock: false
    }
  },
  methods: {
    handleBlur() {
      setTimeout(() => {
        if (!this.blurLock) {
          this.closeNameField();
        }      
      }, 300);
    },
    initiateInsert() {
      this.blurLock = true;
      this.insertListName();
    },
    async insertListName() {
      if (this.entry) {
        let entryInput = this.entry;
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
                this.closeNameField();
                this.entry = '';
                this.blurLock = false;
              } else {
                this.$store.commit('showGenericError');
                this.closeNameField();
                this.entry = '';
                this.blurLock = false;
              }
            }).catch(() => {
            this.$store.commit('showGenericError');
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
    },
    entryLengthExceeded() {
      if (this.entry && this.entry.length > 20) {
        return true;
      }
      return false;
    }
  },
  created() {
    setTimeout(() => {
      this.$refs.nameField.focus();
    }, 0);
    this.blurLock = true;
    setTimeout(() => {
      this.blurLock = false;
    }, 1000);
    this.entry = this.listBeforeUpdate.name;
  }
}
</script>

<style scoped>
.text-field {
  display:flex;
  align-items: center;
  margin: 0px;
  width: 80%;
  min-width: 150px;
  max-width: 180px;
  height: 26px;
  padding-bottom: 0px;
  font-size: 18px;
  box-shadow: none;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: rgb(255, 255, 255);
}

.length-exceeded {
  color: rgb(255, 73, 73);
}

::placeholder {
  color: rgba(255, 253, 252, 0.541);
  opacity: 1;
}

#insert-list-name {
  display: flex;
  display: -webkit-flex;
  margin: 0px;
}
</style>