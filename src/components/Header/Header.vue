<template>
	<div class="header">
		<i class="icon-chevron-left back"></i>
		<div class="seller-info-wrapper">
			<div class="seller-img">
				<img class="seller-portrait" :src="seller.portrait" width="54" height="54" alt="">
			</div>
			<div class="seller-info">
				<div>
					<span class="icon" v-if="seller.type">品牌</span>
					<h3 class="seller-name">{{seller.name}}</h3>
				</div>
				<div class="seller-other">
					<span>{{seller["sale-methods"]}}</span>/
					<span>{{seller["sale-time"]}}分钟送达</span>/
					<span>配送费￥{{seller["sale-extra-price"]}}</span>
				</div>
				<div class="seller-notice">
					公告：{{seller.notice}}
				</div>
				
			</div>
			<div class="activities" v-if="seller.activities">
				<span :class="['icon',acType[seller.activities[0]['ac-type']]]">{{acTypeText[seller.activities[0]["ac-type"]]}}</span>{{seller.activities[0]["ac-text"]}}
				<span class="activities-num"><i>{{seller.activities.length}}</i>个活动</span>
			</div>
		</div>
		<div class="seller-page"></div>
		<i class="icon-chevron-right seller-detail" @click="openDetail"></i>
		<div class="bg">
			<img :src="seller.portrait" alt="">
		</div>
		<transition name="fade">
			<div class="detail" v-show="detailOpened">
				<div class="detail-content">
					<h2 class="detail-content-name">{{seller.name}}</h2>
					<div class="star-level">
						<span class="star active" v-for="n in starAllNum" v-if="n<=seller.starlevel" ></span>
						<span class="star" v-for="n in starAllNum" v-if="n>seller.starlevel"></span>
					</div>
					<div class="info-title">优惠信息</div>
					<ul class="activities-list">
						<li v-for="item in seller.activities"><span :class="['icon',acType[item['ac-type']]]">{{acTypeText[item['ac-type']]}}</span>{{item["ac-text"]}}</li>
					</ul>
					<div class="info-title">商家公告</div>
					<p class="notice-detail">{{seller.notice}}</p>
				</div>
				<span class="icon-remove-circle" @click="closeDetail"></span>
			</div>
		</transition>
	</div>
</template>
<script>
import '../../common/style/font-awesome.min.css'
	export default{
		data () {
			return {
				acType: ['descrease', 'discount', 'special'],
				acTypeText: ['减', '折', '特'],
				starAllNum: 5,
				detailOpened: false
			}
		},
		props: {
			seller: {
				type: Object
			}
		},
		methods: {
			openDetail () {
				this.detailOpened = true
			},
			closeDetail () {
				this.detailOpened = false
			}
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.header
	height:122px
	background:rgba(95, 85, 96, 0.15)
	position:relative
	overflow:hidden
	.back
		position:absolute
		top:8px
		left:16px
		color:rgba(255, 255, 255, 0.77)
	.seller-info-wrapper
		font-size:0
		padding: 34px 8px 8px 8px
		.seller-img
			display: inline-block
			border-radius:4px
			vertical-align: top
			.seller-portrait
				display: block
		.seller-info
			display: inline-block
			font-size: 0.7rem
			color:#fff
			margin-left:6px
			.icon
				display: inline-block
				width:1.65rem
				height:.8125rem
				background:#ff9037
				padding:0.125rem
				text-align:center
			.seller-name
				font-size:1rem
				display: inline-block
			.seller-notice
				font-size:0.7rem
				width:242px
				white-space: nowrap
				overflow:hidden
				text-overflow: ellipsis
				line-height: 20px
			.seller-other
				line-height: 20px
		.activities
			height:12px
			font-size:0.7rem
			color:#fff
			padding:8px 0px 4px 0px	
			.activities-num
				float:right;
	.icon.descrease
		display:inline-block
		width:0.8125rem
		height: 0.8125rem
		line-height:0.8125rem
		background:#ff9037
		border-radius:0.125rem
		padding:0.125rem
	.icon.discount
		display:inline-block
		width:0.8125rem
		height: 0.8125rem
		line-height:0.8125rem
		background:#ff9037
		border-radius:0.125rem
		padding:0.125rem
	.icon.special
		display:inline-block
		width:0.8125rem
		height: 0.8125rem
		line-height:0.8125rem
		background:#ff9037
		border-radius:0.125rem
		padding:0.125rem	
	.seller-detail
		position:absolute
		right: 10px
		top:50px
		color:#fff
	.bg
		position: absolute
		left:0
		top:0
		width:100%
		height: 100%
		z-index:-1
		filter:blur(10px)
		img 
			width:100%
			height:100%
	.detail
		background:rgba(0, 0, 0, 0.9)
		position:fixed
		left:0
		top:0
		width:100%
		height: 100%
		z-index:1000
		padding:2.1875rem 1.5rem 0px 1.5rem
		box-sizing:border-box;
		.icon-remove-circle
			color:rgba(255, 255, 255, 0.5)
			font-size:1.5rem
			position:absolute
			left:50%
			transform: translateX(-50%)
			bottom:1rem
		.detail-content
			.detail-content-name
				color:#fff
				text-align: center
				font-size:1.2rem
				line-height:1.4rem
			.star-level
				display:inline-block
				position: relative
				left: 50%
				transform: translateX(-50%)
				.star
					display:inline-block
					width:1.0625rem
					height: 1.0625rem
					background:url('star.png') no-repeat
				.star.active
					background:url('star_active.png') no-repeat
			.info-title
				width:3.75rem
				height:1.5rem
				line-height:1.5rem
				border:1px solid #515151
				border-radius:2rem
				padding:0.225rem 0.5rem
				margin:0 auto
				margin-top:1rem
				margin-bottom:1rem
				color:#fff
				font-size:0.75rem
				text-align:center
			.activities-list
				li
					font-size:0.75rem
					color:#fff
					line-height:1rem
					margin:.5rem 0
					.icon
						margin-right:.5rem
			.notice-detail
				color:#fff
				font-size:.875rem
				line-height:1rem
	.fade-enter-active, .fade-leave-active
		transition: opacity .5s
	.fade-enter, .fade-leave-active
		opacity: 0
</style>
