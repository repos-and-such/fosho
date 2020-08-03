<template>
  <div id="about-page">
    <page-header :title="'About this app'"/>
    <div id="about-page-body">
      <div id="about-page-item">
        <div>
          <div class="sub-heading">Why I made this app</div>
            <div class="sub-text">Personal use, learning and showcasing what I have learned so far</div>
            <div class="separator-line"></div>
          <div class="sub-heading">Tools and Services used</div>
            <div class="sub-text">Node, Express, Postgres, Vue, Auth0, Heroku</div>
            <div class="separator-line"></div>
          <div class="sub-heading">Check out the code and my profile!</div>
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
      </div>
    </div>
    <page-footer :submitButton="false"/>
    <div>
    </div>
  </div>
</template>

<script>
import PageFooter from '../components/layout/PageFooter';
import PageHeader from '../components/layout/PageHeader';

export default {
  name: "About",
  components: { PageFooter, PageHeader },
  methods: {
    back() {
      this.$router.push('/');
    },
  },
  computed: {
    development() {
      return process.env.NODE_ENV === 'development';
    },
        items() {
      let unsortedItems = this.$store.state.items;
      return unsortedItems.sort(this.compareItems);
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
.sub-heading {
  margin: 20px 0px 10px 0px;
  font-weight: normal;
}

.sub-text {
  margin: 0px 0px 20px 10px;
  font-size: 18px;
  font-weight: normal;
}

.logos {
  display: flex;
  justify-content: flex-start;
}

.logo-link {
  margin: 10px 20px;
}

#about-page {
  display:flex; 
  flex-direction: column;
  height: var(--vh, 1vh);
  font-size: 20px;
  max-width: 1000px;
}

#about-page-body {
  padding: 0px 20px;
  color: rgb(80, 80, 80);
  overflow: auto;
  height: 86%;
}

#about-page-item {
  padding: 10px 0px;
  font-weight: bold;
}

@media screen and (max-width: 600px){
.logos {
  justify-content: center;
}
}



</style>
