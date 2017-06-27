<template>
	<div class="tab_cut">
		<ul class="clearfix">
			<li class="origin_tab" :class='{isActive:isActive1}' @click="cutstatus(isActive1,'origin_tab')"></li>
			<li class="moli_tab" :class='{isActive:isActive2}'  @click="cutstatus(isActive2,'moli_tab')"></li>
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
		},
		methods: {
			cutstatus (isActive, origin) {
				if (isActive) {
					if (origin === 'origin_tab' || origin === 'moli_tab') {
						return
					}
				} else {
					if (origin === 'origin_tab') {
					this.isActive1 = true
					this.isActive2 = false
					} else {
					this.isActive1 = false
					this.isActive2 = true
					}
				}
               this.$emit('cutstatus', origin)
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

