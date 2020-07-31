<template>
  <div class="selection-box">
    <div 
      v-for="category in categories" 
      :key="category"
      @click="setCategory(category)"
      class="selection-element"
    >
      <div class="icon" :id="category" />
      <span class="text">
        {{ category.charAt(0).toUpperCase() + category.slice(1).replace('-and-', '/').replace('-', ' ') }}
      </span>
    </div>
  </div> 
</template>

<script>
import ItemService from '../../api-service/ItemService';

export default {
  name: "CategorySelect",
  props: { item: Object },
  data() {
    return {
      categories: ['none', 'fruit', 'vegetable', 'bread-and-bakery', 'meat', 'grains-and-dry', 'dairy', 'drink', 'personal-care', 'household']
    }
  },
  methods: {
    async setCategory(category) {
      ItemService.bindCategory(
        { category: category, items: this.item.name }, 
        await this.$auth.getTokenSilently()
        )
          .then((res) => {
            this.$store.commit('setOpenCategoryMenuId', null);
            if (res.data[0] === 'SUCCESS') {
              let originalItem = this.item;
              let updatedItem = Object.assign({}, this.item);
              updatedItem.category = res.data[1][0].name;
              this.$store.commit('updateItem', { originalItem, updatedItem });
            } else {
              this.$store.commit('showGenericError');
            }

          });   
    }
  }
}
</script>

<style scoped>
.selection-box {
  position: -webkit-sticky;
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #ffffff;
  border-radius: 17px;
  box-shadow: 0 0 5px #00000070;
  padding: 10px;
  padding-right: 18px;
}

.selection-element {
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 250ms ease-in-out, transform 150ms ease;
}

.selection-element:hover {
  transform: scale(1.05);
}

.icon {
  border-radius: 20px;
  margin: 8px;
}

.text {
  margin-left: 8px;
  color:rgb(83, 83, 83);
}

#none {
  border: 12px solid rgb(235, 235, 235);
  box-shadow: 0 0 5px rgb(185, 183, 183);
}

#fruit {
  border: 12px solid rgba(255, 115, 0, 0.3);
  box-shadow: 0 0 5px rgb(255, 115, 0);
}

#vegetable {
  border: 12px solid rgba(90, 209, 54, 0.3);
  box-shadow: 0 0 5px rgb(90, 209, 54);
}

#drink {
  border: 12px solid rgba(207, 209, 54, 0.3);
  box-shadow: 0 0 5px rgb(207, 209, 54);
}

#bread-and-bakery {
  border: 12px solid rgba(177, 78, 17, 0.3);
  box-shadow: 0 0 5px rgb(196, 101, 42);
}

#meat {
  border: 12px solid rgba(255, 0, 0, 0.3);
  box-shadow: 0 0 5px rgb(255, 0, 0);
}

#dairy {
  border: 12px solid rgb(255, 255, 255);
  box-shadow: 0 0 5px rgb(165, 164, 164);
}

#grains-and-dry {
  border: 12px solid rgba(255, 187, 0, 0.3);
  box-shadow: 0 0 5px rgb(255, 187, 0);
}

#drink {
  border: 12px solid rgba(207, 209, 54, 0.3);
  box-shadow: 0 0 5px rgb(207, 209, 54);
}

#personal-care {
  border: 12px solid rgba(130, 105, 185, 0.3);
  box-shadow: 0 0 5px rgb(140, 104, 218);
}

#household {
  border: 12px solid rgba(71, 202, 180, 0.3);
  box-shadow: 0 0 5px rgb(95, 180, 166);
}

</style>