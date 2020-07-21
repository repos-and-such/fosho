<template>
  <div id="shopping-list-header" @click="toggleListBody">
    <div>
      {{ this.list.created_on }}
      {{ this.list.name ? this.list.name : null }}
    </div>
    <div>
      <i class="material-icons">menu</i>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingListHeader",
  data() {
    return {
    }
  },
  methods: {
    toggleListBody() {
      // console.log(this.list);
      this.$store.commit('toggleListBody', this.list);
      // this.$store.commit('changeTestArray', 'issand');

    }
  },
  computed: {
    list() {
      return this.$store.getters.getListById(this.key);
    },
    // dateTime() {
    //   if (this.list.created_on) {
    //     return this.list.created_on.replace('T', ' ').split('.')[0];
    //   }
    // },
    key() {
      return this.$vnode.key;
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