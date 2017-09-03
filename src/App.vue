<template>
  <div id="app">
     <loading v-show="loadings"></loading>
    <!-- <HomeView v-show="headShow"></HomeView> -->
       <transition name="scale">
         <keep-alive>
            <router-view class="routerView"></router-view>
         </keep-alive>
       </transition>
        <!-- <PageView></PageView> -->
      <NavView v-show="headShow"></NavView>
 
  </div>
</template>

<script>

// import PageView from './File/Page.vue'
import NavView from './File/Nav.vue'
// import HomeView from './File/Home.vue'



import {mapGetters} from 'vuex'

export default {
      computed:mapGetters([
      'headShow',
      'loadings'
    ]), 
      watch:{       //但路由发生变化进行监听路由，
          $route(to) {
                if(to.path == '/home'){
                    this.$store.dispatch('showHeader')
               }else if(to.path == '/school'){
                    this.$store.dispatch('showHeader')
               }else if(to.path == '/inter'){
                    this.$store.dispatch('showHeader')
               }else if(to.path == '/me'){
                    this.$store.dispatch('showHeader')
               }else if(to.path == '/xiaobai'){
                    this.$store.dispatch('hideHeader')
               }
               else{
                  this.$store.dispatch('hideHeader')
               }
          }
      },
  name: 'app',
  data () {
    return {

    }
  },
  methods:{
    header: ' '

  },
  components:{
        // PageView,
        // HomeView,
        NavView


  }
}


</script>

<style scoped>

 @import './assets/css/head.css';




.scale-enter-active, .scale-leave-active{
  transition: all .4s; 
   transform: scale3d(0,1,0);
   opacity: .3 ;
}
.scale-enter , .scale-leave{
  transform: scale3d(1,1,1);
  opacity: 1;
}

/*  .slide-up-enter-active, .slide-up-leave-active {
    transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
    opacity: .7;
    transform: translate3d(0, 4em, 0);
  }
  .slide-up-enter, .slide-up-leave-active {
    opacity: .3;
    transform: translate3d(0, 4em, 0);
  }*/

/*  .slide-down-enter-active, .slide-down-leave-active {
    transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
    opacity: .7;
    transform: translate3d(0, 0, 0);
  }
  .slide-down-enter, .slide-down-leave-active {
    opacity: 1;
    transform: translate3d(0, 8rem, 0);
  }

  .slide-left-enter-active, .slide-left-leave-active {
    transition: all .2s cubic-bezier(0, 1.2, 1, 0.5);
    opacity: .5;
    transform: translate3d(2em, 0, 0);
  }

  .slide-left-enter, .slide-left-leave-active {
    opacity: .3;
    transform: translate3d(2em, 0, 0);
  }*/

/*  .slide-right-enter-active, .slide-right-leave-active {
    transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
    opacity: .5;
    transform: translate3d(5em, 0, 0);
  }
  .slide-right-enter, .slide-right-leave-active {
    opacity: .3;
    transform: translate3d(5em, 0, 0);
  }*/

/*  .fade-enter-active, .fade-leave-active {
    transition: opacity .4s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }*/
 </style>
