<template>
  <div id="app-header">
    <div class="plus-button" @click="insertList">+</div>
    <span style="display:flex;">
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
    <i class="material-icons" id="header-icon" @click="toggleMainMenu">more_vert</i>
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
      this.loadingAnimationOn();
      ListService.insertList(await this.$auth.getTokenSilently())
        .then(res => {
          if (res.data[0] === 'SUCCESS') {
            let insertedList = Object.assign({}, res.data[1]);
            this.$store.commit('insertList', insertedList);
            this.$store.commit('setEditedListId', insertedList.id);
            this.$store.commit('openTopList');
            this.loadingAnimationOff();
            this.insertAnimation();
          } else {
            this.$store.commit('showGenericError');
            this.loadingAnimationOff();
          }
        }).catch(() => {
          this.$store.commit('showGenericError');
          this.loadingAnimationOff();
        });
    },
    insertAnimation() {
      document.documentElement.style.setProperty('--plusSize', "1.4");  
      setTimeout(() => {
        document.documentElement.style.setProperty('--plusSize', "1");
      }, 250);
      setTimeout(() => {
        document.documentElement.style.setProperty('--plusSize', "1.2");  
      }, 400);
      setTimeout(() => {
        document.documentElement.style.setProperty('--plusSize', "1");
      }, 600);
    },
    loadingAnimationOn() {
      document.documentElement.style.setProperty('--plusSpin', "spin");
    },
    loadingAnimationOff() {
      document.documentElement.style.setProperty('--plusSpin', "none");
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
  align-items: center;
  justify-content: space-between;
  background-color: rgb(187, 57, 42);
  padding: 0px 4px 0px 0px;
  -webkit-tap-highlight-color: transparent;
  border-bottom: 3px solid white;
}

#header-icon {
  padding: 10px;
  color: white;
  font-size: 40px;
  cursor:pointer;
}

#profile-icon {
  border-radius: 50px;
  font-size: 40px;
  margin-right: 5px;
  box-shadow: 0 0 8px rgb(77, 23, 23);
}

#f-bomb {
  color: white;
  font-size: 48px;
  margin-top: 5px;
  margin-right: 4px;
  margin-bottom: -20px;
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