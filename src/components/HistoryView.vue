<template>
  <div class="meta">
    <span class="meta-label"><i class="fa fa-train"></i> {{totalCity}} Cities</span>
    <span class="meta-label"><i class="fa fa-plane"></i> {{totalCountry}} Countries</span>
  </div>
  <tr-list :list="list" :type="type" keep-alive></tr-list>
</template>

<script>
  import TrList from './List';
  import Bus from '../bus';
  import History from '../stores/history';
  import helper from '../helper';

  export default{
    components: {
      TrList
    },
    data() {
      return {
        type: 'history',
        list: [],
        totalCity: 47,
        totalCountry: 8
      };
    },
    methods: {
      updateMarkers() {
        Bus.$emit('markers', this.list);
      }
    },
    created() {
      History.get().then(data => {
        this.list = data.list.map(helper.getDetail).reverse(); // Array.map
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
  .meta {
    border-bottom: 1px solid #eee;
    padding: 5px 0;
  }

  .meta:after {
    content: '';
    display: block;
    clear: both;
  }

  .meta-label {
    display: inline-block;
    padding: 5px 10px;
    margin-left: 5px;
    background-color: #bbb;
    border-radius: 2px;
    font-size: 12px;
  }
</style>
