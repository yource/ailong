<template>
	<div class="websitePage">
		<img src="../assets/images/websitePage/1.png" alt="">
		<img src="../assets/images/websitePage/2.png" alt="">
		<img src="../assets/images/websitePage/3.png" alt="">
		<img src="../assets/images/websitePage/4.png" alt="">
		<img src="../assets/images/websitePage/5.png" alt="">
	</div>
</template>

<script>
	export default {
		name: 'Website',
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss">
.websitePage{
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	img{
		display: block;
	}
}
</style>
