<script>
  import '../script.js'
</script>
<template>
<div class="search-box">
  <input class="input" id="username-input">
<button class="btn" hasankilici="github()">Search</button>
</div>
<div id="github-main">
</div>
</template>
<style>
 .search-box{
   background:#ededed;
   padding:8px;
   text-align:center;
 }
 .input{
  width:75%;
  padding:8px;
  border:none;
  border-radius:8px;
  }
  .input:focus{
  outline:none;
  }
  .btn{
  border:none;
  padding:8px;
  border-radius:8px;
  margin-left:20px;
  background:white;
  }
  #github-main{
    padding-left:20px;
    padding-right:20px;
    text-align:center;
  }
  .avatar{
    border-radius:50%;
    width:35%;
    height:35vh;
    margin-top:5vh;
  }
</style>
