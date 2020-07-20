<template>
  <div id="shopping-list-header">
    <div style="display:flex">
      {{ dateTime }}
      <i v-if="isOpen" class="material-icons">keyboard_arrow_up</i>
      <i v-else class="material-icons">keyboard_arrow_down</i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Object,
    isOpen: Boolean
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
<style scoped>
#shopping-list-header{
  background: rgb(219, 219, 219);
  margin: 6px;
  padding: 6px;
}

</style>