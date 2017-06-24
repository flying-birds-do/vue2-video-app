<template>
	<div class="nav_loading">
		<div class="show_banner">
			<v-header :tilte='tilte'></v-header>
			<img src="../assets/images/banner_text.png" class="banner_text">
			<ol class="clearfix">
				<li></li>
				<li></li>
				<li></li>
				<li class="active"></li>
				<li></li>
			</ol>
		</div>
		<div class="all_class">
			<hot-tittle :urlText='urlText1'></hot-tittle>
		</div>
		<div class="all_classification clearfix">
			<div class="fication_list" v-for="item in items">
				<p class="show_img"><img :src="item.imgs"></p>
				<p><img :src="item.imgs_class" alt=""></p>
			</div>
		</div>
		<div class="mt34">
			<hot-tittle :urlText='urlText2'></hot-tittle>
		</div>
		<originalBottom></originalBottom>
		<bottomNav></bottomNav>
	</div>
</template>
<script type="text/javascript">
	import vHeader from '../common/header'
	import hotTittle from '../common/hot_title'
	import originalBottom from '../common/origin_bottom'
	import bottomNav from '../common/bottom_nav'
	export default {
		data () {
			return {
				tilte: '导航',
				urlText1: '../../../static/img/navtitle.png',
				urlText2: '../../../static/img/hot_title3.png',
				items: [
					{
						imgs: '../../../static/img/list_img_info1_1.png',
						imgs_class: '../../../static/img/list_img_info1_16.png'
					},
					{
						imgs: '../../../static/img/list_img_info1_2.png',
						imgs_class: '../../../static/img/list_img_info1_16.png'
					},
					{
						imgs: '../../../static/img/list_img_info1_3.png',
						imgs_class: '../../../static/img/list_img_info1_13.png'
					},
					{
						imgs: '../../../static/img/list_img_info1_25.png',
						imgs_class: '../../../static/img/list_img_info1_40.png'
					},
					{
						imgs: '../../../static/img/list_img_info1_28.png',
						imgs_class: '../../../static/img/list_img_info1_34.png'
					},
					{
						imgs: '../../../static/img/list_img_info1_29.png',
						imgs_class: '../../../static/img/list_img_info1_37.png'
					},
					{
						imgs: '../../../static/img/list_img_info1_45.png',
						imgs_class: '../../../static/img/list_img_info1_54.png'
					},
					{
						imgs: '../../../static/img/list_img_info1_47.png',
						imgs_class: '../../../static/img/list_img_info1_57.png'
					},
					{
						imgs: '../../../static/img/list_img_info1_49.png',
						imgs_class: '../../../static/img/list_img_info1_60.png'
					}
				]

			}
		},
		components: {
			vHeader,
			hotTittle,
			originalBottom,
			bottomNav
		}
	}
</script>
<style type="text/css">
	.all_classification  {
		margin-top: 0.34rem;
		width: 100%;
		background: #25273e;
	}
	.mt34 {
		margin-top: 0.34rem;
	}
	.show_img {
		height: 1.8rem;
	}
	.all_classification .fication_list >img {
		width: 100%;
		height: 100%;
	}
	.all_classification .fication_list  p:last-child {
		width: 1.78rem;
		margin: 0 auto;
		padding: 0.1rem 0;
	}
	.fication_list {
		width:33.33%;
		float: left;
	}
	.all_classification p {
		vertical-align: middle;
	}
	.nav_loading {
		background: #1a1b28;
	}
	.show_banner {
		position:relative;
		background: url('../assets/images/banner.png') no-repeat;
		height: 5.1rem;
		background-size: 100%
	}
	.banner_text {
		position: absolute;
		left: 10%;
		top: 30%;
		width: 3.17rem;
		height: 1.27rem;
	}
	.show_banner ol {
		position: absolute;
		right: 0.3rem;
		bottom: 0.3rem;
		z-index: 20
	}
	.show_banner ol li {
		width: 6px;
		height: 6px;
		border-radius: 4px;
		background: #fff;
		float: left;
		margin-right: 0.12rem;
	}
	.show_banner ol li.active {
		background: #e66524;
	}
	.all_class {
		margin-top: 0.6rem;
	}
</style>
