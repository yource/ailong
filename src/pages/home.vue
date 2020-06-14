<template>
	<div class="homePage">
		<div class="slider">
			<Swiper :autoPlay='true' :showIndicator='true' interval="4000" duration="500">
				<Slide>
					<div class="slideItem" :style="bgImg[0]">
						
					</div>
				</Slide>
				<Slide>
					<div class="slideItem" :style="bgImg[1]">
						
					</div>
				</Slide>
			</Swiper>
		</div>
		<div class="section section1">
			<div class="title">营销推广</div>
			<div class="item">
				橱窗商品
			</div>
			<div class="item">
				视频广告
			</div>
			<div class="item">
				直播带货
			</div>
		</div>
		<div class="section section2">
			<div class="title">代理运营</div>
			<div class="item">
				抖音
			</div>
			<div class="item">
				快手
			</div>
			<div class="item">
				今日头条
			</div>
			<div class="item">
				微信公众号
			</div>
		</div>
		<div class="section section2">
			<div class="title">品牌设计</div>
			<div class="item">
				LOGO设计
			</div>
			<div class="item">
				VI设计
			</div>
			<div class="item">
				网站制作
			</div>
			<div class="item">
				小程序制作
			</div>
		</div>
	</div>
</template>

<script>
	import {
		Swiper,
		Slide
	} from 'vue-swiper-component';
	import banner1 from '../assets/images/banner1.jpg'
	import banner2 from '../assets/images/banner2.jpg'

	export default {
		name: 'Home',
		components: {
			Swiper,
			Slide
		},
		data() {
			return {
				bgImg:[{
					backgroundImage: "url(" + banner1 + ")"
				},{
					backgroundImage: "url(" + banner2 + ")"
				}]
			}
		}
	}
</script>

<style lang="scss">
	.homePage{
		.slider{
			width: 100%;
			height: 600px;
			.slideItem{
				width: 100%;
				height: 600px;
				position: relative;
				background-position: center;
				background-repeat: no-repeat;
				background-size: cover;
			}
		}
	}
</style>
