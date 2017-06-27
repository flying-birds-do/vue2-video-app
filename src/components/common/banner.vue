<template>
	<div class="banner_conent">
		<ul class="clearfix">
			<li v-for="(item, index) in items" :class="{ 'active': index === swipe.activeIndex }" 
          v-for="(contact, index) in contacts"
          @click="turnTo(index)"><img :src="item.vartar"></li>
			<!-- <li><img src="../assets/images/banner2.png"></li> -->
			<!-- <li><img src="../assets/images/banner3.png"></li> -->
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
	export default {
		props: ['items'],
		data () {
			return {
			}
		},
		methods: {
		}
	}
</script>
<style type="text/css">
	.banner_content {
		width: 100%;
	}
	.banner_conent {
		position: relative;
		margin-top: 0.73rem;
		overflow: hidden;
	}
	.banner_conent ul {
		width: 500%;
		position: relative;
		height: 4.4rem;
		padding: 0 0.3rem;

	}
	.banner_conent ul li {
		float: left;
		width:20%;
		height: 4.37rem;
		float: left;
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

