<template>
	<div class="header">
		<div class="headerCon">
			<div class="logo">
				<img src="../assets/logo.png" alt="">
			</div>
			<ul class="menu">
				<li v-for="item in menus" :class="{active: item.name == active}" :key="item.name" @click="clickMenu(item.name)">
					{{item.label}}
					<div class="bottomLine"></div>
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
				active: this.$route.name
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
				this.active = to.name
			}
		}
	}
</script>

<style lang="scss">
	.header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 80px;
		background: rgba(255, 255, 255, 0.95);
		
		.headerCon{
			display: flex;
			width: 80%;
			max-width: 1280px;
			margin: 0 auto;
			height: 80px;
		}
		.logo {
			height: 80px;
			padding-top: 10px;
			flex: 1;

			img {
				width: 60px;
				height: 60px;
			}
		}

		.menu {
			display: flex;
			align-items: center;

			li {
				width: 100px;
				height: 60px;
				line-height: 60px;
				text-align: center;
				cursor: pointer;
				transition: all 0.3s;
				position: relative;
				font-size: 16px;

				.bottomLine {
					width: 0px;
					height: 3px;
					border-radius: 3px;
					background: #ffb161;
					opacity: 0;
					transition: all 0.2s;
					position: absolute;
					left: 50%;
					bottom: 5px;
					transform: translateX(-50%);
				}

				&.active {
					.bottomLine {
						opacity: 1;
						width: 80px;
					}
				}

				&:hover {
					color: #ff7861;

				}

			}
		}

	}
</style>
