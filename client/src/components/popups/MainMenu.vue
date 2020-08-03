<template>
  <div class="selection-box">
    <div class="selection-element" @click="setRoute('settings')" >
      <span class="material-icons" style="color: rgb(83, 173, 169);">settings</span>
      <span class="text">Settings</span>
    </div>
    <div class="selection-element" @click="setRoute('help')">
      <span class="material-icons" style="color: rgb(171, 82, 98);">help_outline</span>
      <span class="text">Help</span>
    </div>
    <div class="selection-element" @click="setRoute('about')">
      <span class="material-icons" style="color: rgb(91, 181, 207);">info</span>
      <span class="text">About</span>
    </div>
    <div class="selection-element" @click="logout">
      <span class="material-icons" style="color: rgb(148, 71, 71);">exit_to_app</span>
      <span class="text">Log out</span>
    </div>
  </div> 
</template>

<script>
export default {
  name: "MainMenu",
  methods: {
    setRoute(route) {
      route = route.toLowerCase().replace(' ', '-');
      this.$router.push(`/${route}`)
    },
    close() {
      this.$store.commit('toggleMainMenu', false);
    },
    logout() {
      this.$router.push('/');
      this.$auth.logout();
    },
  }
}
</script>

<style scoped>
.selection-box {
  position: absolute;
  right: calc(((100% - 1000px)/2) + 1px);
  top: 61px;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #ffffff;
  box-shadow: 0 0 5px #00000070;
  padding: 10px;
  padding-right: 18px;
}

.selection-element {
  display: flex;
  display: -webkit-flex;
  justify-self: start;
  align-items: center;
  padding: 10px 6px;
  cursor: pointer;
  transition: 250ms ease-in-out, transform 150ms ease;
  color:rgb(83, 83, 83);

}

.selection-element:hover {
  transform: scale(1.03);
}

.material-icons {
  font-size: 32px;
}

.icon {
  border-radius: 20px;
  margin: 8px;
}

.text {
  margin-left: 8px;
  font-size: 26px;
}

@media screen and (max-width: 1000px){
.selection-box {
  right: 0px;
}
}

</style>