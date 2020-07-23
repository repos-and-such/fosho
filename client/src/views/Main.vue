<template>
  <div style="display: flex; flex-direction: column; height: 95vh;">
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