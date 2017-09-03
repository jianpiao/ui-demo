<template>
  <div id="school">
  <mt-header title="校园圈">
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>

  <div class="header-con">
    <div class="header-img">
         <img src="../assets/images/b4.jpg" alt="">
    </div>
    <div class="header-head-img">
      <span>{{userName}}</span>
        <router-link to="/private">
           <img src="../assets/images/b5.jpg" alt="">
        </router-link>
    </div>
  </div>

    <div class="middle-con">
       <div class="middle-con-img">
         <img src="../assets/images/b5.jpg" alt="">
       </div>
       <div class="middle-con-content">
          <span>{{userName}}</span>
          <p>{{userContent}}</p>
          <img src="../assets/images/b5.jpg" alt="">
       </div>
    </div>
  <hr/>

    <div class="middle-con">
       <div class="middle-con-img">
         <img src="../assets/images/b5.jpg" alt="">
       </div>
       <div class="middle-con-content">
          <span>{{userName}}</span>
          <p>{{userContent}}</p>
          <img src="../assets/images/b1.jpg" alt="">
       </div>
    </div>
  <hr/>

      <div class="middle-con">
       <div class="middle-con-img">
         <img src="../assets/images/b5.jpg" alt="">
       </div>
       <div class="middle-con-content">
          <span>{{userName}}</span>
          <p>{{userContent}}</p>
       </div>
    </div>
  <hr/>

      <div class="middle-con">
       <div class="middle-con-img">
         <img src="../assets/images/b5.jpg" alt="">
       </div>
       <div class="middle-con-content">
          <span>{{userName}}</span>
          <p>{{userContent}}</p>
          <img src="../assets/images/b3.jpg" alt="">
       </div>
    </div>
  <hr/>

      <div class="middle-con">
       <div class="middle-con-img">
         <img src="../assets/images/b5.jpg" alt="">
       </div>
       <div class="middle-con-content">
          <span>{{userName}}</span>
          <p>{{userContent}}</p>
          <img src="../assets/images/b1.jpg" alt="">
       </div>
    </div>
  <hr/>

      <div class="middle-con">
       <div class="middle-con-img">
         <img src="../assets/images/b5.jpg" alt="">
       </div>
       <div class="middle-con-content">
          <span>{{userName}}</span>
          <p>{{userContent}}</p>
          <img src="../assets/images/b2.jpg" alt="">
       </div>
    </div>
  <hr/>
   









  </div>
</template>


<script>
  export default {
    data(){
      return {
          userName: '肥码宅',
          userContent: '哈佛案例撒旦法师的法师的发傻大个傻大个傻大个傻大个阿斯蒂芬gas东港市东港市大概傻大个傻大个阿斯蒂芬gas的嘎傻大个阿斯蒂芬gas的嘎'
      }
    },
    methods:{
     
    }
  }

</script>


<style>

*{
    padding: 0;
    margin: 0;
  }
.header-con{
    width: 100%;
    height: 275px;
}
.header-head-img{
    width: 90%;
    height: 84px;
    position: absolute;
    right: 10px;
    top: 35%;
}
.header-head-img span{
    right: 90px;
    top: 13px;
    position: absolute;
    font-weight: bold;
    color: #fff;
    letter-spacing: 3px;
}
.header-head-img img{
   width: 80px;
   height: 80px;
   right: 0;
   position: absolute;
   border:2px solid #ffffff;
}
.middle-con{
    width: 90%;
    height: auto;
    margin: 20px auto;
}
.middle-con-img{
    width: 50px;
    height: 50px;
    margin-left: 0;
    position: absolute;
}
.middle-con-img img{
    width: 50px;
    height: 50px;
}
.middle-con-content span{
    color: #005780;
}
.middle-con-content{ 
    width: 80%;
    margin-left:  60px;
    
}
.middle-con-content img{
    width: 70%;
}

@media only screen and (max-width: 350px){
  .header-con{
     height: 250px;
}

}
@media only screen and (min-width: 400px){
   #school  {
    font-size: 17px;
   }
   .header-con{
    height: 300px;
}
   .middle-con-content img{
    width: 75%;
}
}
@media only screen and (min-width: 500px) and (max-width:1200px){

.header-con{
    width: 100%;
    height: 392px;
}
.header-con img{
    width: 100%;
    height: 340px;
}
.header-head-img{
    width: 90%;
    height: 128px;
    top: 30%;
}
.header-head-img span{
    right: 160px;
    top: 30px;
    font-size: 26px;
    letter-spacing: 4px;
}
.header-head-img img{
   width: 120px;
   height: 120px;
   right: 10px;
   border:4px solid #ffffff;
}
.middle-con{
    margin: 40px auto;
}
.middle-con-img{
    widows: 80px;
    height: 80px;
}
.middle-con-img img{
    width: 80px;
    height: 80px;
}
.middle-con-content{ 
    left: 140px;
    width: 78%;
    font-size: 26px;
    line-height: 30px;
}
.middle-con-content img{
    width: 70%;

}


}

</style>