<template>
  <div id="app-header">
    <button
      type="insert"
      name="insert-list"
      id="plus-button"
      @click="insertList"
    >
      <i class="material-icons" id="plus-button">add</i>
    </button>
    <span id="logo">
      <span id="f-bomb">
        f
      </span>
      <span id="o">
        o
      </span>
      <span id="osho">
        sho      
      </span>
    </span>
    <button
      type="menu"
      name="insert-list"
      id="menu-button"
      class="material-icons"
      style="font-size: 38px; margin-right: 4px;"         
      @click="toggleMainMenu"
      >
        more_vert
    </button>
    <transition name="fade-expand">
    <main-menu v-if="mainMenuIsOpen" style="position:absolute;" />
    </transition>
  </div>
</template>

<script>
import ListService from '../../api-service/ListService';
import MainMenu from '../popups/MainMenu';

export default {
  components: { MainMenu },
  name: "AppHeader",
  methods: {
    async insertList() {
      ListService.insertList(await this.$auth.getTokenSilently())
        .then(res => {
          if (res.data[0] === 'SUCCESS') {
            let insertedList = Object.assign({}, res.data[1]);
            this.$store.commit('addLoadedListId', insertedList.id);
            this.$store.commit('insertList', insertedList);
            this.$store.commit('setEditedListId', insertedList.id);
            this.$store.commit('openTopList');
          } else {
            this.$store.commit('showGenericError');
          }
        }).catch(() => {
          this.$store.commit('showGenericError');
        });
    },
    toggleMainMenu() {
      if (this.mainMenuIsOpen) {
        this.$store.commit('toggleMainMenu', false);
      } else {
        setTimeout(() => {
          this.$store.commit('toggleMainMenu', true);          
        }, 0);
      }
    }
  },
  computed: {
    listsLength() {
      return this.$store.state.lists.length;
    },
    mainMenuIsOpen() {
      return this.$store.state.mainMenuIsOpen;
    }
  },
  watch: {
    listsLength() {
      if(this.listsLength === 0) {
        this.insertList();
      }
    }
  }
}
</script>

<style scoped>
#app-header {
  display: flex;
  display: -webkit -flex;
  align-items: center;
  justify-content: space-between;
  background-image: linear-gradient(176deg, rgb(72, 0, 90), rgb(0, 69, 90));
  border-bottom: 3px solid rgb(255, 253, 252);
  min-height: 46px;
  -webkit-tap-highlight-color: transparent;
}

#plus-button {
  font-size: 42px;
  padding: 1px 4px;
  animation-name: spin;
  animation-duration: 2000ms;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
}

@keyframes spin { 100% { transform:rotate(360deg); } }

#logo {
  display: flex;
  display: -webkit -flex;
}

#f-bomb {
  color: rgb(255, 253, 252);
  font-size: 48px;
  margin: 1px 4px -17px 0px;
}

#o {
  margin-top: 4px;
  margin-right: 20px;
  color: rgb(255, 253, 252);
  font-size: 30px;
  font-weight: bold;
}

#osho {
  margin-top: 4px;
  margin-right: 1vw;
  color: rgb(255, 253, 252);
  font-size: 30px;
  font-weight: bold;
}

@media screen and (min-width: 800px) {
  #app-header {
    box-shadow: 0px -5px 5px rgb(171, 171, 171);
    margin: 0px 6px 6px 6px;
    border-bottom: none;
  }
}
</style>