<template>
  <div id="app">
   <app-header></app-header>
   <router-view></router-view>
  </div>
</template>

<script>
import Addblog from "./components/Addblog.vue";
import showBlog from "./components/showBlog.vue";
import listBlog from "./components/listBlog.vue";
import header from "./components/header.vue";

export default {
  components: {
      'add-blog': Addblog,
      'show-blog': showBlog,
      'list-blog': listBlog,
      'app-header': header
 },
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
