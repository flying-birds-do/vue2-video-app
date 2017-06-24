<template>
	<div>
		<div class="myInfo_list clearfix"  v-for="todo in todos">
			<div class="myInfo_list_left clearfix">
				<img :src="todo.list_icon" class="fl">
				<p class="fl">{{todo.text}}</p>
			</div>
			<div class="myInfo_list_right  ">
				<span class="hot_cirle">3</span>
				<span class="icon_arrow">
					<img :src="todo.list_arrow">
				</span>
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
					list_icon: '../../../static/img/icon_down.png',
					text: '下载记录',
					list_arrow: '../../../static/img/arrow_left.png'
				},
				{
					list_icon: '../../../static/img/collection.png',
					text: '我的收藏',
					list_arrow: '../../../static/img/arrow_left.png'
				},
				{
					list_icon: '../../../static/img/update.png',
					text: '上传记录',
					list_arrow: '../../../static/img/arrow_left.png'
				},
				{
					list_icon: '../../../static/img/scan.png',
					text: '扫一扫',
					list_arrow: '../../../static/img/arrow_left.png'
				}
				]
			}
		}
	}
</script>
<style type="text/css">
	.myInfo_list_right {
		position: absolute;
		right: 0.3rem;
		top: 0;
	}
	.hot_cirle {
		font-size: 0.24rem;
	}
	.icon_arrow {
		width: 0.15rem;
		height: 0.14rem;
	}
	.icon_arrow img {
		width: 0.3rem;
		height: 0.4rem
	}
	.myInfo_list {
		height: 1.08rem;
		line-height: 1.08rem;
		border-bottom: 1px solid #3f3f40;
		padding: 0 0.3rem;
		color: #cecccc;
		position: relative;
	}
	.myInfo_list .myInfo_list_left >img{
		width: 0.5rem;
		height: 0.5rem;
		margin-top: 0.3rem;
		margin-right: 0.1rem;
	}
	.myInfo_list .myInfo_list_left p {
		font-size: 0.3rem;
	}
</style>
