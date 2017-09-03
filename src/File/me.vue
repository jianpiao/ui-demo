<template>
  <div id="me">
     <mt-header fixed title="我的">
     </mt-header>

    <div class="present">
    	<div class="user-info">
    	  <div class="user-img">
    	         <img src="../assets/img/headimg.png" alt="" @click="sheetVisible = true" /> 
                 <mt-actionsheet
                 :actions="actions"
                  v-model="sheetVisible">
                 </mt-actionsheet>
    	  </div>
    	
           <div class="user-name">
           	 <p @click="userNames" >{{userName}}</p>
           	 <span>{{classOld}}</span>
           </div>
    	</div>
    </div>
    <div class="middle">
    	<ul class="ul1">
    		<li>
          <router-link to="/private">
            <img src="../assets/img/xing.png" alt="">
            <p>我的资料</p>
          </router-link>
    		</li>
    		<li>
    			<img src="../assets/img/xing.png" alt="">
    			<p>我的消息</p>
    		</li>
    		<li>
    		    <img src="../assets/img/xing.png" alt="">
    			<p>偏好设置</p></li>
    		</li>    			
    	</ul>

    	  <ul class="ul2">
    		<li>
    			<img src="../assets/img/xing.png" alt="">
    			<p>意见反馈</p>
    		</li>
    		<li>
    			<img src="../assets/img/xing.png" alt="">
    			<p>关于我们</p>
    		</li>
    		<li>
    		    <img src="../assets/img/xing.png" alt="">
    			<p>切换账号</p></li>
    		</li>    			
    	</ul>
    </div>
   
      <div class="userinfo">
        <router-link to="/login">
           <span>登录</span>
           <div class="userinfo-underline"></div>
        </router-link>
      </div>
  </div>
</template>

<script>

import { MessageBox } from 'mint-ui';
import privateMessage from './components/privateMessage.vue'

	export default{
		name: 'me',
    components: {
      privateMessage
    },
		data(){
			return{
				userName: '肥码宅',
        btnText: '肥码宅',
				classOld: '大一新生',
        sheetVisible: false,
        actions: [
                {
                name: '打开相册相册',
                method: this.showToast
                },
                {
                name: '其他',
                method: this.showMsgbox
                }
            ]
			  }
		},
        methods:{
            showToast(){
           
          },
            showMsgbox(){
          
          },
          userNames(){
            MessageBox.prompt('请输入姓名').then(({ value, action }) => {
                 this.userName = value
               })
             
            }
        }
	}
</script>

<style scoped>
*{
	margin: 0;
	padding:0;
}
@import '../assets/css/head.css';
.present{
	background-image: url(../assets/images/b4.jpg);
	background-repeat: no-repeat;
	background-size: 100% 230px;
	margin-top: 40px;
	height: 230px;
}
.user-info{
	width: 80%;
	margin: 0 auto;
	height: 100%;
}
.user-img{
	width: 100px;
	height: 100px;
	padding-top: 30%;
	position: absolute;
    border-radius: 50%;
}
.user-img img{
    border-radius: 50%;
}
.user-name{
    width: 40%;
    height: 10%;
    top: 170px;
    right: 70px;
    position: absolute;
    text-align: center;
}
.user-name p{
	font-size: 23px;
	font-weight: bolder;
	color: #13d;
	border-bottom: 1px solid #ddd;
    text-shadow: 5px 2px 10px #fff;
}
.user-name span{
	font-size: 18px;
	color: #111;
	text-shadow: 3px 4px 5px #ffffff;
}
.middle{
    margin-top: 30px;
    height: 180px;
}
.middle ul{
	width: 100%;
	height: 50%;
	float: left;

}
.middle ul li{
	width: 33%;
	text-align: center;
	height: 100px;
	float: left;
	list-style-type: none;
}
.middle ul li img{
	margin-bottom: 10px;
}
.userinfo{
    position: absolute;
    width: 100%;
    height: 30px;
    text-align: center;
    bottom: 50px;
}
.userinfo span{
    font-size: 17px;
    color: rgba(150,150,150,1);
}
.userinfo-underline{
    height: 1px;
    width: 60%;
    background-color: #BEBEBE;
    margin: 10px auto;
}
@media only screen and (max-width: 350px){
  .user-img{
    widows: 80px;
    height: 80px;
  }
  .user-img img{
    widows: 80px;
    height: 80px;
  }

}
@media only screen and (min-width: 400px){
   #me{
    font-size: 16px;
   }
   .user-img{
    padding-top: 25%;
   }
}
@media only screen and (min-width: 500px) and (max-width:1200px){
    .user-img{
    padding-top: 12%;
    width: 120px;
    height: 120px;
   }
   .user-img img{
    width: 120px;
    height: 120px;
   }
   .user-name p{
    font-size: 30px;
    padding-bottom: 7px;
   }
   #me{
    font-size: 22px;
   }

}
</style>