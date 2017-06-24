<template>
	<div class="move_content clearfix">
		<div class="hot_list" v-for ="todo in todos">
			<div class="hot_list_img">
				<img :src="todo.moive_img">
			</div>
			<div class="plr30">
				<h3>{{todo.moive_title}}</h3>
				<p class="tl"> {{todo.moive_des}}</p>
				<span class="tl fl"><i class="icon_time"></i> {{todo.up_time}}</span>
				<span class="tl fl ml_4"><i class="icon_play"></i> {{todo.play_num}}</span>
			</div>
		</div>
	</div>

</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				todos: [
				{
					moive_img: '../../../static/img/list_img1.png',
					moive_title: '恶棍天使',
					moive_des: '讲述恶棍莫里非与天使查小刀...',
					up_time: '2015.12.29',
					play_num: '24'
				},
				{
					moive_img: '../../../static/img/list_img1.png',
					moive_title: '帕丁特熊',
					moive_des: '讲述一只小老鼠的故事...',
					up_time: '2015.12.29',
					play_num: '20'
				},
				{
					moive_img: '../../../static/img/list_title3.png',
					moive_title: '小老鼠',
					moive_des: '讲述恶棍莫里非与天使查小刀...',
					up_time: '2015.12.29',
					play_num: '30'
				},
				{
					moive_img: '../../../static/img/list_title4.png',
					moive_title: '寻龙诀',
					moive_des: '讲述恶棍莫里非与天使查小刀...',
					up_time: '2015.12.29',
					play_num: '20'
				}
				]
			}
		}
	}
</script>
<style type="text/css">
	.move_content {
		padding: 0 0.3rem;
		margin-top: 0.2rem;
	}
	.tc {
		text-align: center;
	}
	.tl {
		text-align: left;
	}
	.plr30 {
		padding:  0 0.2rem;
	}
	.move_content .hot_list:nth-child(odd) {
		margin-right: 0.2rem;
	}
	.move_content .hot_list {
		float: left;
		width: 3.35rem;
		height: 4.2rem;
		background: #e9e6e7;
		margin-bottom: 0.3rem;
	}
	.hot_list_img img {
		height: 2.15rem;
	}
	.move_content h3 {
		font-size: 0.26rem;
		color: #141313;	
		padding-bottom: 0.1rem;
		padding-top: 0.1rem;
		border-bottom: 1px solid #ccc;
		margin-bottom: 0.13rem;
	}
	.move_content p{
		font-size: 0.22rem;
		color: #666768;
		height: 0.8rem;
	}
	.move_content span {
		font-size: 0.18rem;
		color: #2e2d2d;
		display: block;
	}
	.ml_4 {
		margin-left: 0.4rem;
	}
	.icon_time {
		width: 0.18rem;
		height: 0.19rem;
		display: inline-block;
		background: url('../assets/images/time_data.png') no-repeat;
		background-size: 100%;
	}
	.icon_play {
		width: 0.2rem;
		height: 0.22rem;
		display: inline-block;
		background: url('../assets/images/play_icon.png') no-repeat;
		background-size: 100%;
	}
</style>

