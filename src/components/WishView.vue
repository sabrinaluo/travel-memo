<template>
  <tr-list :list="list" :type="type" keep-alive></tr-list>
</template>

<script>
  import TrList from './List';
  import Bus from '../bus';
  import Wish from '../stores/wish';
  import util from '../helper';

  export default{
    components: {
      TrList
    },
    data() {
      return {
        type: 'wish',
        list: [],
        isLoading: true
      };
    },
    methods: {
      updateMarkers() {
        Bus.$emit('markers', this.list);
      }
    },
    created() {
      Wish.get().then(data => {
        this.isLoading = false;
        this.list = data.map(util.getDetail);
        this.updateMarkers();
      });
    },
    route: {
      activate() {
        this.updateMarkers();
      }
    }
  };
</script>

<style>
</style>
