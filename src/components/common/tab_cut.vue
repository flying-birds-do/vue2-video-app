<template>
	<div class="tab_cut">
		<ul class="clearfix">
			<li class="origin_tab" :class='{isActive:isActive1}'></li>
			<li class="moli_tab" :class='{isActive:isActive2}'></li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				isActive1: true,
				isActive2: false
			}
		}
	}
</script>
<style type="text/css">
	.tab_cut {
		width: 82%;
		height: 0.68rem;
		margin: 0.43rem auto 0.72rem;
	}
	.tab_cut ul .origin_tab.isActive {
		background: url('../assets/images/tab_cut1_06.png') no-repeat;
		background-size: 100%;
	}
	.tab_cut ul .moli_tab.isActive {
		background: url('../assets/images/tab_cut_2_03.png') no-repeat;
		background-size: 100%;
	}
	.tab_cut ul .origin_tab {
		background: url('../assets/images/tab_cut_2_06.png') no-repeat;
		background-size: 100%;
	}
	.tab_cut ul .moli_tab {
		background: url('../assets/images/tab_cut1_03.png') no-repeat;
		background-size: 100%;
		}
	.tab_cut ul li {
		width: 50%;
		height: 0.68rem;
		float: left;
	}
</style>

