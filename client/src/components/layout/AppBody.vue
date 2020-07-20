<template>
  <div class="container">
    <div v-for="item in myArray"
      :item="item"
      :key="item">
      {{ item }}<shopping-list />
    </div>
  </div>
</template>

<script>
import ShoppingList from './ShoppingList.vue'
export default {
  components: {
    ShoppingList
  },
  name: "AppBody",
  data() {
    return {
      myArray: [
        'list1',
        'list2',
        'list3',
        'list4',
        'list5',
        'list6',
        'list7',
        'list8',
        'list9',
        'list10'        
      ]
    }
  },
  methods: {
  },
}
</script>

<style scoped>
</style>