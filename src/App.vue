<template>
  <div id="app">
  <show-blog></show-blog>
  </div>
</template>

<script>
import Addblog from "./components/Addblog.vue";
import showBlog from "./components/showBlog.vue";

export default {
  components: {
      'add-blog': Addblog,
      'show-blog': showBlog
 },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
