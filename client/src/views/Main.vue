<template>
  <div style="display: flex; flex-direction: column; height: 95vh;">
    <app-header />
    <app-body style="overflow-y: scroll; margin-top: 50px;" />
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