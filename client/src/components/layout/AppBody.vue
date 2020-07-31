<template>
  <div id="app-body">
    <shopping-list 
      v-for="list in lists"
      :key="list.id" 
    />
    <div class="welcome-message" v-if="this.lists.length === 0">
      <div id="welcome-message-item" style="flex-wrap: wrap; display: flex; justify-content: center; padding: 70px 0px 50px 0px;">
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
        Enter item name and push plus button or hit Enter. Fo Sho will attempt to assign a category
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
    </div>
  </div>
</template>

<script>
import ShoppingList from './ShoppingList'
import ListService from '../../api-service/ListService';

export default {
  components: {
    ShoppingList,
  },
  name: "AppBody",
  data() {
    return {
    }
  },
  methods: {
    compareLists(a, b) {
      const timeA = a.created_on;
      const timeB = b.created_on;

      let comparison = 0;
      if (timeA > timeB) {
        comparison = -1;
      } else if (timeA < timeB) {
        comparison = 1;
      }
      return comparison;
    }
  },
  async created() {
    ListService.getLists(await this.$auth.getTokenSilently())
      .then(res => {
        if (res[0] === 'SUCCESS') {
          var listsFromApi = res[1];
          this.$store.commit('setLists', listsFromApi);
          this.$store.commit('setLoading', false);
        } else {
          this.$store.commit('showGenericError');
        }
      }).catch(() => {
        this.$store.commit('setLoading', false);
      });
  },
  computed: {
    lists() {
      let listsUnsorted = this.$store.state.lists;
      return listsUnsorted ? listsUnsorted.sort(this.compareLists) : '';
    }
  }
}
</script>

<style scoped>
.sub-text {
  margin: 0px 0px 8px 10px;
  font-size: 18px;
  font-weight: normal;
}

.welcome-message {
  display:flex; 
  flex-direction: column; 
  font-size: 20px;
  padding: 0px 20px;
  color: rgb(80, 80, 80);
  overflow: auto;
}

.sub-heading {
  margin: 10px 0px 10px 0px;
  font-weight: normal;
  color: rgb(209, 80, 80);
}

#app-body {
  width: 100vw;
  max-width: 1000px;
  overflow-y: auto;
}

#welcome-message-item {
  padding: 20px 0px;
  font-weight: bold;
  word-wrap: none;
}

</style>