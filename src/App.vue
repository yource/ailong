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

<style>
	#app{
		padding-top: 90px;
	}
	.pc .widthControl{
		width: 80%;
		min-width:1280px;
		max-width: 1600px;
		margin: 0 auto;
	}
</style>
