<template>
  <div class="router-sub-page">
    <page-header :icon="'info_outline'" :text="'About this app'" />
    <div class="page-body">
      <div class="sub-heading">Reasons for creating this app</div>
        <div class="sub-text">Personal use, developing my skills and showcasing some of the stuff I've learned so far</div>
        <div class="separator-line"></div>
      <div class="sub-heading">Tools and Services used</div>
        <div class="sub-text">Node, Express, Postgres, Vue, Vuex Auth0, Heroku</div>
        <div class="separator-line"></div>
      <div class="sub-heading">Check out the repo and my profile!</div>
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
        <div class="sub-text">This app is still in development. Many planned features are still lacking, there could be bugs. Code needs a cleanup. 
          Author of this app cannot be held accountable for possible damages and misfortunes, including but not limited to:
        <div style="font-size: 10px; color:grey; margin: 6px 20px 0px 20px">Loss of data, loss of business, loss of profits, loss of sensitive information, 
          loss of vision or hearing, loss of hope (...this list is being updated continuously)</div>
      </div>
      <div class="separator-line"></div>
      <div class="sub-heading">Coming Soon(er or later)</div>
        <div class="sub-text">
          Linking accounts<br>
          Search<br>
          Templates<br>
          Themes, incl dark mode<br>
          Language settings<br>
          Customizing categories<br>
          Tooltips<br>
          Feedback form<br>
          Send lists to email<br>
          Add multiple items at once<br>
          Push notifications<br>
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

@media screen and (max-width: 800px){
.logos {
  justify-content: center;
}
}
</style>
