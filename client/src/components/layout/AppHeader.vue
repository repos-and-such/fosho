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
    <div style="display: flex; color: white">
      <i class="material-icons" id="header-icon" @click="openHelp">help_outline</i>
      <router-link to="/profile" style="display:flex; background-color: w; text-decoration: none;">
      <i class="material-icons" id="header-icon">person</i>
    </router-link>

    </div>
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