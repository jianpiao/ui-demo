<template>
  <div id="Home">

    <mt-header title="首页">
      <mt-button icon="more" slot="right">

      </mt-button>
    </mt-header>


      <div class="header">

        <mt-swipe :auto="2000">
          <mt-swipe-item  >
            <router-link to="/article">
              <img src="../assets/images/b1.jpg" alt="">
            </router-link>
          </mt-swipe-item>
          <mt-swipe-item >
             <router-link to="/school" >
               <img src="../assets/images/b2.jpg" alt="">
             </router-link>
          </mt-swipe-item>
          <mt-swipe-item >
             <router-link to="/inter" >
               <img src="../assets/images/b3.jpg" alt="">
             </router-link>
          </mt-swipe-item>
        </mt-swipe>
      </div>
 
      <div class="middle-news">
        <mt-swipe :show-indicators="false" :auto="2000">
          <mt-swipe-item  >
            
            <p>广东理工学院少时诵诗书所所所</p>
          </mt-swipe-item>
          <mt-swipe-item >
             <p>新的校区沙发杀得好的啊是的噶速度高噶</p>
          </mt-swipe-item>
          <mt-swipe-item >
             <p>新生要在撒旦法师的法师的啥的高度</p>
          </mt-swipe-item>
        </mt-swipe>
      </div>


      <div class="middle-content">
         <ul>
           <li>
              <router-link to="/article">
                <img src="../assets/img/xing.png" alt="">
                <p>校园资讯</p>
              </router-link>
           </li>
           <li>
              <router-link to="/xiaobai">
                <img src="../assets/img/xing.png" alt="">
                 <p>小白定位</p>
              </router-link>    
           </li>
           <li>
              <router-link to="/books">
                <img src="../assets/img/xing.png" alt="">
                <p>检索图书</p>
              </router-link>               
           </li>
           <li>
              <router-link to="/bus">
                <img src="../assets/img/xing.png" alt="">
                <p>22路车况</p>
              </router-link> 
           </li>
         </ul>
      </div>

      <div class="notice">
        <img src="../assets/img/zan1.png" alt="">
        <span>{{notice}}</span>
      </div>


      <div class="foot" >
         <table  border="1">
            <tr>
               <td>
                 <router-link to="/text">
                      会话列表
                  </router-link>
               </td>
              <td>失物招领</td>
            </tr>
            <tr>
              <td>宿舍电量</td>
              <td>公务保修</td>
            </tr>
            <tr>
              <td>课程表</td>
              <td>作息时间</td>
            </tr>
            <tr>
              <td>成绩查询</td>
              <td>选课</td>
            </tr>
            <tr>
              <td>校历</td>
              <td>客服</td>
            </tr>
         </table>
      </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui'
import { Button } from 'mint-ui'
import { Actionsheet } from 'mint-ui';


export default {
  name: 'Home',
  data () {
    return {
        notice: '通知如下问题：asdfasdfasdf'
  

    }
  },
  methods:{

    }
}
</script>

<style>
#Home {
   background-color: rgba(211,211,211,.4);
}
#Home a{
  color: #333;
}
.header{
  width: 100%;
  height: 180px;
  margin-top: 40px;
}
.header img{
  height: 230px;
}
.middle-news{
  height: 22px;
  margin:0 auto; 
  text-align: center;
  line-height: 22px;
  text-overflow: hide;
  background-color: rgba(25,25,255,.1);
}
.middle-content{
  height: 80px;
  border-bottom: 1px solid rgba(0,10,0,.4);
  background-color: #ffffff;
}
.middle-content ul{
  width: 100%;
  height: 100%;
  float: left;
  margin: 0;
}
.middle-content ul li{
  width: 25%;
  text-align: center;
  height: 100px;
  float: left;
  list-style-type: none;
  padding-top: 15px
}
.middle-content ul li img{
  margin-bottom: 7px;
}
.notice{
  height: 60px;
  background-color: #ffffff;
}
.notice img{
  padding-top: 10px;
  padding-left: 10px;
}
.notice span{
  margin-left: 10px;
  height: 30px;
  line-height: 25px;
}
.foot{
  width: 100%;
  height: 280px;
  margin:5px 0;
  background-color: #ffffff;
}
.foot table{
  border: 1px;
  border-left: 0;
  border-right: 0;
  text-align: center;
}
.foot table tr{
  height: 50px;
}
.foot table td{
  width: 300px;
}
.mint-header{
  z-index: 10000;
}
@media only screen and (max-width: 350px) {
  #Home{
    height: 600px;
  }
}
@media only screen and (min-width: 400px){
  #Home{
  font-size: 16px;
  }
}
@media only screen and (min-width: 500px) and (max-width:1200px){
 #Home{
  font-size: 20px;
 }
 .header{
  width: 100%;
  height: 400px;
  margin-top: 40px;
}
 .header img{
  height: 400px;
  width: 100%;
}
 .middle-news{
  height: 35px;
  line-height: 35px;
}
.middle-content{
  height: 120px;
}
.middle-content ul li{
  padding-top: 25px;
}
.middle-content ul li img{
  margin-bottom: 13px;
  width: 40px;

}
.foot{
  height: 400px;
}
.foot table tr{
  height: 70px;
}
.foot table td{
  width: 1000px;
}
}
</style>
