<template>
  <div id="shopping-item">
    <div>
      {{ itemName }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemName: String
  },
  name: "ShoppingItem"
}
</script>