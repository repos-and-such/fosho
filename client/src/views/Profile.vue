<template>
  <div class="profile-page">
    <div id="profile-page-item" class="profile-page-header">Profile and Settings</div>
    <div class="profile-page-body">
      <div id="profile-page-item">Logged in as {{ $auth.user.email }}</div>
      <div>{{vh}}</div>
      <div id="separator-line"/>
      <div id="profile-page-item">How to use</div>
      <div id="separator-line"/>
      <div id="profile-page-item">Settings</div>
      <div id="separator-line"/>
      <div id="profile-page-item">
        <div>
          About this app
        </div>
        <div>
          <div class="sub-heading">Why I made it</div>
          <div class="sub-text">Personal use, learning and showcasing what I have learned so far</div>

          <div class="sub-heading" style="margin-top:10px;">Tools and Services used</div>
          <div class="sub-text">Node, Express, Postgres, Vue, Auth0, Heroku</div>
          <div class="sub-heading" style="margin-top:10px;">Disclaimer and Apologies</div>
          <div class="sub-text">This app is still in development. Some features are lacking, there could be bugs, 
            code is dirty at some places. Author of this app cannot be held accountable for any of the following (non-exhaustive list):
          <div style="font-size: 10px; color:grey; margin: 6px 20px 0px 20px">Loss of data, loss of sensitive information, loss of vision or hearing, 
            loss of hope etc...</div>
          

          </div>
          <div class="sub-heading" style="margin-top:10px;">Coming Soon(er or later)</div>
          <div class="sub-text">
            Classification of items into categories<br>
            Language settings<br>
            Dark mode<br>
            Tooltips<br>
            Facebook Login<br>
            Push notifications<br>
            Feedback form<br>
            Send lists to email<br>
            Add multiple items</div>
        </div>
      </div>
      <div id="admin-section" v-if="development">
        <div id="separator-line"/>
        <div id="profile-page-item">
          admin
        </div>
        <div style="margin: 20px 0px">
          Enter item-category bindings
        </div>
        <div style="margin: 20px 0px">
          Category
        </div>
        <textarea class="text-field" style="height: 30px; width: 80vw;" v-model="category" />
        <div style="margin: 20px 0px;">
          Item(s)
        </div>
        <textarea 
          class="text-field" 
          v-model="items"
          @keyup.enter="submit" 
          />
        <button 
          class="custom-button" 
          style="width:140px; height: 60px; margin: 40px;" 
          @click="submit">Submit</button>
      </div>
    </div>
    <div id="profile-page-item" class="profile-page-footer">
      <span @click.prevent="logout" class="profile-button">
        <i class="material-icons" style="font-size: 34px; margin-right: 8px;">exit_to_app</i>
        <span>Log out</span>
      </span>
      <span @click.prevent="back" class="profile-button">
        <i class="material-icons" id="settings" style="font-size:30px;">arrow_back_ios</i>
        <span class="mobile-hide">back</span>
      </span>
    </div>
    <div>
    </div>
  </div>
</template>
<script>
import ItemService from '../api-service/ItemService';

export default {
  name: "Profile",
  data() {
    return {
      category: '',
      items: '',
      vh: 0
    }
  },
  methods: {
    back() {
      this.$router.push('/');
    },
    logout() {
      this.$router.push('/');
      this.$auth.logout();
    },
    async submit() {
      ItemService.bindCategory(
        { category: this.category, items: this.items }, 
        await this.$auth.getTokenSilently()
        )
          .then(() => {
            this.items = '';
          });        
    }
  },
  computed: {
    development() {
      return process.env.NODE_ENV === 'development';
    }
  },
  created() {
    this.vh = window.innerHeight;
    document.documentElement.style.setProperty('--vh', `${this.vh}px`);
  }
};
</script>
<style scoped>
.profile-page {
  display:flex; 
  flex-direction: column;
  height: 100vh; 
  height: calc(var(--vh, 1vh)); 
  width: 100vw;
  font-size: 20px;
  max-width: 1000px;
}
.profile-page-header {
  display: flex;
  justify-content: center;
  background-color: rgb(209, 80, 80);
  color: white;
  width: 100vw;
  font-size: 28px;
  height: 5%;
}
.profile-page-body {
  padding: 0px 20px;
  color: rgb(80, 80, 80);
  overflow: auto;
  min-height: 90%;
}
.profile-page-footer {
  display: flex;
  justify-content: space-around;
  background-color: rgb(209, 80, 80);
  color: white;
  height: 5%;
  width: 100vw;
  padding: 30px;
  font-size: 28px;
}
#profile-page-item {
  padding: 10px 0px;
  font-weight: bold;
}
.sub-heading {
  margin: 20px 0px 10px 0px;
  font-weight: normal;
}
.sub-text {
  margin: 0px 0px 20px 10px;
  font-size: 18px;
  font-weight: normal;
}
.profile-button {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.text-field {
  width: 80vw; 
  height: 60vh; 
  border-radius: 20px; 
  word-wrap: break-word;
  overflow: auto;
}
</style>
