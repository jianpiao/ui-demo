import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui'
import store from './store/store'
import axios  from 'axios'

import Loading from './File/loading'
import 'mint-ui/lib/style.css'

import VueRouter from 'vue-router'
import routes from './routes'
import VueAMap from 'vue-amap'

Vue.use(VueRouter)
Vue.use(Mint)
Vue.use(Loading)
// Vue.user(VueAMap)

// // 初始化vue-amap
// VueAMap.initAMapApiLoader({
//   // 申请的高德key
//   key: '3066ca1bf5996b7dfe83131a81c74fdb',
//   // 插件集合
//   plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
//   uiVersion: '1.0' // 版本号
// });


Vue.use(VueAMap)

// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 申请的高德key
  key: '3066ca1bf5996b7dfe83131a81c74fdb',
  // 插件集合
  plugin: ['Autocomplete', 'PlaceSearch', 'Scale', 'OverView', 'ToolBar', 'MapType', 'PolyEditor', 'AMap.CircleEditor'],
  uiVersion: '1.0' // 版本号
})

//关于axios配置
axios.interceptors.request.use(function(config){
	//配置发送请求的信息
	store.dispatch('showLoading')
	return config//返回自己的配置信息
},function(error){
	return Promise.reject(error)
})

axios.interceptors.request.use(function(response){
	//配置请求回来的信息
	store.dispatch('hideLoading')
	return response//返回自己的配置信息
},function(error){
	return Promise.reject(error)
})


/*axios.defaults.baseURL = (process.env.NODE_ENV !=='production' ? config.dev.httpUrl:config.build.httpUrl);
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; 这个是设置post头部信息*/
//axios.defaults.baseURL='http://localhost:8082/';
Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  挂到this.$http就可以了


const router= new VueRouter({
	mode: 'history', 
	scrollBehavior: ()=> ({ y:0 }),
	routes
})
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})

