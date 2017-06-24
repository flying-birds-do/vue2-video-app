<template>
	<div class="warp_search">
		<header class="search">
			<span class="icon_back"></span>
			<input type="text" name="" placeholder="输入喜欢的视频">
			<span class="icon_search"></span>
		</header>
		<rember></rember>

	</div>
</template>
<script type="text/javascript">
	import rember from './search_rember'
	export default {
		components: {
			rember
		}
	}
</script>
<style type="text/css">
	.warp_search {
		background: #1a1b28;
	}
	.warp_search .search {
		width: 100%;
		height: 0.88rem;
		position: relative;
		padding: 0 0.3rem 0 0.7rem;
	}
	.warp_search .search .icon_back {
		width: 0.16rem;
		height: 0.33rem;
		background: url('../assets/images/arrow_icon.png') no-repeat;
		background-size: 100%;
		position: absolute;
		left: 0.3rem;
		top: 0.27rem;
	}
	.warp_search .search input {
		height: 0.6rem;
		background: #fff;
		border-radius: 30px;
		width: 100%;
		margin-top: 0.16rem;
		padding-left: 0.3rem;
		font-size: 0.22rem;
		color: #333;
	}
	.warp_search .search .icon_search {
		position: absolute;
		right: 0.6rem;
		width: 0.33rem;
		height: 0.33rem;
		background: url('../assets/images/search.png') no-repeat;
		background-size: 100%;
		top: 0.3rem;
	}
	::-webkit-input-placeholder{
		font-size: 0.22rem;
		color: #6d6e79;
	}
	::-moz-placeholder{
		font-size: 0.22rem;
		color: #6d6e79;
	}
	:-moz-placeholder{
		font-size: 0.22rem;
		color: #6d6e79;
	}

</style>
