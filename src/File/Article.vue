<template>
	<div id="art">
       <mt-header id="a" title="校园资讯" >
           <router-link to="/" slot="left">
             <mt-button icon="back"></mt-button>
           </router-link>
          <mt-button icon="more" slot="right" @click="share = true">
          	 <mt-actionsheet
               :actions="actions"
               v-model="share"
               closeOnClickModa="true">
             </mt-actionsheet>
          </mt-button>
            
       </mt-header>
        <br/>

	    <div class="newsList1">
	    	<ul>
            <router-link to="/">
               <li v-for="item in arrList">                 
                    <h4>{{item.title}}</h4>
                    <p>{{item.detail}}</p>   
               </li>
            </router-link> 
	        </ul>
	    </div>
  </div>

		
	</div>

</template>
<script>
import {mapGetters} from 'vuex'


import { Actionsheet } from 'mint-ui';
	export default {
    data(){
      return {
        arrList:[],
        share: false,
         actions :[
               {
               	name: '分享到微信',
                method: this.wechar
            },{
                name: '分享到微博',
                method: this.webo
              }
         ]
      }
    },
    mounted(){
      this.fetchData()  //获取数据
    },
    methods:{
      fetchData(){
        var _this=this;
        this.$http.get('src/data/index.data').then(function(res){
          console.log( res.data);
          //setTimeout(function(){
            _this.arrList=res.data;
          //},1000);
        }).catch(function(err){
          console.log(err);
        })
      },
      wechar(){

      },
      webo(){

      }
    }
  }

</script>
<style scoped>
body{
    padding: 0;
    margin: 0;
}

body::-webkit-scrollbar{
width:0;
height:0;
}
h4, p{
  color: #000;
}
.newsList1{
  background-color: rgba(221,221,221,.3);
  padding-top:20px;
}

.newsList1 ul li{
  list-style-type: none;
  width: 95%;
  border-bottom: 1px dashed #666666;
  padding-top: 10px;

}
 .mint-header-title{
 	position: absolute;
 }
@media only screen and (min-width: 400px){
  .newsList1 h4{
      font-size: 21px;
  }
 .newsList1 p{
      font-size: 16px;
  }
}
@media only screen and (min-width: 500px) and (max-width:1200px){
  .newsList1 h4{
    font-size: 30px;
   }
  .newsList1 p{
    font-size: 21px;
   }
   .newsList1 ul li{
    padding-top: 20px;
    line-height: 30px;
   }

}
</style>