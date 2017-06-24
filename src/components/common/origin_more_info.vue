<template>
	<div class="origin_more_info">
		<div class="origin_more_info_List clearfix">
			<div class="origin_more_info_List_left fl">
				<h3>家有萌宠哦 <span>Posible</span></h3>
				<p>这位女士有个宠物狗狗叫小可爱，小可爱陪她看电视，逛街...</p>
				<div class="show_star">
					<div class="starIn"><star></star></div>
					<div class="enshrine1"> 
						<enshrine></enshrine>
					</div>
				</div>
			</div>
			<div class="origin_more_info_List_right fr">
				<img src="../assets/images/origin_list_img1.png">
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import star from '../common/start'
	import enshrine from '../common/enshrine'
	export default {
		components: {
			star,
			enshrine
		}
	}
</script>
<style type="text/css">
	.show_star {
		position: relative;
		width: 100%
	}
	.starIn {
		position: absolute;
		right: 0rem;
		bottom: -0.35rem;
	}
	.enshrine1 {
		position: absolute;
		left: 0rem;
		bottom: -0.35rem;
	}
	.origin_more_info_List {
		background: #fff;
		margin-bottom: 0.3rem;
	}
	.origin_more_info_List_left {
		width: 70%;
		
	}
	.origin_more_info_List p {
		font-size: 0.28rem;
		text-align: left;
		padding-left: 0.3rem;
		margin-top:0.1rem;
		color: #3a3a3a;
	}
	.origin_more_info_List_left h3{
		font-size: 0.36rem;
		border-bottom: 1px dashed #312f3f;
		padding-top: 0.1rem;
		padding-left: 0.3rem;
	}
	.origin_more_info_List_left h3 span {
		font-size: 0.26rem;
	}
	.origin_more_info_List_right {
		width: 2.02rem;
		height: 100%;
	}
	.origin_more_info_List_right img {
		width: 100%;
	}
</style>
