<template>
  <div id="shopping-list-header">
    <div>
      {{ dateTime }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Object
  },
  name: "ShoppingListHeader",
  data() {
    return {
    }
  },
  computed: {
    dateTime() {
      return this.list.created_on.replace('T', ' ').split('.')[0] + ' ' + (this.list.name ? this.list.name : '');
    }
  }
}
</script>