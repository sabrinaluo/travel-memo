<template>
  <ul class="main-list">
    <tr-list-item v-for="item in list" :item="item"></tr-list-item>
  </ul>
</template>

<script>
  import TrListItem from './ListItem';
  export default{
    name: 'trList',
    props: [{
      name: 'list',
      type: Array,
      default: () => []
    }],
    components: {
      TrListItem
    }
  };
</script>

<style>
  .main-list {
    margin: 0;
    padding: 0;
  }
</style>
