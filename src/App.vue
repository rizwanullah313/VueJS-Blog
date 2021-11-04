<template>
  <div id="app">
  <add-blog></add-blog>
  </div>
</template>

<script>
import Addblog from "./components/Addblog.vue";
export default {
  components: {
      'add-blog': Addblog
 },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
