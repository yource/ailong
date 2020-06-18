<template>
	<div class="header">
		<div class="headerCon widthControl">
			<div class="logo">
				<img src="../assets/logo.png" alt="">
			</div>
			<ul class="menu" v-if="!isMobile">
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
			<el-dropdown v-if="isMobile" :hide-on-click="true" hide-timeout="0">
				<span class="el-dropdown-link menuIcon" @click="showDropdown">
					<i class="iconfont icon-weibiaoti15"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<div class="dropdownItem" v-for="item in menus" @click="handleCommand(item.name)" :key="item.name" :class="{active: item.name == active}">{{item.label}}</div>
				</el-dropdown-menu>
			</el-dropdown>
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
				active: "",
				isMobile: this.$root.isMobile
			}
		},
		methods: {
			clickMenu(clickName) {
				this.$router.push({
					name: clickName
				})
			},
			handleCommand(name) {
				document.getElementsByClassName("el-dropdown-menu")[0].style.display="none";
				this.$router.push({
					name
				})
			},
			showDropdown(){
				setTimeout(()=>{
					document.getElementsByClassName("el-dropdown-menu")[0].style.display="block";
				},300)
			}
		},
		created() {
			if (this.$route.name == "logo" || this.$route.name == "website") {
				this.active = "brand"
			} else {
				this.active = this.$route.name
			}
		},
		watch: {
			$route(to, from) {
				if (to.name == "logo" || to.name == "website") {
					this.active = "brand"
				} else {
					this.active = to.name
				}
			}
		}
	}
</script>

<style lang="scss">
	.pc .header {
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
				height: 80px;
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

	.mobile .header .headerCon {
		position: fixed;
		z-index: 9;
		top: 0;
		left: 0;
		right: 0;
		height: 60px;
		display: flex;
		background: #fff;
		border-bottom: 1px solid #dedede;
		box-shadow: 0 0 15px #666;

		.logo {
			flex: 1;
			padding: 5px 0 0 10px;

			img {
				height: 50px;
			}
		}

		.el-dropdown {
			padding-right: 10px;
			padding-top: 7px;

			.menuIcon {
				display: block;
				box-sizing: border-box;
				width: 40px;
				height: 40px;
				padding-top: 6px;
				padding-left: 9px;
				border-radius: 50%;
				border: 1px solid #dedede;

				i.iconfont {
					font-size: 20px;
				}
			}
		}
	}

	.mobile .dropdownItem{
		width: 100px;
		line-height: 40px;
		text-align: center;
		border-bottom: 1px solid #efefef;
		&.active {
			color: #ff9c21;
		}
	}
</style>
