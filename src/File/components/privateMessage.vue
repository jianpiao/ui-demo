<template>
	<div id="privateMessage">
	   <mt-header fixed title="我的资料">
	     <router-link to="/me" slot="left">
         <mt-button icon="back"></mt-button>
       </router-link>
	   </mt-header>
		<ul class="info">
			<li class="info-img">
				<span>头像</span>

				<img src="../../assets/images/b4.jpg" alt="" class="right" @click="sheetVisible = true">
				<mt-actionsheet
                 :actions="actions"
                  v-model="sheetVisible">
                 </mt-actionsheet>
			</li>
			<li class="info-username">
				<span>昵称</span>
				<span class="right" @click="userNames">{{userName}}</span>
			</li>
			<li class="info-sex">
				<span>性别</span>
				<span class="right" @click="userSexs">{{userSex}}</span>
			</li>
			<li class="info-introduction">
				<span>座右铭</span>
				<span class="right" @click="introductions">{{introduction}}</span>
			</li>
			<li>
			  <router-link to="/test1">
				<span>aaaaaa</span>
			  </router-link>
			</li>
		</ul>

	</div>
</template>

<script>

import { MessageBox } from 'mint-ui'

	export default{
         data(){
         	return{
         		userName: '肥码宅',
         		userSex: '男',
         		introduction: '懒惰是最残忍的惩罚',
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
          },
          userSexs(){
          	  MessageBox.prompt('请输入姓名').then(({ value, action }) => {
                 this.userSex = value
               })
          },
          introductions(){
          	MessageBox.prompt('请输入姓名').then(({ value, action }) => {
                 this.introduction = value
               })
          }
	}
}
</script>
<style scoped>

    #privateMessage{
    	width: 100%;
    }
	.info{
		margin-top: 60px;
		width: 100%;
		border-top: 1px solid rgba(0,10,1,.2);
	}
	.info img{
		width: 50px;
		height: 40px;
	}
	.info li{
		width: 100%;
		border-bottom:  1px solid rgba(0,10,1,.2);
		list-style-type: none;
		height: 40px;
		line-height: 40px;
		display: inline-block;
	}
	.right{
		right: 10px;
		position: absolute;
	}
</style>