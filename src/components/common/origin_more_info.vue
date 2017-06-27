<template>
	<div class="origin_more_info">
		<div class="origin_more_info_List clearfix " v-for='(item,index) in items' :index="index" :class="[(index <2) ? 'bgcolor': '']">
			<div class="origin_more_info_List_left fl"> 
				<h3>{{item.title}} <span>{{item.Posible}}</span></h3>
				<p>{{item.desc}}</p>
				<div class="show_star">
					<div class="starIn"><star></star></div>
					<div class="enshrine1"> 
						<enshrine></enshrine>
					</div>
				</div>
			</div>
			<div class="origin_more_info_List_right fr">
				<img :src="item.imgs">
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import star from '../common/start'
	import enshrine from '../common/enshrine'
	export default {
		data () {
			return {
				items: [
				{
					title: '家有萌宠哦',
					Posible: 'Posible',
					desc: '这位女士有个宠物狗狗叫小可爱，小可爱陪她看电视，逛街...',
					imgs: '../../../static/img/origin_list_img1.png'
				},
					{
					title: '艺术考试',
					Posible: 'exame you',
					desc: '你喜欢的东西，当然要争取',
					imgs: '../../../static/img/origin_list_img2.png'
				},
					{
					title: '思索人生',
					Posible: 'People life',
					desc: '这快不快乐，你说了不算，还能谁来决定...',
					imgs: '../../../static/img/origin_list_img_3.png'
				},
					{
					title: '努力工作',
					Posible: 'hard study',
					desc: '你以为的就是你以为的么？世界那么大，你不出去看看么...',
					imgs: '../../../static/img/origin_list_img_4.png'
				}

				]
			}
		},
		components: {
			star,
			enshrine
		},
		methods: {
		}
	}
</script>
<style type="text/css">
	.origin_more_info_List.bgcolor {
		background: #fff;
	}
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
		bottom: -0.74rem;
	}
	.origin_more_info_List {
		background: #191821;
		margin-bottom: 0.3rem;
	}
	.origin_more_info_List_left {
		width: 70%;
		
	}
	.origin_more_info_List  p {
		font-size: 0.28rem;
		text-align: left;
		padding-left: 0.3rem;
		margin-top:0.1rem;
		color: #3a3a3a;
		height: 0.76rem;
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
