<template>
  <div id="shopping-list-header" @click="handleClick">
    <div>
      {{ dateTime }}
      {{ this.list.name ? this.list.name : null }}
    </div>
    <div>
      <i class="material-icons">menu</i>
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
  methods: {
    handleClick() {
      setTimeout(() => {
        this.isOpen = !this.isOpen;
      }, 200);
    }
  },
  computed: {
    dateTime() {
      return this.list.created_on.replace('T', ' ').split('.')[0];
    }
  }
}
</script>
<style scoped>
#shopping-list-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 6px;
  padding: 8px;
  padding-left: 10px;
  padding-right: 12px;
  border: 1px solid rgb(43, 184, 113);
  box-shadow: 0 0 4px rgb(43, 184, 113);
}
</style>