<template>
  <div>
    ABOUT PAGE
    <button @click="back">BACK</button>
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {
    back() {
      this.$router.push('/');
    }
  }
};
</script>