import Login from '@/pages/login'
import Main from '@/pages/main'
import Home from '@/pages/home'
import AboutUs from '@/pages/aboutUs'
import Case from '@/pages/case'
import Connect from '@/pages/connect'

const routes = [{
	path: "/login",
	name: "login",
	component: Login
}, {
	path: '/',
	name: 'main',
	component: Main,
	redirect: '/home',
	children:[{
		path: 'home',
		name: 'home',
		label: "首 页",
		label2:"HOME",
		component: Home,
	},{
		path: 'media',
		name: 'media',
		label: "新媒体",
		label2:"NEW MEDIA",
		component: Case,
	},{
		path: 'brand',
		name: 'brand',
		label: "品牌建设",
		label2:"BRAND BUILD",
		component: Case,
	},{
		path: 'connect',
		name: 'connect',
		label: "联系我们",
		component: Connect,
	}]
}, ]

export default routes;
