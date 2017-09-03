<template>
	<div id="nav">
		<ul>
	    	<router-link to="/home" tag="li" active-class="active">
	    		<a href="javascript:;">首页</a>
	    	</router-link>
	    	<router-link to="/school" tag="li" active-class="active">
	    		<a href="javascript:;">校园圈</a>
	    	</router-link>
	    	<router-link to="/inter" tag="li" active-class="active">
	    		<a href="javascript:;">新闻</a>
	    	</router-link>
	    	<router-link to="/me" tag="li" active-class="active">
	    		<a href="javascript:;">我</a>
	    	</router-link>
	    </ul>
	</div>
</template>
<script>
	export default{
		data(){
		   return {
               
			}
		}
	}
</script>
<style scoped>
    #nav ul{
    	width: 100%;
    	height: 30px;
    	margin: 0;
    }
	#nav ul li{
		list-style-type: none;
		float: left;
		width: 25%;
		height: 30px;
		border-top: 1px solid #aaa;
		line-height: 30px;	
	}
	#nav ul li a{
		color: #fff;
	}
    #nav{
    right: 0;
    bottom: 0;
    left: 0;
    position:fixed;
    text-align: center;
    background-color: #26a2ff;
    z-index: 100;
    }
@media only screen and (min-width: 400px){
   #nav{
   	font-size: 16px;
   }
}
@media only screen and (min-width: 500px) and (max-width:1200px){
    #nav{
    	font-size: 25px;
    }
    #nav ul li{
    	height: 40px;
    	line-height: 40px;
    }
}
</style>