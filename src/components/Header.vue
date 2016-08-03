<template>
  <header class="header">
    <div class="container">
      <h3 class="title">Travel Mem<i class="fa fa-heart"></i>ry</h3>
      <ul class="nav">
        <li><a v-link="{name:'history', activeClass:'active'}">
          <i class="fa fa-calendar-check-o"></i>
        </a></li>
        <li><a v-link="{name:'wish', activeClass:'active'}">
          <i class="fa fa-heart-o"></i>
        </a></li>
        <li><a v-link="{name:'where', activeClass:'active'}">
          <i class="fa fa-paper-plane-o"></i>
        </a></li>
      </ul>
    </div>
  </header>
</template>

<script>
  export default{
    name: 'trHeader'
  };
</script>

<style>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 44px;
    box-shadow: 1px 1px 1px #ccc;
    background-color: #fff;
  }

  .title {
    font-family: Helvetica, sans-serif;
    line-height: 44px;
    margin: 0;
    padding: 0 10px;
    float: left;
  }

  .title .fa {
    font-size: 15px;
    color: hotpink;
  }

  .nav {
    float: right;
    margin: 0;
    padding: 0;
  }

  .nav li {
    float: left;
    list-style: none;
    line-height: 44px;
    padding: 0 8px;
  }

  .nav li:last-child {
    padding-right: 10px;
  }

  .nav a,
  .nav a:visited,
  .nav a:link {
    color: #333;
  }

  .nav a.active {
    color: dodgerblue;
  }

  .nav a:hover {
    color: #000;
  }
</style>
