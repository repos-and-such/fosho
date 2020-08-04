<template>
  <div id="app-body">
      <shopping-list 
        v-for="list in lists"
        :key="list.id" 
      />
  </div>
</template>

<script>
import ShoppingList from './ShoppingList'

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