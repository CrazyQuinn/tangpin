<template>
	<div>
		<div class="search1">
			<div class="search-div1">

				<input type="text" placeholder="搜索你需要的商品热门关键词" class="search-input1"/>
				<span @click="back">取消</span>
			</div>

			<div class="search-div2">
				<p class="search-p1">
					<span class="search-left">搜索历史</span> 
					<img src="../../assets/search/del.png" class="search-right">
				</p>
				<div class="search-div2-div1">
					<span>&nbsp;&nbsp;&nbsp;体育场馆预定&nbsp;&nbsp;&nbsp;</span>
					<span>&nbsp;&nbsp;&nbsp;停车泊位&nbsp;&nbsp;&nbsp;</span>
					<span>&nbsp;&nbsp;&nbsp;爱心捐赠&nbsp;&nbsp;&nbsp;</span>
					<span>&nbsp;&nbsp;&nbsp;脸部按摩&nbsp;&nbsp;&nbsp;</span>
				</div>
				<p class="search-p1">
					<span class="search-left">热门搜索</span> 
				</p>
				<div class="search-div2-div2">
					<span>&nbsp;&nbsp;&nbsp;体育场馆预定&nbsp;&nbsp;&nbsp;</span>
					<span>&nbsp;&nbsp;&nbsp;停车泊位&nbsp;&nbsp;&nbsp;</span>
					<span>&nbsp;&nbsp;&nbsp;爱心捐赠&nbsp;&nbsp;&nbsp;</span>
					<span>&nbsp;&nbsp;&nbsp;脸部按摩&nbsp;&nbsp;&nbsp;</span>
					<span>&nbsp;&nbsp;&nbsp;温泉养生&nbsp;&nbsp;&nbsp;</span>
				</div>
			</div>
		</div>

	


	</div>
</template>

<script type="text/javascript">
		props:['who']
	export default {
		name:"search",
		data(){
			return {

			}
		},
		methods:{
			back(){
	    		this.$router.go(-1)
	    	},
	    	handleClick(){

	    	}
		},

		
	}
</script>

<!-- 给style标签加scoped属性， 避免样式污染全局 -->
<style type="text/css" scoped>
	.search1{
		position: absolute;
		z-index: 999999;
	}
	.search-left{
		float: left;
	}
	.search-right{
		float: right;
	}
    .search-div1{
    	background-color: #FFF;

    }
	.search-input1{
		background:#efefef;
		border-radius:32.5px;
		width:536px;
		height:65px;
		border:0;
		background-image: url(../../assets/sousuo.png);
		background-repeat: no-repeat;
		background-size: 35px 35px;
		padding-left: 82px;
		background-position: 31px 15px;
		margin-left: 20px;
		margin-top: 20px;
		margin-right: 24px;
	}
	.search-div2{
		height: 1205px;
		background-color: white;
		padding-top: 55px;
	}
	.search-p1{
		height: 40px;
		padding-left: 28px;
		padding-right: 32px;
	}
	.search-p1 span{
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#999999;
		letter-spacing:-0px;

	}
	.search-p1 img{
		width: 28px;
		height: 27px;
	}
	.search-div2-div1,.search-div2-div2{
		padding-left: 20px;
		padding-top: 20px;
		margin-bottom: 63px;
	}
	.search-div2-div1 span,.search-div2-div2 span{
		height: 54px;
		line-height: 54px;
		background:#efefef;
		border-radius:32.5px;
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#333333;
		letter-spacing:-0px;
		margin-right: 20px;
		margin-bottom: 30px;
	}
	.search-div2-div2 span{
		background-image: url(../../assets/search/fire.png);
		background-repeat: no-repeat;
		background-size: 19px 25px;
		background-position: 116px 0;

	}
	.search-div2-div2 span:nth-child(1){
		background-position: 165px 0;
	}



</style>