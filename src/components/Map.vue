<template>
  <map :center.sync="center"
       :zoom.sync="zoom"
       :options="{streetViewControl:false, mapTypeControl:false, minZoom:1, maxZoom:7}"
       v-ref:map-instance>
    <marker v-for="m in markers"
            :position.sync="m.location"
            :icon.sync="icon">
    </marker>
  </map>
</template>

<script>
  import {load, Map, Marker} from 'vue-google-maps';
  import Bus from '../bus';
  import util from '../helper';

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
    data() {
      return {
        icon: {
          url: '//maps.gstatic.com/mapfiles/ridefinder-images/mm_20_orange.png'
        }
      };
    },
    methods: {
      fitBounds() {
        var map = this.$refs.mapInstance;
        map.mapCreated.then(() => {
          var bounds = util.getBounds(this.markers);
          map.fitBounds(bounds);
        });
      }
    },
    created() {
      Bus.$on('markers', markers => {
        this.markers = markers;
        this.fitBounds();
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
