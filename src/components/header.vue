<template>
  <ul>
    <li><router-link to="/" exact>Blog</router-link></li>
    <li><router-link to="/add" exact>Add A New Blog</router-link></li>
  </ul>

</template>

<script>

export default{}

</script>

<style scoped>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #666;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav{
    background: #000;
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: #333;
    color: #eee;
}
</style>
