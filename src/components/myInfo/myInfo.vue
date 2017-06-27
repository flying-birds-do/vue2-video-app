<template>
	<div class="myInfo">
		<div class="myInfo_top">
			<div class="myInfo_top_img"></div>
			<header class="portrait"><img src="../assets/images/header.png"></header>
			<p class="myInfo_num">
				<span><i>28</i><i>下载</i></span>
				<span><i>168</i><i>收藏</i></span>
			</p>
			<h3 class="font34 col_2a mb12">月姐姐</h3>
			<p class="font24 col_15">亲爱的姐姐，好久不见你啦</p>
			<star></star>
		</div>
		<div class="myInfo_center tx_l">
			<div class="history_video clearfix">
				<div class="history_video_left fl">
					<i class="icon_history fl"></i>
					<p class="fon30 fl">播放历史</p>	
				</div>
				<p class="history_video_right fr">
					<span><i>最近播放：</i><i>澳门风云3</i></span>
					<button class="col_ecbc14">立即播放</button>
					<!-- 进度条 -->
				</p>
			</div>
			<my-info></my-info>
		</div>
		<!-- <bottom-nav></bottom-nav> -->
	</div>
</template>
<script type="text/javascript">
	import star from '../common/start'
	import myInfo from '../common/myInfo_list'
	export default {
		components: {
			star,
			myInfo
		}
	}
</script>
<style type="text/css">
	.history_video_left {
		margin-top: 0.5rem;
	}
	.history_video_right button {
		padding: 0.03rem 0.3rem;
		border-radius: 4px;
		margin-left: 0.2rem;
	}
	.col_ecbc14 {
		background: #ecbc14;
		color: #fff;
		outline: none;
		border: none;
	}
	.fon30 {
		font-size: 0.3rem;
	}
	.tx_l {
		text-align: left;
	}
	.icon_history {
		width: 0.5rem;
		height: 0.57rem;
		background: url('../assets/images/icon_history.png') no-repeat;
		display: inline-block;
		background-size: 100%;
		margin-right: 0.2rem;
	}
	.history_video {
		height: 1.4rem;
		color: #cecccc;
		padding: 0 0.3rem;	
	}
	.history_video_right {
		font-size: 0.2rem;
		margin-top: 0.5rem;
	}
	.myInfo_center {
		background: #1a1b29;
		padding-bottom: 1.4rem;
	}
	.myInfo_top {
		padding-bottom: 0.75rem;
	}
	.mb12 {
		margin-bottom: 0.12rem;
	}
	.font34 {
		font-size: 0.34rem;
	}
	.col_2a {
		color: #2a2a2a;
	}
	.font24 {
		font-size: 0.24rem;
	}
	.col_15{
		color: #151515;
	}
	.myInfo_top_img {
		background: url('../assets/images/my_head.png') no-repeat top;
		height: 3.14rem;
		border-bottom: 1px solid #ccc;
		background-size: 100%;
		position: relative;
	}
	.portrait {
		position: absolute;
		left: 50%;
		top: 23%;
		width: 2.27rem;
		height: 2.27rem;
		transform: translate(-50%,-50%);
		-webkit-transform: translate(-50%,-50%);
	}
	.portrait img {
		width: 100%;
		height: 100%;
	}
	.myInfo_num {
		height: 1.3rem;
	}
	.myInfo_num  span{
		width: 1rem;
		height: 1rem;
		border: 3px solid #334af0;
		border-radius: 1rem;
		font-size: 0.26rem;
		margin-top: 0.3rem;
	}
	.myInfo_num  span i:first-child  {
		display: block;
		color: #1d1d1d;
		margin-top: 0.05rem;
	}
	.myInfo_num  span i:last-child {
		color: #848484;
		font-size: 0.18rem;
	}
	.myInfo_num  span:nth-child(1) {
		position: absolute;
		left: 14%;
	}
	.myInfo_num  span:nth-child(2) {
		position: absolute;
		right: 14%;
	}
</style>
