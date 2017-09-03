<template>
  <div id="inter">
	  <mt-header title="新闻阅览">
	   <mt-button icon="more" slot="right"></mt-button>
	</mt-header>

	 <div class="content mt40">
      <div class="newsList">
        <ul>
          <li v-for="item in arrList">
            <a href="javascript:;">
              <h4>{{item.title}}</h4>
              <p>{{item.detail}}</p>
              </a>
          </li>
              
          </ul>
      </div>
   </div>
  </div>


</template>

<script>
  export default {
    data(){
      return {
        arrList:[]
      }
    },
    mounted(){
      this.fetchData()  //获取数据
    },
    methods:{
      fetchData(){
        var _this=this;
        this.$http.get('src/data/follow.data').then(function(res){
          console.log( res.data);
          //setTimeout(function(){
            _this.arrList=res.data;
          //},1000);
        }).catch(function(err){
          console.log(err);
        })
      }
    }
  }
</script>


<style scoped>
  body{
    padding: 0;
    margin: 0;
  }
  .mt40{
    margin:40px 0;
  }
  h4, p{
  color: #000;
}
.newsList{
    background-color: rgba(221,221,221,.3);
}
.newsList ul{
    margin: 0;
    padding:0;
}
.newsList ul li{
  list-style-type: none;
  width: 95%;
  margin: 0 auto;
  border-bottom: 1px dashed #666666;
  padding-top: 10px;
}
@import '../assets/css/head.css';

@media only screen and (min-width: 500px) and (max-width:800px){
 .newsList ul li  h4{
    font-size: 30px;
   }
 .newsList ul li  p{
    font-size: 21px;
   }
.newsList ul li{
  padding-top: 20px;
  line-height: 35px;
}
}
</style>