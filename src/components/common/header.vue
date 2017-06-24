<template>
	<div class="v-header">
		<i class="icon_radio" v-if="isShow"></i>
		<header>{{tilte}}</header>
		<router-link to="/search"><i class="icon_search"></i></router-link>
	</div>
</template>
<script type="text/javascript">
	export default {
		props: ['tilte', 'isShow']
	}
</script>
<style type="text/css">
	.v-header {
		position: relative;
		text-align: center;
		font-size: 0.36rem;
		color: #fff;
		height: 0.88rem;
		line-height: 0.88rem;
	}
	.icon_search {
		background: url('../assets/images/icon_search.png') no-repeat;
		position: absolute;
		right: 0.3rem;
		top: 0.25rem;
		width: 0.37rem;
		height: 0.38rem;
		background-size: 100%;
	}
	.icon_radio {
		background: url('../assets/images/icon_radio.png') no-repeat;
		position: absolute;
		left: 0.3rem;
		top: 0.25rem;
		width: 0.34rem;
		height: 0.34rem;
		background-size: 100%;
	}
</style>
