import showBlog from "./components/showBlog.vue";
import Addblog from "./components/Addblog.vue";
import singleBlog from "./components/singleBlog.vue";

export default[
  {path:'/', component: showBlog},
  {path:'/add', component: Addblog},
  {path:'/blog/:id', component: singleBlog}
]
