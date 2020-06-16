<template>
	<div class="homePage">
		<div class="slider">
			<el-carousel trigger="click" height="600px" :interval="4500">
				<el-carousel-item v-for="item in slider" :key="item">
					<div class="sliderItem" :style="{backgroundImage:'url('+item+')'}"></div>
				</el-carousel-item>
			</el-carousel>
		</div>
		<div class="section section1">
			<div class="sectionCon widthControl">
				<div class="title">营销推广</div>
				<div class="subTitle"><em></em><span>Marketing Promotion</span></div>
				<div class="sectionMain">
					<div class="sectionItem">
						<div class="item" :style="{backgroundImage:'url('+section1[0]+')'}">
							<div class="itemCon">
								<div class="title1">Window merchandise</div>
								<div class="title2">橱窗商品</div>
							</div>
						</div>
						<div class="itemBottom"><i class="el-icon-top-right"></i><span>将您的商品挂在热门平台的橱窗商品中展示</span></div>
					</div>
					<div class="sectionItem">
						<div class="item" :style="{backgroundImage:'url('+section1[1]+')'}">
							<div class="itemCon">
								<div class="title1">Video advertising</div>
								<div class="title2">视频广告</div>
							</div>
						</div>
						<div class="itemBottom"><i class="el-icon-top-right"></i><span>专业拍摄视频，并投放于视频平台热门账号下</span></div>
					</div>
					<div class="sectionItem">
						<div class="item" :style="{backgroundImage:'url('+section1[2]+')'}">
							<div class="itemCon">
								<div class="title1">through livestreaming</div>
								<div class="title2">直播带货</div>
							</div>
						</div>
						<div class="itemBottom"><i class="el-icon-top-right"></i><span>在高粉账号下进行直播带货，引爆消费</span></div>
					</div>
				</div>
			</div>
		</div>
		<div class="section section2 ">
			<div class="sectionCon widthControl">
				<div class="title">代理运营</div>
				<div class="subTitle"><em></em><span style="background:#f7f7f7">Agency operation</span></div>
				<div class="sectionMain">
					<div class="sectionItem sectionItem1" :style="{backgroundImage:'url('+section2[0]+')'}">
						<div class="item">
							专业的视频拍摄，营销推广，帮您建设自己的抖音号
						</div>
					</div>
					<div class="sectionItem sectionItem2">
						<div class="item">
							<div class="left">
								<img src="../assets/images/section2_2.png" alt="">
							</div>
							<div class="right">
								<div class="itemTitle">快手短视频</div>
								<div class="sub">快手用户主要分布在二三线城市，内容形式为照片、视频和直播。艾隆传媒专业代理快手业务，专注产品，帮您建立自己的快手号。</div>
							</div>
						</div>
						<div class="item">
							<div class="left">
								<img src="../assets/images/section2_3.png" alt="">
							</div>
							<div class="right">
								<div class="itemTitle">今日头条</div>
								<div class="sub">头条会根据每个用户的兴趣、位置等多个维度来推送信息。艾隆传媒专业代理今日头条业务，制作内容，定位客户，精准推广。</div>
							</div>
						</div>
						<div class="item">
							<div class="left">
								<img src="../assets/images/section2_4.png" alt="">
							</div>
							<div class="right">
								<div class="itemTitle">微信公众号</div>
								<div class="sub">微信公众号可以发布信息，也能嫁接H5应用。艾隆传媒专业代理微信公众号，发布文章，管理客户，帮您构建线上商城。</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="section section3 ">
			<div class="sectionCon widthControl">
				<div class="title">品牌设计</div>
				<div class="subTitle"><em></em><span>Brand design</span></div>
				
				<div class="item1">
					<el-carousel :interval="2000" type="card" height="320px" indicator-position="none" style="width:1000px;margin: 50px auto;" trigger="click">
					    <el-carousel-item>
							<div class="sliderItem">
								<img src="../assets/images/company/1_small.png" alt="">
							</div>
					    </el-carousel-item>
						<el-carousel-item>
							<div class="sliderItem">
								<img src="../assets/images/company/2_small.png" alt="">
							</div>
						</el-carousel-item>
						<el-carousel-item>
							<div class="sliderItem">
								<img src="../assets/images/company/3_small.png" alt="">
							</div>
						</el-carousel-item>
						<el-carousel-item>
							<div class="sliderItem">
								<img src="../assets/images/company/4_small.png" alt="">
							</div>
						</el-carousel-item>
						<el-carousel-item>
							<div class="sliderItem">
								<img src="../assets/images/company/5_small.png" alt="">
							</div>
						</el-carousel-item>
						<el-carousel-item>
							<div class="sliderItem">
								<img src="../assets/images/company/6_small.png" alt="">
							</div>
						</el-carousel-item>
					  </el-carousel>
				</div>
				<div class="title2">艾隆传媒拥有专业设计师和制作团队，为您提供<span>LOGO</span>设计、<span>VI</span>设计以及<span>官网</span>制作等服务，为您提升公司形象，增加品牌竞争力</div>
				<div class="title3">迅速交稿 · 免费修改 · 满意为止</div>
				<div class="item2">
					<img src="../assets/images/logos/1.png" alt="">
					<img src="../assets/images/logos/2.png" alt="">
					<img src="../assets/images/logos/3.png" alt="">
					<img src="../assets/images/logos/4.png" alt="">
					<img src="../assets/images/logos/5.png" alt="">
					<img src="../assets/images/logos/6.png" alt="">
					<img src="../assets/images/logos/7.png" alt="">
					<img src="../assets/images/logos/8.png" alt="">
				</div>
				<div class="item2">
					<img src="../assets/images/logos/9.png" alt="">
					<img src="../assets/images/logos/10.png" alt="">
					<img src="../assets/images/logos/11.png" alt="">
					<img src="../assets/images/logos/12.png" alt="">
					<img src="../assets/images/logos/13.png" alt="">
					<img src="../assets/images/logos/14.png" alt="">
					<img src="../assets/images/logos/15.png" alt="">
					<img src="../assets/images/logos/16.png" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import banner1 from '../assets/images/banner1.png'
	import banner2 from '../assets/images/banner2.png'
	import section1_1 from '../assets/images/section1_1.png'
	import section1_2 from '../assets/images/section1_2.png'
	import section1_3 from '../assets/images/section1_3.png'
	import section2_1 from '../assets/images/section2_1.png'

	export default {
		name: 'Home',
		data() {
			return {
				slider: [banner1, banner2],
				section1:[section1_1,section1_2,section1_3],
				section2:[section2_1]
			}
		}
	}
