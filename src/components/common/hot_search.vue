<template>
	<div class="hotsearch" >
		<div class="hot_search_list" v-for="(todo,index) in todos" :class="[(index===1)? 'bgcolor': '']">
			<div class="hot_search_img fl">
				<img  :src="todo.search_img">
			</div>
			<div class="hot_search_right">
				<h2>{{todo.search_title}}</h2>
				<p class="text">{{todo.search_des}}</p>
				<p class="fr show_info"><span><i class="icon_eyes"> </i>{{todo.search_look}}</span><span class="ml_4"> <i class="icon_talking"></i>{{todo.search_talk}}</span></p>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		props: ['search'],
		data () {
			return {
				todos: [
				{
					search_img: '../../../static/img/hot_list1.png',
					search_title: 'Stiqi Mouse',
					search_des: '近期一段时间不少美国大片上映各种赞美，各种吐槽,欢迎小...',
					search_look: '536',
					search_talk: '38'
				},
				{
					search_img: '../../../static/img/hot_list2.png',
					search_title: '小花猫',
					search_des: '近期一段时间不少美国大片上映各种赞美，各种吐槽,欢迎小...',
					search_look: '36',
					search_talk: '48'
				},
				{
					search_img: '../../../static/img/hot_list3.png',
					search_title: ' 小老鼠',
					search_des: '近期一段时间不少美国大片上映各种赞美，各种吐槽,欢迎小...',
					search_look: '536',
					search_talk: '38'
				}
				]
			}
		}
	}
</script>
<style type="text/css">
	.hotsearch {
		margin-top: 0.5rem;
		margin-bottom: 1.12rem;
		text-align: left;
	}
	.hot_search_list.bgcolor {
		background:  #fff;
	}
	.hot_search_list.bgcolor .hot_search_right h2 {
		color: #333;
	}
	.hot_search_list.bgcolor .hot_search_right  {
		color: #797979;
	}
	.hot_search_list {
		height: 1.47rem;
		background: #181924;
		width: 100%;
		text-align: left;
		padding-right: 0.3rem;
		position: relative;
	}
	.hot_search_list.choice {
		background: #fff;
	}
	.show_info {
		position: absolute;
		right: 0.3rem;
		bottom: 0.08rem;
	}
	.hot_search_img {
		width: 1.4rem;
		height: 1.4rem;
	}
	.hot_search_img img {
		width: 100%;
	}
	.hot_search_right{
		padding-left: 1.75rem;
	}
	.hot_search_right h2{
		font-size: 0.28rem;
		color: #eaeaea;
		margin-bottom: 0.1rem;
		padding-top: 0.15rem;
	}
	.hot_search_right  {
		font-size: 0.2rem;
		color: #d2d2d2;
	}
	.hot_search_right p span{
		color: #b7b7b7;
		font-size: 0.18rem;
	}
	.icon_eyes {
		display: inline-block;
		width: 0.36rem;
		height: 0.21rem;
		background: url('../assets/images/eyes_icon.png') no-repeat;
		background-size: 100%;
		margin-right: 0.1rem;
	}
	.icon_talking {
		display: inline-block;
		width: 0.26rem;
		height: 0.22rem;
		background: url('../assets/images/talk_icon.png') no-repeat;
		background-size: 100%;
		margin-right: 0.1rem;
	}
</style>
