import Login from '@/pages/login'
import Main from '@/pages/main'
import Home from '@/pages/home'
import AboutUs from '@/pages/aboutUs'

const routes = [{
	path: "/login",
	name: "login",
	component: Login
}, {
	path: '/',
	name: 'main',
	component: Main,
	children:[{
		path: 'home',
		name: 'home',
		component: Home,
	},{
		path: 'aboutUs',
		name: 'aboutUs',
		component: AboutUs,
	}]
}, ]

export default routes;
