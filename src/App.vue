<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Loading from './components/Loading.vue';
import { mapState } from 'vuex';
import store from './store'
import { setSessionStorage,getSessionStorage } from "./common/js/utils.js";
export default{
  components:{
    Loading
  },
  computed:{
    ...mapState([
      'loading'
    ])
  },
  created(){
    if(getSessionStorage("store"))
    {
      store.replaceState(Object.assign({},store.state,JSON.parse(getSessionStorage("store"))))
    }
    window.addEventListener('beforeunload',()=>{
      setSessionStorage("store",JSON.stringify(store.state))
    })
  },

  setup(){

  }
}
</script>

<template>
  <Loading v-show="loading"></Loading>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: aliceblue;
  height: 100%;
}
</style>
