import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import './assets/css/base.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';
import './assets/font/iconfont.css'
import App from './App.vue'
import routes from './router'
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
	routes,
	scrollBehavior (to, from, savedPosition) {
	  return { x: 0, y: 0 }
	}
})

var windowWidth = document.body.clientWidth || window.screen.width;
if (windowWidth < 1280) {
	document.body.classList.add("mobile");
} else {
	document.body.classList.add("pc");
}

new Vue({
	data:{
		isMobile: !!(windowWidth<1280)
	},
	router,
	render: h => h(App),
}).$mount('#app');
