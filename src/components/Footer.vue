<template>
	<div class="footer">
		<div class="darkBottomBg"></div>
		<div class="content">
			<div class="top">
				<div class="topContent">
					<div class="left">
						<div class="leftContent">
							<div class="title">联系我们</div>
							<div class="item">联系电话：18655533530</div>
							<div class="item">联系地址：江苏省南京市栖霞区兴智科技园A座</div>
						</div>
					</div>
					<div class="right">
						<div class="qrcode">
							<img src="../assets/images/myQRcode.png" alt="">
						</div>
						<div class="qrcode">
							<img src="../assets/images/myQRcode.png" alt="">
						</div>
					</div>
				</div>
			</div>
			<div class="bottom">
				<div class="left">
					<div class="menuItem" v-for="item in menus" :class="{active: item.active}" :key="item.name" @click="clickMenu(item.name)">
						{{item.label}}
						<div class="bottomLine"></div>
					</div>
				</div>
				<div class="mid" @click="goTop">
					<img src="../assets/images/gotop.png" alt="">
				</div>
				<div class="right">
					<div class="item">
						Copyright © 2020 艾隆文化传媒版权所有
					</div>
					<div class="item">
						备案号：苏ICP备11018372号-9 <span>创新</span><span>坚守</span><span>成就价值</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Footer",
		props:["menu"],
		data(){
			return{
				menus:this.menu
			}
		},
		methods: {
			goTop() {
				document.body.scrollIntoView({
				    behavior: 'smooth',
				    block: 'start'
				})
			},
			clickMenu(clickName){
				this.$router.push({
					name: clickName
				})
			}
		}
	}
</script>

<style lang="scss">
	.footer {
		margin-top: 80px;
		width: 100%;
		height: 466px;
		position: relative;

		.darkBottomBg {
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: 300px;
			background: #404040;
		}

		.content {
			position: absolute;
			left: 0;
			top: 0;
			bottom: 0;
			right: 0;

			.top {
				height: 318px;
				width: 100%;
				background: url(../assets/images/8.jpg) no-repeat center center;
				background-size: cover;
				padding: 40px 0;
				.topContent {
					background: rgba(0, 0, 0, 0.5);
					height: 100%;
					width: 80%;
					max-width: 1280px;
					margin: 0 auto;
					display: flex;
					.left{
						width: 50%;
						display: flex;
						justify-content: center;
						align-items: center;
						.leftContent{
							width: 310px;
							color: #fff;
							.title{
								line-height: 60px;
								font-size: 20px;
							}
							.item{
								font-size: 14px;
								line-height: 30px;
							}
						}
					}
					.right{
						width: 50%;
						display: flex;
						justify-content: space-around;
						align-items: center;
						padding-left: 60px;
						.qrcode{
							display: block;
							width: 140px;
							height: 140px;
							padding: 10px;
							border-radius: 10px;
							background-color: #fff;
							img{
								width: 100%;
							}
						}
					}
				}
			}

			.bottom {
				width: 80%;
				max-width: 1280px;
				margin: 0 auto;
				display: flex;
				color: #ababab;
				.left{
					flex: 1;
					display: flex;
					padding-top: 50px;
					.menuItem{
						margin-right: 40px;
						cursor: pointer;
					}
				}
				.mid{
					width: 100px;
					padding-top: 30px;
					cursor: pointer;
				}
				.right{
					flex: 1;
					text-align: right;
					padding-top: 35px;
					.item{
						line-height: 30px;
						span{
							padding-left: 5px;
						}
					}
				}
			}
		}
	}
</style>
