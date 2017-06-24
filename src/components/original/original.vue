<template>
	<div class="original_home">
		<div class="top_img_box">
			<v-header :tilte='tilte' :isShow='isShow'></v-header>
			<tab-cut v-on:cutCurrent="current"></tab-cut>
			<hot-tittle :urlText='urlText'></hot-tittle>
		</div>
		<cirle></cirle>
		<originalBottom v-show="false"></originalBottom>
		<bottom-nav></bottom-nav>

	</div>
</template>
<script type="text/javascript">
	import vHeader from '../common/header'
	import hotTittle from '../common/hot_title'
	import tabCut from '../common/tab_cut'
	import star from '../common/start'
	import enshrine from '../common/enshrine'
	import moreInfo from '../common/origin_more_info'
	import bottomNav from '../common/bottom_nav'
	import cirle from '../common/cirle'
	import originalBottom from '../common/origin_bottom'
	export default {
		data () {
		return {
			tilte: 'MOLI 原创',
			isShow: true,
			urlText: '../../../static/img/popular_title.png'
		}
		},
		components: {
			vHeader,
			hotTittle,
			tabCut,
			star,
			enshrine,
			moreInfo,
			bottomNav,
			originalBottom,
			cirle
		}
	}
</script>
<style type="text/css">
.original_home {
		background: #1a1b28;
	}
	.top_img_box {
		background: url('../../../static/img/head_img.png') no-repeat;
	}
	.opacity_mask p {
		font-size: 0.24rem;
		color: #cbc8c8;
	}
</style>

