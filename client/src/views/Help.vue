<template>
  <div class="router-sub-page">
    <page-header :icon="'help_outline'" :text="'Getting Started'" />
    <div class="page-body">
      <div class="sub-heading">Add a New List</div>
        <div class="sub-text">
          {{ tapOrClick }} the plus symbol at top-left corner of the screen. Enter a name for the list if you want to.
        </div>
        <div class="separator-line"></div>
      <div class="sub-heading">Add Shopping Items</div>
        <div class="sub-text">
          Enter shopping item and {{ tapOrClickLower }} the green check-mark or hit enter. Fo Sho will make your
          shopping experience swifter by assigning a category and grouping items together. To change the category, {{ tapOrClickLower }} the circle on the item.
        </div>
        <div class="separator-line"></div>        
      <div class="sub-heading">Mark Shopping Items as Bought</div>
        <div class="sub-text">
          {{ tapOrClick }} shopping item name to mark it "bought". It will turn gray and move to the end of the list.
          {{ tapOrClick }} it again to restore "to buy" status.
        </div>
        <div class="separator-line"></div>
      <div class="sub-heading">Edit or Delete Shopping Items</div>
        <div class="sub-text">
          {{ tapOrClick }} and hold item name. Edit the item or {{ tapOrClickLower }} recycle bin icon to delete the item.
        </div>
        <div class="separator-line"></div>
      <div class="sub-heading">Edit Shopping List Name</div>
        <div class="sub-text">
        {{ tapOrClick }} and hold shopping list name to enable editing.
      </div>
      <span class="desktop-hide">
        <div class="separator-line"></div>        
        <div class="sub-heading">Delete a Shopping List</div>
          <div class="sub-text">
          Swipe shopping list header left or right, then confirm.
        </div>
        <div id="separator-line"/>
      </span>
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
  computed: {
    tapOrClick() {
      return 'ontouchstart' in document.documentElement ? 'Tap' : 'Click';
    },
    tapOrClickLower() {
      return 'ontouchstart' in document.documentElement ? 'tap' : 'click';
    }
  },
  mounted() {
    let inner = window.innerHeight;
    document.documentElement.style.setProperty('--vh', `${inner}px`);
    window.addEventListener('resize', () => {
      inner = window.innerHeight
      document.documentElement.style.setProperty('--vh', `${inner}px`);
    });
  }
};
</script>
<style scoped>
</style>