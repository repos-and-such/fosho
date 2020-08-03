// originally meant to be shared
<template>
  <div class="dialog">
    <div class="background" v-if="$store.state.diagOpen" @click.self="closeDiag"></div>
    <div class="confirm-diag" v-if="$store.state.diagOpen">
      <div class="header-text">This list contains items. Are you sure you want to delete it?</div>
      <div style="display: flex;
 display: -webkit-flex; margin-top: 10px;">
        <div class="custom-button" @click="deleteList">Delete</div>
        <div class="custom-button" id="cancel-button" @click="closeDiag">Cancel</div>
      </div>
    </div>
  </div>
</template>

<script>
import ListService from '../../api-service/ListService';

export default {
  name: "ConfirmDiag",
  data() {
    return {
      currentName: '',
    }
  },
  methods: {
    closeDiag() {
      this.$store.commit('toggleConfirmDiag', false);
    },
    async deleteList() {  
      ListService.deleteList(this.openListId, await this.$auth.getTokenSilently())
        .then(res => {
          if (res.data[0] === 'SUCCESS') {
            this.$store.commit('deleteOpenList');
            this.$store.commit('setItems', []);
            this.$store.commit('showAlert', { timeout: 1400, message: 'List Deleted', type: 'success' });
            this.closeDiag();
          } else {
            this.$store.commit('showGenericError');
            this.closeDiag();
          }
        });
    }    
  },
  computed: {
    diagOpen() {
      return this.$store.state.diagOpen;
    },
    openListId() {
      return this.$store.getters.getOpenListId;
    }
  },
  watch: {
    diagOpen() {
      if (this.diagOpen) {
        this.currentName = this.$store.state.editedItem.name;
      } else {
        this.currentName = '';
      }
    }
  }
}
</script>

<style scoped>
.dialog {
  z-index: 9996; 
}

.background {
  position: absolute;
  left: 0px;
  background-color: black;
  opacity: 0.4;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

.confirm-diag {
  position: relative;
  align-items: center;
  text-align: center;
  top: 20vh;
  width: 80vw;
  max-width: 350px;
  z-index: 9999;
  padding: 10px;
  background-color:white;
  border-radius: 11px;
}

.header-text {
  color: rgb(187, 57, 42);
  margin: 10px 20px;
  font-size: 20px;
  font-weight: bold;
}

.custom-button {
  width: 100px;
}

.text-field {
  width:90%;
}

#cancel-button {
  color:rgb(187, 57, 42);
  border: 1px solid rgb(187, 57, 42);
  box-shadow: 0 0 5px rgb(187, 57, 42);
}

#cancel-button:active {
  box-shadow: none;
}
</style>
