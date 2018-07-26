import Vue from 'vue' // using runtime-only build of Vue
import App from './App.vue'
import Dummy from './Dummy.vue'

Vue.component('dummy', Dummy)

new Vue({
    el: '#app',
    render: h => h(App) // this is not required full (including compiler) Vue
});