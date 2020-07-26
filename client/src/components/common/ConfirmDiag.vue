<template>
  <div class="dialog">
    <div class="background" v-if="$store.state.diagOpen" @click.self="closeDiag"></div>
    <div class="confirm-diag" v-if="$store.state.diagOpen">
      <div class="header-text">{{ $store.state.diagMessage }}</div>
      <input v-if="diagType === 'editItem'"/>
      <input v-if="diagType === 'editItem'"/>
      <div style="display: flex;">
        <div class="custom-button" v-if="diagType === 'deleteListConfirm'" @click="triggerListDelete">Delete</div>
        <div class="custom-button" v-if="diagType === 'editItem'" @click="triggerEditItem">Confirm</div>
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
    }
  },
  methods: {
    closeDiag() {
      this.$store.commit('toggleConfirmDiag', false);
    },
    triggerListDelete() {
      console.log('confirm-diag: triggeringdelete')
      this.$store.commit('triggerListDelete');
      this.closeDiag();
    }
  },
  computed: {
    diagType() {
      return this.$store.state.diagType;
    }
  }
}
</script>

<style scoped>
.dialog {
  z-index: 9996; 
  font-family:"Helvetica Neue", Helvetica, Sans-serif;
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
  width: 80vw;
  max-width: 300px;
  z-index: 9999;
  padding: 20px;
  background-color:white;
  border-radius: 11px;
}

.header-text {
  color: rgb(187, 57, 42);
  margin-bottom: 20px;
  font-size: 22px;
}
.custom-button {
  width: 100px;
}
#cancel-button {
  color:rgb(187, 57, 42);
  border: 2px solid rgb(187, 57, 42);
  box-shadow: 0 0 5px rgb(187, 57, 42);
}
#cancel-button:active {
  box-shadow: none;
}

</style>
