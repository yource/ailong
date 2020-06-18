<template>
	<div class="logoPage">
		<img src="../assets/images/logoPage/1.png" alt="">
		<img src="../assets/images/logoPage/2.png" alt="">
		<img src="../assets/images/logoPage/3.png" alt="">
		<img src="../assets/images/logoPage/4.png" alt="">
		<img src="../assets/images/logoPage/5.png" alt="" style="marign-top:25px">
	</div>
</template>

<script>
	export default {
		name: 'Logo',
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss">
.logoPage{
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	img{
		display: block;
	}
}
.mobile .logoPage{
	img{
		display: block;
		width: 100%;
	}
}
</style>
