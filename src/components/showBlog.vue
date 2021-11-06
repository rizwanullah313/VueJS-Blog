<template>
  <div v-theme:column="'rainbow'" id="show-blogs">
  <h1>All Blog Articals</h1>
  <input type="text" v-model="search" placeholder="Search Blogs"/>
  <div v-for="blog in filteredBlogs" class="single-blog">
  <router-link v-bind:to="'/blog/' + blog.id">
  <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
  </router-link>
  <article>{{blog.content | snippet}}</article>

  </div>
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMixin";
export default {
  data () {
    return {
    blogs: [],
    search: ""
    }
  },
  methods: {

  },
  created() {
     this.$http.get('https://vuejs-app-3fd24-default-rtdb.firebaseio.com/posts.json').then(function(data){
        return data.json();
  }).then(function(data){
     var blogsArray = [];
     for (let key in data){
       data[key].id = key
       blogsArray.push(data[key]);
     }
        this.blogs = blogsArray
  })
  },
  computed: {
  //filteredBlogs: function(){
  //  return this.blogs.filter((blog)=>{
  //  return blog.title.match(this.search);
  //  });
  // ye code an use kia hy mixin folder k js m
  //}
  },
  filters: {
    toUppercase(value){
        return value.toUpperCase();
   }
  },
  directives: {
      'rainbow':{
      bind(el, binding, vnode){
         el.style.color = "#" + Math.random().toString().slice(2,8);
  }
      }
  },
  mixins: [searchMixin]
  //filters: {
  //    'to-uppercase': function(value){
  //       return value.toUpperCase();
 //  }
  //}
}
</script>

<style>
#show-blogs{
  max-width: 800px;
  margin: 0 auto;
  margin-top: 40px;
  border: 2px solid green;
}
.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
  border: 2px solid red;
}
</style>
