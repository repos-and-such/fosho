<template>
  <div id="getting-started">
    <page-header :title="'Getting Started'"/>
    <div id="profile-page-body">
      Welcome to <span style="color: rgb(209, 80, 80); padding: 0px 7px;">fo sho</span> shopping list app!
    </div>
    <div id="welcome-message-item">Getting Started</div>
    <div class="sub-heading">Add New List</div>
    <div class="sub-text">
      Push the plus sign in top-left corner of the screen. Enter a name for the list (optional)
    </div>
    <div class="sub-heading">Mark Shopping Item as Bought</div>
    <div class="sub-text">
      Click/touch shopping item name to mark it Bought. It will turn gray and move to the end of the list.
      Click/toush it again to restore To Buy status.
    </div>
    <div class="sub-heading">Add Shopping Items</div>
    <div class="sub-text">
      Enter shopping item and push the green plus-button or hit enter. Fo Sho will attempt to assign a category
      for handy grouping of items. To change the category, hit the button on the item.
    </div>
    <div class="sub-heading">Edit Shopping Items</div>
    <div class="sub-text">
      Push the pen icon on the shopping list header to switch on Edit Mode. Use recycle-bin or pen icon
      to delete or edit item.
    </div>
    <div class="sub-heading">Delete or Copy Shopping List</div>
    <div class="sub-text">
      Push the pen icon on the shopping list header to switch on Edit Mode. Use recycle-bin or pen icon
      to delete or edit item.
    </div>
    <div id="separator-line"/>
    <div id="welcome-message-item">
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
    <page-footer :submitButton="false"/>
    <div>
    </div>
  </div>
</template>

<script>
import PageFooter from '../components/layout/PageFooter';
import PageHeader from '../components/layout/PageHeader';

export default {
  name: "Getting Started",
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

#getting-started {
  display:flex; 
  flex-direction: column;
  height: var(--vh, 1vh);
  font-size: 20px;
  max-width: 1000px;
}

#profile-page-body {
  padding: 0px 20px;
  color: rgb(80, 80, 80);
  overflow: auto;
  height: 86%;
}

#profile-page-item {
  padding: 10px 0px;
  font-weight: bold;
}

#category {
  height: 34px;
  border-radius: 30px;
}
</style>