<template>
  <div id="app-header">
    <button
      type="insert"
      name="insert-list"
      id="plus-button"
      @click="insertList"
    >
      +
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
      style="font-size: 38px"         
      @click="toggleMainMenu"
      >
        more_vert
    </button>
    <main-menu v-if="mainMenuIsOpen" style="position:absolute;" />
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
            this.$store.commit('setItems', [])
            let insertedList = Object.assign({}, res.data[1]);
            insertedList.item_count = 0;
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
  background-color: rgb(187, 57, 42);
  padding: 0px 4px 0px 0px;
  -webkit-tap-highlight-color: transparent;
  border-bottom: 3px solid white;
}

#plus-button {
  margin-left: 10px;
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
  color: white;
  font-size: 48px;
  margin: 5px 4px -30px 0px;
}

#o {
  margin-top: 4px;
  margin-right: 20px;
  color: white;
  font-size: 30px;
  font-weight: bold;
}

#osho {
  margin-top: 4px;
  margin-right: 1vw;
  color: white;
  font-size: 30px;
  font-weight: bold;
}
</style>