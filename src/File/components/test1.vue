<template>
	<div id="pp">
	
	  <mt-header fixed title="我是父组件">
	     <router-link to="/private" slot="left">
           <mt-button icon="back"></mt-button>
         </router-link>
	  </mt-header>


	  <div class="cont">
	  	 <p>我是父组件</p>
	  	 <router-link to="/test2">
	  	 	 <p>点击进入子组件</p>
	  	 </router-link>
	  	
		 <headerDiv :logo="logoMsg" @thransferUser="getUser"></headerDiv>
		 <p >用户名为=>{{user}}</p>
	  </div>
	  
	</div>
</template>
<script>
import headerDiv from './test2.vue'

	export default{
		components: {
			headerDiv
		},
		name: 'pp',
		data(){
			return{
				logoMsg: 'wwwwwwwww',
				user: ''
			}
		},
		methods: {
			getUser(msg){
               this.user = msg
			}
		}
	}
</script>

<style scoped>
.cont{
	margin-top: 50px;
}
</style>