<template>
  <div class="router-sub-page">
    <page-header :text="'About this app'" />
    <div class="page-body">
    <div class="sub-heading">Why I made this app</div>
      <div class="sub-text">Personal use, learning and showcasing what I have learned so far</div>
      <div class="separator-line"></div>
    <div class="sub-heading">Tools and Services used</div>
      <div class="sub-text">Node, Express, Postgres, Vue, Auth0, Heroku</div>
      <div class="separator-line"></div>
    <div class="sub-heading">Check out repo and my profile!</div>
      <span class="logos">
        <a href="https://github.com/repos-and-such/fosho" class="logo-link">
        <img border="0" alt="Git Repo" src="../assets/git-hub-img.png" width="60" height="60">
        </a>
        <a href="https://www.linkedin.com/in/marten-raidmets/" class="logo-link">
          <img border="0" alt="Git Repo" src="../assets/linkedin-img.png" width="60" height="60">
        </a>
      </span>
      <div class="separator-line"></div>
      <div class="sub-heading">Legal Disclaimer</div>
      <div class="sub-text">This app is still in development. Some features are lacking, there could be bugs, 
        code is dirty at some places. Author of this app cannot be held accountable for any of the following (non-exhaustive list):
      <div style="font-size: 10px; color:grey; margin: 6px 20px 0px 20px">Loss of data, loss of sensitive information, loss of vision or hearing, 
      loss of hope etc...</div>
    </div>
    <div class="separator-line"></div>
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
        Add multiple items
      </div>
    </div>
    <back-button class="desktop-hide" />
  </div>
</template>

<script>
import BackButton from '../components/layout/BackButton';
import PageHeader from '../components/layout/PageHeader';

export default {
  name: "About",
  components: { PageHeader, BackButton },
  methods: {
    back() {
      this.$router.push('/');
    },
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
.logos {
  display: flex;
  justify-content: flex-start;
  -webkit-tap-highlight-color: transparent;
}

.logo-link {
  margin: 10px 20px;
}

@media screen and (max-width: 600px){
.logos {
  justify-content: center;
}
}
</style>
