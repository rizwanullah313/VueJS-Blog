<template>
  <div id="app">
  <show-blog></show-blog>
  <br>
  <hr>
  <br>
  <list-blog></list-blog>

  </div>
</template>

<script>
import Addblog from "./components/Addblog.vue";
import showBlog from "./components/showBlog.vue";
import listBlog from "./components/listBlog.vue";

export default {
  components: {
      'add-blog': Addblog,
      'show-blog': showBlog,
      'list-blog': listBlog
 },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
