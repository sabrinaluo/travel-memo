<template>
  <li>
    <div style="padding: 0;margin: 0">
      <span class="card-top-col">1</span>
      <span class="card-top-col">2</span>
      <span class="card-top-col">3</span>
    </div>
    <p>{{item.city}}</p>
    <p>{{item.address}}</p>
    <p>{{item.date}}</p>
    <p v-if="item.isFulfilled">
      <i class="fa fa-heart"></i>
    </p>
    <p v-if="!item.isFulfilled">
      <i class="fa fa-heart-o"></i>
    </p>
  </li>
</template>

<script>
 export default {
   name: 'tr-list-item',
   props: [{
     name: 'item',
     type: Object,
     default: () => {}
   }]
 };
</script>

<style>
  .main-list li {
    background-color: #fff;
    list-style: none;
    padding: 10px;
    border-top: 1px solid #eee;
    box-shadow: 0 1px 1px #ccc;
    margin-bottom: 5px;
  }

  .main-list li:first-child {
    border-top: none;
  }
</style>
