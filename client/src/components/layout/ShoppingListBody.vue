<template>
  <div class="container">
    <div v-for="item in myArray"
      :item="item"
      :key="item">
      {{ item }}<shopping-list-item />
    </div>
  </div>
</template>

<script>
import ShoppingListItem from './ShoppingListItem.vue'
export default {
  components: {
    ShoppingListItem
  },
  name: "ShoppingListBody",
  data() {
    return {
      myArray: [
        'item1',  
        'item2',  
        'item3',  
        'item4',  
        'item5',  
        'item6',  
        'item7'
      ]
    }
  },
  methods: {
  },
}
</script>

<style scoped>
</style>