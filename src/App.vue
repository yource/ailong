<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
	.pc{
		#app{
			padding-top: 90px;
		}
		.widthControl{
			width: 80%;
			min-width:1280px;
			max-width: 1600px;
			margin: 0 auto;
		}
	}
	.mobile{
		#app{
			padding-top: 60px;
		}
	}
</style>
