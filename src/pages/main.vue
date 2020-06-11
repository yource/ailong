<template>
	<div class="mainPage">
		<Header :menu="menu"></Header>
		<router-view></router-view>
		<Footer :menu="menu"></Footer>
	</div>
</template>

<script>
	import routes from '@/router/index.js'
	import Header from '@/components/Header'
	import Footer from '@/components/Footer'
	export default {
	  name: 'Main',
	  components:{Header,Footer},
	  data(){
		  return {
			  menu:[]
		  }
	  },
	  created(){
		  var currentRoute = this.$route.name;
		  this.menu = routes[1].children;
	  }
	}
</script>

<style>
	
</style>
