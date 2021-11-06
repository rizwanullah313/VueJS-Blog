<template>
  <div id="Addblog" class="main">
  <h1>Add A new Blog Post</h1>

  <form v-if="!submitted" id="fform">
   <label>Blog Title:</label>
   <input type="text" v-model.lazy="blog.title" required />
   <label>Blog Content:</label>
   <textarea v-model.lazy="blog.content"></textarea>

   <div id="checkboxes">
   <label> Ninjas </label>
   <input type="checkbox" value="ninjas" v-model="blog.categories"/>
   <label> Wizards </label>
   <input type="checkbox" value="wizards" v-model="blog.categories"/>
   <label> Mario </label>
   <input type="checkbox" value="mario" v-model="blog.categories"/>
   <label> Cheese </label>
   <input type="checkbox" value="cheese" v-model="blog.categories"/>
   </div>

   <label id="selectid">Author:</label>
   <select v-model="blog.author" id="selectid">
       <option v-for="author in authors">{{author}}</option>
   </select>

   <button v-on:click.prevent="post"> Add Blog </button>
  </form>

  <div v-if="submitted">
    <h3>Thanks For Adding Your Post</h3>
  </div>

   <div id="preview">
   <h3>Preview Blog</h3>
   <p>Blog Title: {{blog.title}}</p>
   <p>Blog Content: {{blog.content}}</p>
   <p>Blog Categries</p>
   <ul>
   <li v-for="category in blog.categories">{{category}}</li>
   </ul>
   <p>{{blog.author}}</p>
   </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
    blog:{
    title: "",
    content: "",
    categories: [],
    author: ""
    },
    authors: ["Rizwan", "shaan", "Haris", "Haroon"],
    submitted: false,
    }
  },
  methods: {
    post: function(){
    this.$http.post('https://vuejs-app-3fd24-default-rtdb.firebaseio.com/posts.json', this.blog).then(function(data){
        console.log(data);
        this.submitted = true;
    });
    }
  }
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
}
label{
    display: block;
    margin: 20px 5px 10px;
}
input[type="text"], textarea{
    display: block;
    width: 94.5%;
    padding: 8px;
    margin: 0 auto;
}
#preview{
    padding: 10px 20px;
    border: 2px dotted #ccc;
    margin: 30px 0;
    background: black;
    color: white
}
h3{
    margin-top: 10px;
    text-align: center;
}
#checkboxes input{
  display: inline-block;
  margin-right: 10px;
  margin: 0 auto;
}
#checkboxes label{
   display: inline-block;
   margin: 20px 30px;
}
#selectid{
     margin: 20px 30px;
}
.main{
   width: 50%;
   margin: 0 auto;
   background-color: #eee;
   border: 2px solid black;
   margin-top: 40px;
}
</style>
