import Login from '@/pages/login'
import Main from '@/pages/main'
import Home from '@/pages/home'
import Brand from '@/pages/brand'
import Media from '@/pages/media'
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
		label: "媒体运营",
		label2:"NEW MEDIA",
		component: Media,
	},{
		path: 'brand',
		name: 'brand',
		label: "品牌设计",
		label2:"BRAND BUILD",
		component: Brand,
	},{
		path: 'connect',
		name: 'connect',
		label: "联系我们",
		component: Connect,
	}]
}, ]

export default routes;
