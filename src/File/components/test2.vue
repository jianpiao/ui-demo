<template>
	<div class="header1">

<!--    	  <mt-header fixed title="我是子组件">
	     <router-link to="/test1" slot="left">
           <mt-button icon="back"></mt-button>
         </router-link>
	  </mt-header> -->

		<div id="logo">{{logo}}</div>
		<ul>
			<li v-for="nav in navs">{{nav.li}}</li>
		</ul>
		<span>(子组件)用户名：</span>
		<input type="text" v-model="username" @click="setUser">
	</div>
</template>

<script>
	export default {
		name: 'headerDiv',
		data(){
			return{
				navs: [
				{li: '主页'},
				{li: '日志'},
                {li: '说说'},
                {li: '相册'},
                {li: '文档'}
				],
				username: ''

			}

		},
		props: ['logo'],
        methods: {
        	setUser(){
        		this.$emit('thransferUser',this.username)
        	}
        }
	}

</script>

<style scoped>
	.header1{
	margin-top: 50px;

}
</style>