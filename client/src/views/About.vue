<template>
  <div id="about-page">
    <div class="profile-page-bar" id="profile-page-header">About this App</div>
    <div id="profile-page-body">
      <div id="profilte-page-item">
        <div>
          <div class="sub-heading">Why I made this app</div>
          <div class="sub-text">Personal use, learning and showcasing what I have learned so far</div>

          <div class="sub-heading">Tools and Services used</div>
          <div class="sub-text">Node, Express, Postgres, Vue, Auth0, Heroku</div>
          <div class="sub-heading">Disclaimer and Apologies</div>
          <div class="sub-text">This app is still in development. Some features are lacking, there could be bugs, 
            code is dirty at some places. Author of this app cannot be held accountable for any of the following (non-exhaustive list):
          <div style="font-size: 10px; color:grey; margin: 6px 20px 0px 20px">Loss of data, loss of sensitive information, loss of vision or hearing, 
            loss of hope etc...</div>
          

          </div>
          <div class="sub-heading">Coming Soon(er or later)</div>
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
    </div>
    <div class="profile-page-bar" id="profile-page-footer">
      <span @click.prevent="back" class="profile-button">
        <i class="material-icons">arrow_back_ios</i>
        <span class="mobile-hide">Back</span>
      </span>
    </div>
    <div>
    </div>
  </div>
</template>
<script>

export default {
  name: "About",
  methods: {
    back() {
      this.$router.push('/');
    },
  },
  computed: {
    development() {
      return process.env.NODE_ENV === 'development';
    }
  },
  mounted() {
    let inner = window.innerHeight;
    document.documentElement.style.setProperty('--vh', `${inner}px`);
    window.addEventListener('resize', () => {
      inner = window.innerHeight
      document.documentElement.style.setProperty('--vh', `${inner}px`);
    });
  },
};
</script>
<style scoped>
.profile-page-bar {
  display: flex;
  align-items: center;
  background-color: rgb(187, 57, 42);
  color: white;
  width: 100%;
  font-size: 28px;
  height: 7%;
}

.profile-button {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 20px;
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

#about-page {
  display:flex; 
  flex-direction: column;
  height: var(--vh, 1vh);
  font-size: 20px;
  max-width: 1000px;
}

#profile-page-header {
  justify-content: center;
}

#profile-page-body {
  padding: 0px 20px;
  color: rgb(80, 80, 80);
  overflow: auto;
  height: 86%;
}

#profile-page-footer {
  justify-content: space-between;
}

#profile-page-item {
  padding: 10px 0px;
  font-weight: bold;
}

#category {
  height: 34px;
  border-radius: 30px;
}

#submit-button {
  width: 132px;
  height: 40px;
  margin: 18px 0px;
}


</style>
