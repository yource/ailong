<template>
	<div class="connectPage widthControl">
		<div class="about">
			<div class="logo"><img src="../assets/images/logo1.png" alt=""></div>
			<p>艾隆传媒是中国领先的新媒体传媒运营公司，专注于为中国中小企业提供品牌策略+创意设计+落地执行的全方位服务咨询及整体解决方案。</p>
			<p>艾隆传媒一直致力于广告创意、品牌全案等领域的研究与推进，公司具有成熟的品牌运作能力，尤其是在品牌全案领域，有着一套独立而完整的品牌全案系统，即从品牌的策划、设计、传播、到管理的全方位品牌整体解决方案；系统而全面的帮助客户重新塑造和升级品牌，提升品牌价值，让品牌焕然新生,为中国企业实现品牌化提供系统而全面的支持。
			唯有掌握创意与商业的双向法则，才能使品牌立于不败之地。我们也希望通过我们与中国各界企业的携手努力，为世界建立值得信任与尊敬的中国品牌形象，为“中国智造”的国际化品牌贡献自己的力量。</p>
		</div>
		<div class="people">
			<div class="peopleItem">
				<div class="place">
					<img src="../assets/images/place1.png" alt="">
					<div class="placeBottom">
						<div class="place1">浙江办事处</div>
						<div class="place2"><i class="el-icon-location-information"></i><span style="padding-left: 5px;">义乌国际生产资料市场A4区20502</span></div>
					</div>
				</div>
				<div class="peopleInfo">
					<img src="../assets/images/people1.png" alt="">
					<div class="title">客户经理：夏天</div>
				</div>
				<div class="qrcode">
					<div class="qrcodeItem">
						<div class="qrcodeImg">
							<img src="../assets/images/myQRcode1.png" alt="">
						</div>
						<div class="codeNumber">
							微信:chinazz2020
						</div>
					</div>
					<div class="qrcodeItem">
						<div class="qrcodeImg">
							<img src="../assets/images/qqQRcode1.png" alt="">
						</div>
						<div class="codeNumber">
							QQ:2451007818
						</div>
					</div>
				</div>
			</div>
			<div class="peopleItem">
				<div class="place">
					<img src="../assets/images/place2.png" alt="">
					<div class="placeBottom">
						<div class="place1">江苏办事处</div>
						<div class="place2"><i class="el-icon-location-information"></i><span style="padding-left: 5px;">南京市栖霞区兴智路6号兴智科技园A座12楼</span></div>
					</div>
				</div>
				<div class="peopleInfo">
					<img src="../assets/images/people2.png" alt="">
					<div class="title">客户经理：阳阳</div>
				</div>
				<div class="qrcode">
					<div class="qrcodeItem">
						<div class="qrcodeImg">
							<img src="../assets/images/myQRcode2.png" alt="">
						</div>
						<div class="codeNumber">
							微信:18655533530
						</div>
					</div>
					<div class="qrcodeItem">
						<div class="qrcodeImg">
							<img src="../assets/images/qqQRcode2.png" alt="">
						</div>
						<div class="codeNumber">
							QQ:1135242645
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Connect'
	}
</script>

<style lang="scss">
	.connectPage{
		padding: 50px;
		.about{
			position: relative;
			margin-top: 100px;
			padding: 130px 60px 30px;
			margin-bottom: 50px;
			background: #443f3c;
			color: #ffd8a8;
			border-radius: 10px;
			.logo{
				width: 200px;
				height: 200px;
				padding: 10px;
				background: #fff;
				border-radius: 50%;
				position: absolute;
				top: -100px;
				left: calc(50% - 100px);
				img{
					width: 100%;
					height: 100%;
				}
				box-shadow: 0 0 5px #ce5124;
			}
			p{
				text-indent: 2em;
				margin-bottom: 15px;
				font-size: 16px;
				line-height: 32px;
			}
		}
		.people{
			.peopleItem{
				height: 250px;
				box-shadow: 0 2px 15px #ccc;
				border-radius: 10px;
				overflow: hidden;
				margin-bottom: 50px;
				display: flex;
				.place{
					width:420px;
					border-right: 1px solid #efefef;
					position: relative;
					img{
						width: 100%;
						height: 100%;
					}
					.placeBottom{
						position: absolute;
						bottom: 0;
						left: 0;
						right: 0;
						height: 80px;
						padding-top: 10px;
						padding-left: 15px;
						background: rgba(45, 45, 47, 0.79);
						color: #fff;
						.place1{
							font-size: 20px;
							line-height: 35px;
						}
						.place2{
							font-size: 14px;
							line-height: 25px;
						}
					}
				}
				.peopleInfo{
					text-align: center;
					flex: 1;
					border-right: 1px solid #dedede;
					img{
						display: inline-block;
						width: 120px;
						height: 120px;
						border-radius: 50%;
						margin-top: 40px;
						margin-bottom: 20px;
					}
				}
				.qrcode{
					flex: 2;
					display: flex;
					justify-content: space-around;
					.qrcodeItem{
						text-align: center;
						font-size: 14px;
						color: #666;
						padding-top: 40px;
						.codeNumber{
							line-height: 40px;
						}
						img{
							width: 140px;
							height: 140px;
						}
					}
				}
			}
		}
	}
</style>
