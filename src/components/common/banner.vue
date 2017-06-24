<template>
	<div class="banner_conent">
		<ul class="clearfix">
			<li><img src="../assets/images/banner1.png"></li>
			<li><img src="../assets/images/banner2.png"></li>
			<li><img src="../assets/images/banner3.png"></li>
		</ul>
		<ol class="clearfix">
			<li></li>
			<li></li>
			<li></li>
			<li class="active"></li>
			<li></li>
		</ol>
	</div>
</template>
<script type="text/javascript">
</script>
<style type="text/css">
	.banner_content {
		width: 100%;
		overflow: hidden;
	}
	.banner_conent {
		position: relative;
		margin-top: 0.73rem;
	}
	.banner_conent ul {
	   width: 100%;
	   position: relative;
	   height: 5rem;
		padding: 0 0.3rem;

	}
	.banner_conent ul li {
		float: left;
		width: 7.37rem;
		height: 4.37rem;
		position: absolute;
		left: 0.07rem;
	}
	.banner_conent ul li:first-child {
		z-index: 10
	}
	.banner_conent ul li:nth-child(2) {
		z-index: 8;
		width: 6.65rem;
		height: 3.35rem;
		left: 0.3rem;
		top: -0.05rem;
	}
	.banner_conent ul li:nth-child(3) {
		width: 6.3rem;
		height: 3.23rem;
		top: -0.3rem;
		left: 0.5rem;
	}
    .banner_conent ol {
    	position: absolute;
    	right: 0.3rem;
    	bottom: 0.6rem;
    	z-index: 20
    }
	.banner_conent ol li {
		width: 6px;
		height: 6px;
		border-radius: 4px;
		background: #fff;
		float: left;
		margin-right: 0.12rem;
	}
	.banner_conent ol li.active {
		background: #e66524;
	}
</style>
