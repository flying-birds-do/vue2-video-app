<template>
	<div class="bottom_nav">
		<ul class="clearfix">
			<li class="chioce"><router-link to="/home"><i class="icon_home"></i></router-link></li>
			<li><router-link to="/navLoad"><i class="icon_classification"></i></router-link></li>
		<li><router-link to="/original"><i class="icon_microphone"></i></router-link></li>
			<li><router-link to="/myInfo"><i class="icon_people"></i></router-link></li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				counter: 0
			}
		},
		methods: {
		}
	}
</script>
<style type="text/css">
	.bottom_nav ul a {
		text-align: center;
		height: 100%;
		display: inline-block;
		width: 100%;
	}

	.bottom_nav {
		height: 1.16rem;
		position: fixed;
		left: 0;
		bottom: 0;
		background: #272941;
		width: 100%;
	}
	.bottom_nav ul {
		height: 100%; 
	}
	.bottom_nav ul li {
		float: left;
		text-align: center;
		height: 100%;
		width: 25%;
	}
	.bottom_nav ul .router-link-active i {
		background-image: url('../assets/images/bottom_choice.png');
		width: 37px;
		height: 32px;
		background-size: 252px 32px;
		background-repeat: no-repeat;
		margin-top: 0.2rem;
	}
	.bottom_nav ul li i {
		background-image: url('../assets/images/bottom_nav_icon.png');
		background-repeat: no-repeat;
		display: inline-block;
		width: 37px;
		height: 24px;
		background-size: 252px 24px;
		margin-top: 0.34rem;
	}
	.bottom_nav ul li i.icon_home {
		background-position: 0 0;
	}
	.icon_classification {
		background-position: -76px 0px;
	}
	.icon_microphone {
		background-position: -144px 0px;
	}
	.icon_people {
		background-position: -214px 0px;
	}
	.bottom_nav ul li.choice i.icon_home {
		background-position: 0 0;
		width: 47px;
	}
	.bottom_nav ul li.chioce .icon_classification {
		background-position: -76px 0px;
	}
	.bottom_nav ul li.chioce .icon_microphone {
		background-position: -144px 0px;
	}
	.bottom_nav ul li.chioce .icon_people {
		background-position: -214px 0px;
	}
</style>
