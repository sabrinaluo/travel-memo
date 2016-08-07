<template>
  <tr-header></tr-header>
  <div class="container">
    <tr-map></tr-map>
    <router-view keep-alive></router-view>
  </div>
  <tr-footer></tr-footer>
</template>

<script>
  import TrHeader from './components/Header';
  import TrFooter from './components/Footer';
  import TrMap from './components/Map';
  export default {
    replace: false,
    data() {
      return { };
    },
    components: {
      TrHeader, TrFooter, TrMap
    }
  };
</script>

<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #fafafa;
  }

  a, a:link, a:visited {
    color: #000;
    text-decoration: none;
  }

  .container {
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
  }

  body > .container {
    box-shadow: 0 1px 1px #ccc;
  }
</style>
