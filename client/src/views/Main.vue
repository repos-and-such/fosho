<template>
  <div style="display: flex;
 display: -webkit-flex; flex-direction: column; height: 100vh;">
    <app-header />
    <app-body />
  </div>
</template>

<script>
import AppHeader from "../components/layout/AppHeader";
import AppBody from "../components/layout/AppBody";

export default {
  name: "Main",
  components: {
    AppHeader,
    AppBody
  },
  methods: {
  },
};
</script>
<style scoped>
</style>