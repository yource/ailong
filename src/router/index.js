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
		label: "首页",
		component: Home,
	},{
		path: 'case',
		name: 'case',
		label: "案例展示",
		component: Case,
	},{
		label:"关于我们",
		path: 'aboutUs',
		name: 'aboutUs',
		component: AboutUs,
	},{
		path: 'connect',
		name: 'connect',
		label: "联系我们",
		component: Connect,
	}]
}, ]

export default routes;
