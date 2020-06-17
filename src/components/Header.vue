<template>
	<div class="header">
		<div class="headerCon widthControl">
			<div class="logo">
				<img src="../assets/logo.png" alt="">
			</div>
			<ul class="menu">
				<li v-if="item.name!='connect'" v-for="item in menus" :class="{active: item.name == active}" :key="item.name"
				 @click="clickMenu(item.goChild || item.name)">
					<div class="label">{{item.label}}</div>
					<div class="label label2">{{item.label2}}</div>
					<div class="bottomLine"></div>
				</li>
				<div class="cutLine">
					<img src="../assets/images/cut-line.png">
				</div>
				<li :class="[active == 'connect'? 'active':'', 'connect']" @click="clickMenu('connect')">
					<div class="label">联系我们</div>
					<div class="label label2">CONNECT US</div>
					<div class="bottomLine"></div>
					<i class="iconfont icon-kefu"></i>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Header",
		props: ["menu"],
		data() {
			return {
				menus: this.menu,
				active: this.$route.name,
				isMobile: !!localStorage.getItem("isMobile")
			}
		},
		methods: {
			clickMenu(clickName) {
				this.$router.push({
					name: clickName
				})
			}
		},
		watch: {
			$route(to, from) {
				if(to.name=="logo" || to.name=="website"){
					this.active = "brand"
				}else{
					this.active = to.name
				}
			}
		}
	}
</script>

<style lang="scss">
	.header {
		color: #714b2a;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 90px;
		background: rgba(255, 255, 255, 0.95);
		z-index: 9;
		border-bottom: 1px solid #efefef;

		.headerCon {
			display: flex;
			height: 90px;
		}

		.logo {
			height: 80px;
			padding-top: 5px;
			flex: 1;

			img {
				height:80px;
				width: auto;
			}
		}

		.menu {
			display: flex;
			align-items: center;

			li {
				width: 160px;
				height: 80px;
				text-align: center;
				cursor: pointer;
				position: relative;
				font-size: 18px;
				padding-top: 22px;

				.bottomLine {
					width: 0px;
					height: 4px;
					border-radius: 3px;
					background: #ff9c21;
					opacity: 0;
					transition: all 0.2s;
					position: absolute;
					left: 50%;
					bottom: -5px;
					transform: translateX(-50%);
				}

				&.connect {
					line-height: 70px;
					width: 150px;
					padding-right: 30px;

					i.iconfont {
						line-height: 55px;
						display: block;
						position: absolute;
						right: 0px;
						top: 10px;
						font-size: 36px;
						color: #5c6288;
					}
				}

				
				
				.label {
					line-height: 24px;
					letter-spacing: 1px;
					transition: all 0.3s;
				
					&.label2 {
						font-size: 12px;
						color: #cecac3;
						line-height: 24px;
					}
				}
				&.active {
					color: #000;
					.bottomLine {
						opacity: 1;
						width: 100px;
					}
				
					&.connect {
						.bottomLine {
							width: 120px;
						}
					}
				}

				&:hover {
					color: #ff7861;

					.label2 {
						color: #ff7861;
					}
				}

			}

			.cutLine {
				margin: 0 20px;
			}
		}

	}
</style>
