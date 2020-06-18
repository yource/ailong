<template>
	<div class="brandPage widthControl">
		<div class="tabs">
			<div :class="[active == 'logo'? 'active':'', 'tabItem']" @click="go('logo')">
				<span>LOGO设计</span> <i class="el-icon-caret-right"></i>
			</div>
			<div :class="[active == 'website'? 'active':'', 'tabItem']"  @click="go('website')">
				<span>网站制作</span> <i class="el-icon-caret-right"></i>
			</div>
		</div>
		<div class="main">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Brand',
		data(){
			return{
				active:this.$route.name
			}
		},
		methods:{
			go(name){
				this.$router.push({
					name:name
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
	.pc .brandPage{
		padding: 50px 0;
		display: flex;
		.tabs{
			width: 200px;
			border-right: 2px solid #ddd;
			.tabItem{
				line-height: 60px;
				font-size: 16px;
				cursor: pointer;
				transition: all 0.2s;
				padding-left: 20px;
				border-bottom: 1px solid #ddd;
				span{
					display: inline-block;
					width: 120px;
					vertical-align: middle;
				}
				i{
					font-size: 20px;
					vertical-align: middle;
					color: #ccc;
				}
				&:hover{
					background: #efefef;
				}
				&.active{
					color:#ff9c21;
					i{
						color:#ff9c21;
					}
				}
			}
		}
		.main{
			min-height: 500px;
			flex: 1;
		}
	}
	.mobile .brandPage{
		.tabs{
			position: fixed;
			top: 60px;
			left: 0;
			right: 0;
			height: 60px;
			background: rgba(255,255,255,0.95);
			display: flex;
			border-bottom: 1px solid #dedede;
			padding-top: 10px;
			.tabItem{
				flex: 1;
				text-align: center;
				line-height: 50px;
				&.active{
					color: #ff9c21;
				}
			}
		}
		.main{
			padding-top: 60px;
		}
	}
</style>
