<template>
  <div>
    <span class="lds-dual-ring" style="margin-right: 5px"></span>
  </div>
</template>

<script>
export default {
  name: "LoadingIcon",
  data() {
    return {
    }
  },
  methods: {
  //   setOpen() {
  //     this.$store.commit('setOpen', this.key);
  //   },
  //   toggleListMenu() {
  //     if (this.menuIsOpen) {
  //       this.$store.commit('setOpenListMenu', null);
  //     } else {
  //       this.$store.commit('setOpenListMenu', this.key);
  //     }
  //   },
  //   openNameField() {
  //     this.$store.commit('setEditedListId', this.key);
  //   }
  },
  computed: {
    // list() {
    //   return this.$store.getters.getListById(this.key);
    // },
    // dateTimeDisplay() {
    //     if (this.list.created_on) {
    //     let date = this.list.created_on.split('T')[0];
    //     let dateArray = date.split('-');
    //     let dateReversed = dateArray.reverse().join('-');  
    //     let time = this.list.created_on.split('T')[1];
    //     time = time.split('.')[0]
      
    //     return dateReversed + ' ' + time;
    //   } else {
    //     return '';
    //   }
    // },
    // key() {
    //   return this.$vnode.key;
    // },
    // isOpen() {
    //   return this.$store.getters.getOpenStatusById(this.key);
    // },
    // menuIsOpen() {
    //   return this.$store.getters.getOpenMenuStatusById(this.key);
    // },
    // itemsLoading() {
    //   return this.$store.state.itemsLoading;
    // },
    // editedListId() {
    //   return this.$store.state.editedListId;
    // }
  }
}
</script>
<style scoped>
.lds-dual-ring {
  display: inline-block;
  width: 20px;
  height: 20px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 15px;
  height: 15px;
  margin: 0px;
  border-radius: 50%;
  border: 3px solid black;
  border-color: black transparent black transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>