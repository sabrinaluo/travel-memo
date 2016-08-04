<template>
  <li class="tr-card">
    <div class="city">
      <h6>{{item.city}}</h6>
      <p class="address" v-if="item.address">{{item.address}}</p>
    </div>
    <div class="card-meta">
      <span class="date" v-if="item.date">{{item.date}}</span>
      <span class="heart" v-if="type==='wish'">
        <i class="fa fa-heart" v-if="item.done"></i>
        <i class="fa fa-heart-o" v-if="!item.done"></i>
      </span>
    </div>
    <p class="note" v-if="item.note">{{item.note}}</p>
  </li>
</template>

<script>
 export default {
   name: 'tr-list-item',
   props: [{
     name: 'item',
     type: Object,
     default: () => {}
   }, {
     name: 'type',
     type: String,
     default: 'wish'
   }]
 };
</script>

<style>
  .tr-card {
    background-color: #fff;
    list-style: none;
    padding: 10px;
    border-top: 1px solid #eee;
    box-shadow: 0 1px 1px #ccc;
    margin-bottom: 3px;
    position: relative;
  }

  .tr-card:first-child {
    border-top: none;
  }

  .city {
    margin-right: 50px;
  }

  .city h6{
    font-size: 15px;
    margin-top:0;
    margin-bottom: 2px;
  }

  .card-meta{
    position: absolute;
    right: 0;
    top:0;
    padding: 10px;
  }

  .date{
    line-height: 15px;
    font-size: 10px;
  }

  .address {
    margin: 0;
    font-size: 10px;
    font-style: italic;
    color: #777;
  }

  .note {
    margin: 5px 0 0 0;
    border-top: 1px solid #eee;
    padding-top: 10px;
    padding-bottom: 5px;
    font-size: 15px;
  }

  .heart {
    color: hotpink;
    font-size: 18px;
    line-height: 33px;
  }
</style>
