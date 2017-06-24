<template>
	<div>
		<div class="origin_banner">
			<ul>
				<li><img :src="origin_banner1"></li>
				<li><img :src="origin_banner2"></li>
				<li><img :src="origin_banner3"></li>
			</ul>
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
			<moreInfo>
			</moreInfo>
			<moreInfo></moreInfo>
			<moreInfo></moreInfo>
			<moreInfo :bgcolor="bgcolor"></moreInfo>
		</div>
	</div>
</template>
<script type="text/javascript">
	import moreInfo from '../common/origin_more_info'
	export default {
		data () {
			return {
				origin_banner1: '../../../static/img/origin_banner1.png',
				origin_banner2: '../../../static/img/origin_banner2.png',
				origin_banner3: '../../../static/img/origin_banner3.png'
			}
		},
		components: {
			moreInfo
		}
	}
</script>
<style type="text/css">
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
		padding: 0 0.3rem;
		width: 100%;
		height: 4.86rem;
		position: relative;
		margin-top: 1rem;
	}
	.origin_banner ul {
		width: 100%;
		height: 100%;
	}
	.origin_banner ul li {
		width: 100%;
		height: 100%;
		position: absolute;
		
	}
	.origin_banner ul li:first-child {
		z-index: 10;
		left: 0.3rem;
		bottom: 0;
		width: 6.3rem;
	}
	.origin_banner ul li:nth-child(2) {
		z-index: 8;
		background: green;
		left: 0.5rem;
		bottom: 0.3rem;
		width: 6.4rem;
	}
	.origin_banner ul li:nth-child(3) {
		z-index: 6;
		background: purple;
		left: 0.7rem;
		bottom: 0.6rem;
		width: 6.5rem;
	}
	.opacity_mask {
		position: absolute;
		bottom: 0;
		left: 0;
		height: 1.3rem;
		background: rgba(0,0,0,0.8);
		z-index: 20;
		width: 100%;
	}
	.opacity_mask h3{
		font-size: 0.3rem;
		color: #f1f1f1;
		margin-top: 0.2rem;
		margin-bottom: 0.1rem;
	}
</style>
