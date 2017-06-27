<template>
	<div>
		<div class="origin_banner">
			<m-swiper :data="swiperList" :loop="true" :initIndex="1" :auto="3000"></m-swiper>
			<div class="opacity_mask clearfix">
				<div class="opacity_mask_left fl">
					<h3>正在旅途..</h3>
					<p>全都是我喜欢的歌，我们去大草原的...</p>
				</div>
				<div class="opacity_mask_right fr">
					<star></star>
					<enshrine></enshrine>
				</div>
			</div>
		</div>
		<div class="segmentation_line"><img src="../assets/images/list_img1_03.png"></div>
		<div class="moreInfo">
			<moreInfo></moreInfo>
		</div>
	</div>
</template>
<script type="text/javascript">
	import moreInfo from '../common/origin_more_info'
	import enshrine from '../common/enshrine'
	import star from '../common/start'
	export default {
		data () {
			return {
				swiperList: [
				{
				img: '../../../static/img/origin_banner1.png'
				},
				{
				img: '../../../static/img/origin_banner2.png'
				},
				{
				img: '../../../static/img/origin_banner3.png'
				}]
			}
		},
		components: {
			moreInfo,
			enshrine,
			star

		}
	}
</script>
<style type="text/css">
	.segmentation_line {
		margin-top: 1.2rem;
	}
	.moreInfo {
		margin-top: 0.3rem;
		margin-bottom: 1.2rem;
		text-align: left;
	}
	.opacity_mask_right {
		position: absolute;
		right: 0.3rem;
		top: 0.1rem;
		font-size: 0.24rem;
		color: #FFF;
	}
	.opacity_mask_left {
		width: 75%;
		text-align: left;
		padding: 0 0.3rem;
	}
	
	.origin_banner {
		/* padding: 0 0.3rem; */
		width: 100%;
		height: 4.86rem;
		/* position: relative; */
		/* margin-top: 1rem; */
	}
	.origin_banner ul {
		width: 100%;
		height: 100%;
	}
/* 	.origin_banner ul li {
		width: 100%;
		height: 100%;
		position: absolute;
		
	} */
	.opacity_mask {
		position: absolute;
		left: 0;
		background: rgba(0,0,0,0.8);
		z-index: 20;
		width: 100%;
		height: 1.3rem;
	}
	.opacity_mask h3{
		font-size: 0.3rem;
		color: #f1f1f1;
		margin-top: 0.2rem;
		margin-bottom: 0.1rem;
	}
</style>
