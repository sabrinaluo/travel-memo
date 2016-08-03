<template>
  <footer class="footer">
    <div class="container">
      <p class="quote">
        <i class="fa fa-quote-left"></i> rester, c'est exister, mais
        voyager, c'est vivre <i class="fa fa-quote-right"></i></p>
      <p><a href="http://github.com/sabrinaluo/travel-memory" target="_blank"><i class="fa fa-github"></i></a>
        <a href="http://weibo.com/lob7" target="_blank"><i class="fa fa-weibo"></i></a></p>
      <p>made with ❤ by <a href="http://sabrinaluo.com" target="_blank">HiiTea</a></p>
    </div>
  </footer>
</template>

<script>
  export default{
    name: 'trFooter'
  };
</script>

<style>
  .footer {
    margin-top: 30px;
    padding: 30px 0;
    font-size: 12px;
    clear: both;
    /*border-top: 1px solid #eee;*/
    text-align: center;
  }

  p.quote {
    margin: 0;
    padding: 0 10px;
    font-size: 13px;
    color: #999;
    font-style: italic;
    position: relative;
  }

  .quote .fa {
    position: relative;
    font-size: 8px;
  }

  .quote .fa-quote-left {
    top: -2px;
  }

  .quote .fa-quote-right {
    bottom: -2px;
  }
</style>
