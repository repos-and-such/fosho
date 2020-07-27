// originally meant to be shared
<template>
  <div class="dialog">
    <div class="background" v-if="$store.state.diagOpen" @click.self="closeDiag"></div>
    <div class="confirm-diag" v-if="$store.state.diagOpen">
      <div class="header-text">{{ $store.state.diagMessage }}</div>
      <div id="input-area" v-if="diagType === 'editItem'">
        <div class="input-row" id="name-input">
          <input class="text-field" v-model="currentName" spellcheck="false" />
        </div>
      </div>
      <div style="display: flex; margin-top: 10px;">
        <div class="custom-button" v-if="diagType === 'deleteListConfirm'" @click="triggerListDelete">Delete</div>
        <div class="custom-button" v-if="diagType === 'editItem'" @click="triggerConfirmUpdate">Confirm</div>
        <div class="custom-button" id="cancel-button" @click="closeDiag">Cancel</div>
      </div>
    </div>
  </div>
</template>

<script>
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
    triggerListDelete() {
      this.$store.commit('triggerListDelete');
      this.closeDiag();
    },
    triggerConfirmUpdate() {
      let prepareEditedItem = Object.assign({}, this.$store.state.editedItem);
      prepareEditedItem.name = this.currentName;
      this.$store.commit('setEditedItem', prepareEditedItem);
      this.$store.commit('triggerConfirmUpdate');
    }
  },
  computed: {
    diagType() {
      return this.$store.state.diagType;
    },
    diagOpen() {
      return this.$store.state.diagOpen;
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
  /* font-family:"Helvetica Neue", Helvetica, Sans-serif; */
}
.background {
  position: absolute;
  left: 0px;
  background-color: black;
  opacity: 0.7;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
.confirm-diag {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 20vh;
  width: 90vw;
  max-width: 350px;
  z-index: 9999;
  padding: 10px;
  background-color:white;
  border-radius: 11px;
}
.header-text {
  color: rgb(187, 57, 42);
  margin-bottom: 10px;
  font-size: 22px;
}
.custom-button {
  width: 100px;
}
#cancel-button {
  color:rgb(187, 57, 42);
  border: 1px solid rgb(187, 57, 42);
  box-shadow: 0 0 5px rgb(187, 57, 42);
}
#cancel-button:active {
  box-shadow: none;
}
.input-row {
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-field {
  width:90%;
}
</style>
