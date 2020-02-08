<template>
  <div id="app">
    <DashboardPage />
  </div>
</template>

<script>
import store from "./store";
import DashboardPage from "./pages/DashboardPage.vue";

export default {
  name: "app",
  store,
  components: {
    DashboardPage
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
