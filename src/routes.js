import Home from './File/Home.vue'
import Vue from 'vue'
import Article from './File/Article.vue'
import Me from './File/me.vue'
import School from './File/schoolClub.vue'
import Inter from './File/interactive.vue'
import Page from './File/Page.vue'
// import UserLog from './File/UserLogin.vue'
import Login from './File/components/Login.vue'
import Private from './File/components/privateMessage.vue'
import Xiaobai from './File/components/xiaobai.vue'
import Books from './File/components/books.vue'
import Bus from './File/components/bus.vue'
import Test1 from './File/components/test1.vue'
import Test2 from './File/components/test2.vue'
import Text from './File/components/text.vue'




export default [
{
    path: '/home',
    component: Home
},
{
	path: 'article',
	component: Article
},
{
    path: '/me',
    component: Me
},
{ 
	path: '/',   //默认调到home这个主页
	redirect: '/home' 
},
{ 
	path: '*', 
	redirect: '/login' 
},
{
	path: '/school',
	component: School
},
{
	path: '/inter',
	component: Inter
},
{
	path: '/article',
	component: Article
},
{
    path: '/page',
    component: Page
},
// {
// 	path: '/userLog',
// 	component: UserLog
// },  
{
	path: '/login',        
	component: Login
},
{
	path: '/private',
	component: Private
},
{
	path: '/xiaobai',
    component: Xiaobai
},
{
	path: '/books',
	component: Books
},
{
	path: '/bus',
	component: Bus
},
{
	path: '/test1',
	component: Test1
},
{
	path: '/test2',
	component: Test2
},
{
	path: '/text',
	component: Text
}

]