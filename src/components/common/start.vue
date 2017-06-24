<template>
	<div class="star">
		<span :class="{star_good:'choice_star'}">	
		</span>
		<span :class="{star_good:'choice_star'}">	
		</span>
		<span :class="{star_good:'choice_star'}">	
		</span>
		<span :class="{star_good:'choice_star'}">	
		</span>
		<span :class="">	
		</span>
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				choice_star: true
				// stars: {
				// 	[1,1,1,1,0],
				// 	[1,1,1,1,0],
				// 	[1,1,1,0,0]
				// }
			}
		}
	}
</script>
<style type="text/css">
	.star .star_good{
		background: url('../assets/images/start_choice.png') no-repeat; 
		width: 0.23rem;
		height: 0.22rem;
		background-size: 100%;
	}
	.star span {
		display: inline-block;
		background: url('../assets/images/start.png') no-repeat; 
		width: 0.23rem;
		height: 0.22rem;
		background-size: 100%;
	}
</style>
