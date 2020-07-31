<template>
  <div id="app-header">
    <div style="display: flex; color: white">
      <i class="material-icons" id="add-icon" @click="insertList">add</i>
      <i class="material-icons" id="header-icon" @click="openHelp">help_outline</i>
    </div>
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
    <router-link to="/profile" style="display:flex; background-color: w; text-decoration: none;">
      <i class="material-icons" id="header-icon">person</i>
    </router-link>
  </div>
</template>

<script>
import ListService from '../../api-service/ListService';

export default {
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
      document.documentElement.style.setProperty('--plusSize', "1.8");  
      setTimeout(() => {
        document.documentElement.style.setProperty('--plusSize', "1");
      }, 250);
      setTimeout(() => {
        document.documentElement.style.setProperty('--plusSize', "1.3");  
      }, 400);
      setTimeout(() => {
        document.documentElement.style.setProperty('--plusSize', "1");
      }, 600);
    },
    loadingAnimationOn() {
      console.log('on')
      document.documentElement.style.setProperty('--plusSpin', "spin");
    },
    loadingAnimationOff() {
      console.log('off')

      document.documentElement.style.setProperty('--plusSpin', "none");
    },

    openHelp() {
    }
  },
  computed: {
    listsLength() {
      return this.$store.state.lists.length;
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
  padding: 0px 4px;
}

#header-icon {
  padding: 10px;
  color: white;
  font-size: 40px;
  cursor:pointer;
}

#add-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 7px;
  color: white;
  font-size: 46px;
  font-weight: bold;

  transition: 250ms ease-in-out, transform 150ms ease;
  transform: scale(1);
  transform: scale(var(--plusSize));
  cursor:pointer;
  animation-name: var(--plusSpin);
  animation-duration: 600ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
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