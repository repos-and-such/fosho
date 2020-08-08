<template>
  <transition name="fade">
    <div v-if="text" id="user-tip">
      <span>
        <i class="material-icons">info</i>{{ text }}
      </span>    
    </div>
  </transition>
</template>

<script>
export default {
  name: "UserTip",
  props: {text: String}
}
</script>

<style scoped>
.material-icons {
  display: inline;
  font-size: 26px;
  vertical-align: sub;
  margin-right: 3px;
  cursor: default;
}
#user-tip {
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 30px 20px; 
  color: gray;
}

@media screen and (max-width: 600px) {
.material-icons {
  font-size: 20px;
}
#user-tip {
  font-size: 16px;
}
}

</style>