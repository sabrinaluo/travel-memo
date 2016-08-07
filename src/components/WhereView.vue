<template>
  <div class="meta">
    <button class="tr-btn tr-btn-blue btn-where" @click="getNewPlace()">WHERE?</button>
    <button class="tr-btn tr-btn-blue btn-clear" @click="clear()">CLEAR ALL</button>
  </div>
  <tr-list :list="list" :type="type" keep-alive></tr-list>
</template>

<script>
  import TrList from './List';
  import Where from '../stores/where';
  import Bus from '../bus';

  export default{
    components: {
      TrList
    },
    data() {
      return {
        type: 'where',
        list: []
      };
    },
    methods: {
      getNewPlace() {
        Where.get().then(data => {
          this.list.unshift(data);
          Bus.$emit('markers', this.list);
        });
      },
      clear() {
        this.list = [];
      }
    },
    route: {
      activate() {
        this.getNewPlace();
      }
    }
  };
</script>

<style>
  .tr-btn {
    border: none;
    border-radius: 2px;
    color: #fff;
    height: 26px;
    padding: 0 16px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);
  }

  .tr-btn:focus {
    outline: none;
  }

  .tr-btn:active {
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .2);
  }

  .tr-btn-blue{
    background-color: dodgerblue;
  }
  .btn-where{
    margin: 5px 10px;
  }
</style>