</script>

<style lang="scss">
	
	.homePage {
		.slider {
			width: 100%;
			height: 600px;

			.sliderItem {
				width: 100%;
				height: 600px;
				position: relative;
				background-position: center;
				background-repeat: no-repeat;
				background-size: cover;
			}
		}
		.sectionCon{
			padding: 50px 0;
			
			.title{
				line-height: 60px;
				font-size: 32px;
				text-align: center;
				color:#543b3b;
				letter-spacing: 4px;
			}
			.subTitle{
				height: 50px;
				line-height: 50px;
				font-size: 18px;
				color: #634d37;
				text-align: center;
				text-transform: uppercase;
				position: relative;
				span{
					padding: 0 20px;
					background:#fff;
					display: block;
					position: absolute;
					height: 50px;
					top: 0;
					left: 50%;
					bottom: 0;
					transform: translateX(-50%);
				}
				em{
					position: absolute;
					left: 0;
					right: 0;
					top: 24px;
					height: 2px;
					background: #f39800;
				}
			}
		}
		.sectionMain{
			margin-top: 30px;
		}
		.section1 .sectionMain{
			display: flex;
			width: 100%;
			min-height: 250px;
			justify-content: space-between;
			.sectionItem{
				width: 30%;
				.item{
					height: 180px;
					background-repeat: no-repeat;
					background-size: cover;
					background-position: center;
					.itemCon{
						width: 100%;
						height: 100%;
						background: rgba(0,0,0,0.5);
						color: #fff;
						transition: all 0.2s;
						text-align: center;
						padding-top: 70px;
						&:hover{
							background: rgba(0,0,0,0.65);
						}
						.title1{
							font-size: 14px;
							letter-spacing: 3px;
							text-transform: uppercase;
						}
						.title2{
							font-size: 20px;
						}
					}
				}
				.itemBottom{
					padding-top: 20px;
					font-size: 14px;
					line-height: 30px;
					display: flex;
					align-items: center;
					i{
						font-size: 30px;
						padding-right: 20px;
						color:#f39800;
					}
				}
			}
		}
		.section2{
			background:#f5f6f7;
			padding-top: 20px;
			padding-bottom: 70px;
			.sectionMain{
				padding-top: 30px;
				display: flex;
				.sectionItem1{
					flex: 1.5;
					margin-right: 60px;
					height: 500px;
					background-repeat: no-repeat;
					background-size: cover;
					background-position: top center;
					display: flex;
					flex-direction: column-reverse;
					border-radius: 10px;
					overflow: hidden;
					transition: all 0.2s;
					box-shadow: 0 2px 6px #999;
					.item{
						font-size: 18px;
						text-align: center;
						color: #fff;
						height: 100px;
						line-height: 150px;
						background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
						transition: all 0.2s;
					}
					&:hover{
						box-shadow: 0 4px 15px #333;
						.item{
							height: 130px;
							line-height: 190px;
						}
					}
				}
				.sectionItem2{
					flex: 2;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.item{
						height: 140px;
						border-radius: 10px;
						overflow: hidden;
						transition: all 0.2s;
						box-shadow: 0 2px 6px #ccc;
						background-color: #fff;
						display: flex;
						.left{
							width: 200px;
						}
						.right{
							padding-left: 30px;
							padding-right: 30px;
							padding-top: 5px;
							.itemTitle{
								font-size: 20px;
								line-height: 50px;
								letter-spacing: 1px;
								transition: all 0.2s;
								text-align: left;
							}
							.sub{
								font-size: 14px;
								line-height: 28px;
								color: #666;
							}
						}
						&:hover{
							box-shadow: 0 4px 15px #999;
							background: #fff;
							.title{
								color:#f39800;
							}
						}
					}
				}
			}
		}
		.section3{
			.item1{
				.sliderItem{
					width: 500px;
					height: 320px;
					padding-top:10px;
					background: #333;
					img{
						display: block;
						width: 480px;
						height: 300px;
						margin: 0 auto;
					}
				}
			}
			.title2{
				font-size: 16px;
				text-align: center;
				line-height: 50px;
				padding-top: 30px;
				span{
					color: #ff6700;
					padding: 0 2px;
				}
			}
			.title3{
				text-align: center;
				font-size: 20px;
				letter-spacing: 2px;
				line-height: 50px;
				padding-bottom: 60px;
			}
			.item2{
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				img{
					width: 120px;
					height: 120px;
				}
			}
		}
	}
</style>
