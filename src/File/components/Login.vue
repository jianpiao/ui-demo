<template>
	<div id="log">
		<mt-header title="登录">
	       <router-link to="/" slot="left">
	          <mt-button icon="back"></mt-button>
	       </router-link>
	   </mt-header>

      <div class="lo">
      	    <p>账号：<span @click="deleted1">删除</span></p>
		    <input type="text" name="text" placeholder="学号、手机号" v-model="userName" > 
		    
            <p>密码：<span @click="deleted2">删除</span></p> 
           <input type="password" name="text" placeholder="密码" v-model="password"> 
           
          <br/>
           <mt-button type="primary" size="large" @click="login">登录</mt-button> 
           <mt-button type="default" size="large">忘记密码</mt-button> 
            <hr/>
      	 <p>提示：账户请输入自己的学号，密码为教学系统登录的密码。</p>
	    
      </div>
     
	</div>
</template>

<script>
import { Field } from 'mint-ui';


export default{
	name: 'log',
	data(){
     return {
       userName: '13112001100',
       password: '13111111111'
        }
	},
	methods: {
       deleted1(){
           this.userName = ''        
       },
       deleted2(){
       	this.password = '' 
       },
       login(){
       	  if(this.userName == ''  && this.password == ''){
       	  	alert("请输入账户密码")
       	  }else{
       	  	this.$router.go(-1)

       	  }
       }
	}
}

</script>


<style>
    body{
    	background-color: rgba(199,199,199,.15);
    }
    .lo span{
    	position: absolute;
    	margin-left: 50%;
    	opacity: .5;
    }
	.lo{
		margin: 50px auto;
        width: 70%;
	}
	.lo p{
		width: 100%;
	}
	.lo input{
		width: 95%;
	}
	.lo button{
		margin-top: 10px;
	}

@media only screen and (max-width: 350px) {

   .log-header-img, .log-header-img img{
	width: 70%;
	height: 130px;
	text-align: center;
}
}
</style>