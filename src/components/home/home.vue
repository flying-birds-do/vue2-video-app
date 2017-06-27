<template>
	<div class="my_home">
		<v-header :tilte='tilte' :isShow='isShow'></v-header>
		<hot-tittle :urlText='urlText'></hot-tittle>
		<!-- <banner :items="items"></banner> -->
    	<m-swiper :data="swiperList" :loop="true" :initIndex="1" :auto="3000"></m-swiper>
		<div class="hot_list_con">
			<hot-tittle :urlText='urlText1'></hot-tittle>
			<hotlist></hotlist>
		</div>
		<div class="hotsearch">
			<hot-tittle :urlText='urlText2'></hot-tittle>
			<hotsearch></hotsearch>
		</div>
		<!-- <bottom-nav></bottom-nav> -->
	</div>
</template>
<script type="text/javascript">
	import vHeader from '../common/header'
	// import banner from '../common/banner'
	import hotTittle from '../common/hot_title'
	import hotlist from '../common/hot_list'
	import hotsearch from '../common/hot_search'
	export default {
		data () {
			return {
				urlText: '../../../static/img/hot_moive_title.png',
				urlText1: '../../../static/img/hot-title2.png',
				urlText2: '../../../static/img/hot_title3.png',
				tilte: '首页',
				isShow: false,
				total: 0,
				swiperList: [
				{img: '../../../static/img/banner1.png'},
				{img: '../../../static/img/banner2.png'},
				{img: '../../../static/img/banner3.png'}
				]
			}
		},
		methods: {
		},
		components: {
			vHeader,
			// banner,
			hotTittle,
			hotlist,
			hotsearch
		}
	}
</script>
<style type="text/css">
	.my_home {
		width: 100%;
		background: #1a1b28;
		text-align: left;
	}	
</style>

