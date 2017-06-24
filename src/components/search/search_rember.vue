<template>
	<div class="search_default">
		<div class="search_default_history">
			<p class="col_8f fon22 mb24"> 搜索历史</p>
			<ul class="clearfix mb24 historyList">
				<li class="fl">卧虎藏龙</li>
				<li class="fr">托马斯和朋友们</li>
			</ul>
		</div>
		<div class="hot_search">
			<h3><img src="../assets/images/search_hot.png"></h3>
			<ul>
				<li v-for='item in items'><i class="icon_top"><img :src="item.ranking"></i>{{item.hotList}}  <i class="sizes"><img :src="item.alone"></i></li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				items: [
				{
					ranking: '../../../static/img/1.png',
					hotList: '主妇神探'
				},
				{
					ranking: '../../../static/img/2.png',
					hotList: '主妇神探'
				},
				{
					ranking: '../../../static/img/3.png',
					hotList: '主妇神探'
				},
				{
					hotList: '超轻粘土制作',
					alone: '../../../static/img/alone.png'
				},
				{
					hotList: '美人鱼'
				},
				{
					hotList: 'Now You See Me'
				},
				{
					hotList: '蜀山战绩'
				}
				]
			}
		}
	}
</script>
<style type="text/css">
	.historyList  li {
		width: 48%;
		height:0.68rem;
		line-height: 0.68rem;
		border-radius: 4px;
		background: #fff;
		font-size: 0.26rem;
		color: #484849;
		text-align: center;
	}
	.fon22 {
		font-size: 0.22rem;
	}
	.historyList  li:first-child {
		background: #ee310b;
		color: #fff;
	}
	.warp_search {
		height: 100%;
	}
	body,html {
		height: 100%;
	}
	#app {
		height: 100%;
	}
	.sizes {
		width: 0.56rem;
		height: 0.23rem;
		display: inline-block;
	}
	.sizes img {width: 100%}
	.mb24 {
		margin-bottom: 0.24rem;
	}
	.search_default {
		text-align: left;
		padding: 0.3rem 0.3rem 0;
	}
	.col_8f{
		color: #8f9098;
	}
	.font22 {
		font-size: 0.22rem;
	}
	.hot_search h3{
		padding-top: 0.64rem;
		padding-bottom: 0.34rem;
	}
	 .search_default_history {
		width: 100%;
		padding: 0  0.3rem;
		margin-bottom: 0.64rem;
	}
	.search_default_history ul  {
		width: 100%;
	}
	.hot_search {
		padding: 0 0.3rem;
		text-align: center;
	}
	.icon_top {
		margin-right: 0.1rem;
		width: 0.26rem;
		height: 0.25rem;
		display: inline-block;
	}
	.icon_top img {
		width: 100%;
	}
	.hot_search ul {
		width: 100%;
		background: #fff;
		padding-bottom: 0.2rem;
		border-radius: 4px;
		
	}
	.hot_search ul li {
		padding-left: 0.87rem;
		height: 0.88rem;
		line-height: 0.88rem;
		font-size: 0.24rem;
		color: #2f3031;
		text-align: left;
		padding: 0 0.3rem;
		border-bottom: 1px solid #dfdfdf;

	}
</style>
