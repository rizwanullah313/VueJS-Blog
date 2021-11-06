import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource"
import VueRouter from "vue-router"
import Routes from './routes'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
      routes: Routes,
      mode: 'history'
});

// Custom Directoves
// Vue.directive('rainbow',{
//   bind(el, binding, vnode){
//     el.style.color = "#" + Math.random().toString().slice(2,8);
//   }
// });

Vue.directive('theme',{
  bind(el, binding, vnode){
  if(binding.value == 'wide'){
    el.style.maxWidth = "1200px";
  }
  else if(binding.value == 'narrow'){
    el.style.maxWidth = "600px";
  }
  if(binding.arg == 'column'){
    el.style.background = "#ddd";
    el.style.padding = '20px';
  }
}
});



//Filters
// Vue.filter('to-uppercase', function(value){
//      return value.toUpperCase();
// });
Vue.filter('snippet', function(value){
     return value.slice(0,80) + '...';
});


new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
