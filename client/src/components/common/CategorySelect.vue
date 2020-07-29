<template>
  <div class="selection-box">
    <span id="selection-element" @click="setCategory">
      <span class="icon" id="empty"></span>
      <span class="text">Bula</span>
    </span>
    <span id="selection-element" @click="setCategory">
      <span class="icon" id="orange"></span>
      <span class="text">Bula</span>
    </span>
    <span id="selection-element" @click="setCategory">
      <span class="icon" id="amber"></span>
      <span class="text">Bula</span>
    </span>    
    <span id="selection-element" @click="setCategory">
      <span class="icon" id="lime"></span>
      <span class="text">Bula</span>
    </span>    
    <span id="selection-element" @click="setCategory">
      <span class="icon" id="teal"></span>
      <span class="text">Bula</span>
    </span>    
    <span id="selection-element" @click="setCategory">
      <span class="icon" id="blue"></span>
      <span class="text">Bula</span>
    </span>    
    <span id="selection-element" @click="setCategory">
      <span class="icon" id="indigo"></span>
      <span class="text">Bula</span>
    </span>      
  </div> 
</template>

<script>
export default {
  name: "CategorySelect",
  data() {
    return {
      tempVar: false
    }
  },
  methods: {
    setCategory() {
      this.$store.commit('setOpenCategoryMenuId', null);
    }
  },
  computed: {},
  created() {}
}
</script>


<style scoped>

.selection-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 300px;
  height: 500px;  
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 11px;
  box-shadow: 0 0 5px #00000070;
}
#selection-element {
  display: flex;
  align-items: center;
}
.icon {
  border-radius: 20px;
  margin: 8px;
}

.text {
  margin-left: 10px;
  color:rgb(83, 83, 83);
}

#empty {
  border: 20px solid rgb(255, 255, 255);
  box-shadow: 0 0 5px rgb(73, 73, 73);
}

#orange {
  border: 20px solid orange;
  box-shadow: 0 0 5px orange;

}

#amber {
  border: 20px solid orangered;
  box-shadow: 0 0 5px orangered;
}

#lime {
  border: 20px solid lime;
  box-shadow: 0 0 5px lime;
}

#teal {
  border: 20px solid teal;
  box-shadow: 0 0 5px teal;
}

#blue {
  border: 20px solid blue;
  box-shadow: 0 0 5px blue;
}

#indigo {
  border: 20px solid rgb(95, 180, 166);
  box-shadow: 0 0 5px rgb(95, 180, 166);
}

</style>