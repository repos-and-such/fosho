<template>
  <div class="router-sub-page">
    <page-header :text="'Getting Started'" />
    <div class="page-body">
      <div class="sub-heading">Adding a New List</div>
      <div class="sub-text">
        Push the plus symbol at top-left corner of the screen. Enter a name for the list if you want to.
      </div>
      <div class="separator-line"></div>
      <div class="sub-heading">Marking Shopping Item as Bought</div>
      <div class="sub-text">
        Click/touch shopping item name to mark it Bought. It will turn gray and move to the end of the list.
        Click/toush it again to restore To Buy status.
      </div>
      <div class="separator-line"></div>
      <div class="sub-heading">Add Shopping Items</div>
      <div class="sub-text">
        Enter shopping item and push the green plus-button or hit enter. Fo Sho will attempt to assign a category
        for handy grouping of items. To change the category, hit the button on the item.
      </div>
      <div class="separator-line"></div>
      <div class="sub-heading">Edit Shopping Items</div>
      <div class="sub-text">
        Push the pen icon on top bar to switch on Edit Mode. Use recycle-bin or pen icon
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
    </div>
    <back-button class="desktop-hide" />
  </div>
</template>

<script>
import PageHeader from '../components/layout/PageHeader';
import BackButton from '../components/layout/BackButton';

export default {
  name: "GettingStarted",
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
</style>