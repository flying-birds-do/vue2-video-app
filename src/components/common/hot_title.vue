<template>
	<div class="hot_moive">
			<img :src='urlText'>
			<span class="back_right"></span>
			<i class="line_solid"><span></span></i>
		</div>
</template>
<script type="text/javascript">
	export default {
		props: ['urlText']
	}
</script>
<style type="text/css">
	.hot_moive {
		position: relative;
		margin-top: 0.47rem;
		height: 1.9rem;
		/* border-bottom: 2px dashed #35353e; */
		margin: 0 0.3rem;
	}
	.hot_moive img{
		/* width: 4.35rem; */ 
		height: 1.14rem;
		position: absolute;
		left: 0.3rem;
		top: 0;
	}
	.hot_moive .back_right {
		position: absolute;
		right: 0.3rem;
		bottom: 0.6rem;
		background: url('../assets/images/back_right.png') no-repeat;
		background-size: 100%;
		width: 0.24rem; 
		height: 0.24rem;
	}
	.line_solid {
		width: 100%;
		height: 1px;
		background: #35353e;
		position: absolute;
		bottom: -2px;
		left: 0rem;
		z-index: 10
	}
	.line_solid span {
		background: url('../assets/images/line_cirle.png') no-repeat;
		width: 0.5rem;
		height: 0.5rem;
		position: absolute;
		left: 0;
		top: -2px;
	}
</style>
