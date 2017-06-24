<template>

	<div>
		<div class="cirle">
			<img src="../assets/images/list_img1_02.png">
		</div>
		<div class="segmentation_line"><img src="../assets/images/list_img1_01.png"></div>
		<div class="list">
			<img :src="item.imgist" v-for="item in items">
		</div>
	</div>
	
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				items: [
				{imgist: '../../../static/img/list_img1_06.png'},
				{imgist: '../../../static/img/list_img1_05.png'},
				{imgist: '../../../static/img/list_img1_12.png'},
				{imgist: '../../../static/img/list_img1_14.png'},
				{imgist: '../../../static/img/list_img1_14.png'},
				{imgist: '../../../static/img/list_img1_15.png'}
				]
			}
		}
	}
</script>
<style type="text/css">
	.cirle {
		width: 100%;
	}
	.list img {
		width: 50%;
	}
</style>
