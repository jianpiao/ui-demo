<template>
  <div id="page">
  <div>
     <mt-tab-container v-model="selected" > 
      <mt-tab-container-item id="首页">
          <!-- <mt-cell > -->
          <div class="page-top-content">
          <mt-header fixed title="首页"></mt-header>
            <!-- <HomeView></HomeView> -->
               <router-link  to="/me">
                  <logView></logView>
               </router-link>
           </div>
          <!-- </mt-cell> -->
        </mt-tab-container-item>
       </mt-tab-container>
      </div>
  
         
    <div>
      
        <mt-tab-container v-model="selected" > 
         <mt-tab-container-item id="校园圈">
          <!-- <mt-cell> -->
           <div class="content">
            <mt-header fixed title="校园圈"></mt-header>
              <schoolView></schoolView>
           </div>
          <!-- </mt-cell> -->
        </mt-tab-container-item>
       </mt-tab-container>
      </div>

        
        <div>
        
          <mt-tab-container v-model="selected" > 
           <mt-tab-container-item id="互动平台">
            <!-- <mt-cell class="cell"> -->
             <div class="content">
               <mt-header fixed title="互动平台"></mt-header>
                <interView></interView>
             </div> 
          <!-- </mt-cell> -->
        </mt-tab-container-item>
       </mt-tab-container>        
      </div>
        
        <div>
        
          <mt-tab-container v-model="selected" > 
           <mt-tab-container-item id="我的">
            <!-- <mt-cell > -->
             <div class="content">
              <mt-header fixed title="我的"></mt-header> 
                <meView></meView>
            </div> 
           <!-- </mt-cell> -->
         </mt-tab-container-item>
        </mt-tab-container>
      </div>
       

    <mt-tabbar v-model="selected" value="tab-item:id" is-fixed >
      <mt-tab-item id="首页">
        <img slot="icon" src="../assets/logo.jpg">
        首页
      </mt-tab-item>
      <mt-tab-item id="校园圈">
        <img slot="icon" src="../assets/logo.jpg">
        校园圈
      </mt-tab-item>
      <mt-tab-item id="互动平台">
        <img slot="icon" src="../assets/logo.jpg">
        互动平台
         </mt-tab-item>
          <mt-tab-item id="我的">
        <img slot="icon" src="../assets/logo.jpg">
        我的
        </mt-tab-item>
       </mt-tabbar>

  </div>
</template>

<script >
import { Indicator } from 'mint-ui'
import { Toast } from 'mint-ui'
import { MessageBox } from 'mint-ui'
import { Tabbar, TabItem } from 'mint-ui'
import { TabContainer, TabContainerItem } from 'mint-ui'
// import HomeView from './Home.vue'
import interView from './interactive.vue'
import schoolView from './schoolClub.vue'
import meView from './me.vue'

export default {
  name: 'app',
  data () {
    return {
       selected: '首页'
 

    }
  },
  components:{
     // HomeView,
     interView,
     schoolView,
     meView
  }
}
</script>

<style>
#page{

}
.mint-swipe{
  height: 230px;
} 
.content{
  margin-top: 30px;
  width: 375px;
  border-bottom: 1px solid #515;
  border-top: 1px solid #515;
  position: relative;
}
.page-top-content{
  width: 375px;
  border-bottom: 1px solid #515;
  border-top: 1px solid #515;
  position: relative;
}
</style>
