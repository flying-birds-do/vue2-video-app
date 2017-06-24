<template>
	<div class="my_home">
		<v-header :tilte='tilte' :isShow='isShow'></v-header>
		<hot-tittle :urlText='urlText'></hot-tittle>
		<banner></banner>
		<div class="hot_list_con">
			<hot-tittle :urlText='urlText1'></hot-tittle>
			<hotlist></hotlist>
		</div>
		<div class="hotsearch">
			<hot-tittle :urlText='urlText2'></hot-tittle>
			<hotsearch></hotsearch>
		</div>
		<bottom-nav></bottom-nav>
	</div>
</template>
<script type="text/javascript">
	import vHeader from '../common/header'
	import banner from '../common/banner'
	import hotTittle from '../common/hot_title'
	import hotlist from '../common/hot_list'
	import hotsearch from '../common/hot_search'
	import bottomNav from '../common/bottom_nav'
	export default {
		data () {
			return {
				urlText: '../../../static/img/hot_moive_title.png',
				urlText1: '../../../static/img/hot-title2.png',
				urlText2: '../../../static/img/hot_title3.png',
				tilte: '首页',
				isShow: false,
				total: 0
			}
		},
		methods: {
			incrementTotal: function () {
			}
		},
		components: {
			vHeader,
			banner,
			hotTittle,
			hotlist,
			hotsearch,
			bottomNav
		}
	}
</script>
<style type="text/css">
	.my_home {
		width: 100%;
		background: #1a1b28;
	}	
</style>

