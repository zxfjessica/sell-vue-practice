<template>
	<div class="header">
		<div class="seller-info">
			<div class="seller-img">
				<img src="" alt="">
			</div>
			<div class="seller-info">
				<span class="icon"></span>
				<h3 class="seller-name">{{seller.name}}</h3>
				
			</div>
		</div>
		<div class="seller-page"></div>
	</div>
</template>
<script>
	export default{
		props: {
			seller: {
				type: Object
			}
		}
	}
</script>
<style>
	.header{height:150px;}
	.seller-name{}
</style>
