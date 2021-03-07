<template>
  <div id="app">
    <Header />
    <Products />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Products from "./components/Products.vue";

export default {
  name: "App",
  components: {
    Header,
    Products,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Lato:300,400,700,900");
* {
  margin: 0;
  padding: 0;
  font-family: "Lato", sans-serif;
}

.container {
  width: 1140px;
  margin: 0 auto;
}
</style>
