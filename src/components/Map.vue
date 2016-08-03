<template>
  <map :center.sync="center"
       :zoom.sync="zoom"
       :options="{streetViewControl:false, mapTypeControl:false, minZoom:1, maxZoom:7}">
    <marker v-for="m in markers" :position.sync="m.position"></marker>
  </map>
</template>

<script>
  import {load, Map, Marker} from 'vue-google-maps';
  import Bus from '../bus';

  load('AIzaSyDqlKEyzsqd7NurGJN75VEOoJjRH3hMLAg');

  export default{
    name: 'trMap',
    props: [{
      name: 'zoom',
      type: Number,
      default: 7
    }, {
      name: 'markers',
      type: Array,
      default: () => []
    }, {
      name: 'center',
      type: Object,
      default: () => ({lat: 40, lng: 116.5}) // Beijing
    }],
    components: {
      Map, Marker
    },
    methods: {

    },
    ready() {
      Bus.$on('markers', markers => {
        this.markers = markers;
      });
    }
  };
</script>

<style>
  map {
    height: 450px;
    width: 100%;
    display: block;
    margin-top: 44px;
    margin-left: 0;
    margin-right: 0;
    padding: 0;
  }
</style>
