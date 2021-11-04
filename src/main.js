import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource"

Vue.use(VueResource);


// Custom Directoves
Vue.directive('rainbow',{
  bind(el, binding, vnode){
    el.style.color = "#" + Math.random().toString().slice(2,8);
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
