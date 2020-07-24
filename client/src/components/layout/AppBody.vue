<template>
  <div class="main">
      <shopping-list 
        v-for="list in lists"
        :key="list.id" 
      />
  </div>
</template>

<script>
import ShoppingList from './ShoppingList'
import ListService from '../../api-service/ListService';

export default {
  components: {
    ShoppingList
  },
  name: "AppBody",
  data() {
    return {
    }
  },
  methods: {
    compare(a, b) {
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
        if ((Array.isArray(res.data) && res.data[0] !== 'ERROR') || !Array.isArray(res.data)) {
          var listsFromApi = res;
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
      return listsUnsorted ? listsUnsorted.sort(this.compare) : '';
    }
  }
}
</script>

<style scoped>
.main {
  width: 100vw;
  max-width: 1000px;
  overflow-y: auto;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>