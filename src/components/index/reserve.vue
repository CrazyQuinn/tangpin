<template>
	<div>
		<div class="reserve-div1">
			<img src="../../assets/index/back.png" @click="back">
		<h1>预定酒店确认</h1>
		</div>
		<div class="reserve-div2">
			<h1>北京福地凰城酒店</h1>
			<ul>
				<li><span>房间信息</span>温泉会所 豪华套间</li>
				<li><span>到店时间</span>2018-11-03 21:00</li>
				<li><span>房间价格</span>¥3999</li>
			</ul>
		</div>

		<div class="reserve-div3">		
			<ul>
				<li><img src="../../assets/reserve.png"></li>
				<li>房间数</li>
			</ul>
			<span><span class="reserve-span1">1间</span><img src="../../assets/back1.png"></span>
		</div>


		<div class="reserve-div3 reserve-div4">		
			<ul>
				<li><img src="../../assets/reserve1.png"></li>
				<li>优惠券</li>
			</ul>
			<span><span class="reserve-span1 reserve-span2">10元代金券</span><img src="../../assets/back1.png"></span>
		</div>



		<div class="reserve-footer">
			<div><h1>￥798</h1><h2>优惠已减 ￥26</h2></div>
			<button>下单</button>
		</div>

	</div>

</template>

<script type="text/javascript">
	
	export default {
		name:"reserve",
		data(){
			return {

			}
		},
		methods: {
	    	back(){
	    		this.$router.go(-1)
	    	}
	   	}

	}
</script>

<!-- 给style标签加scoped属性， 避免样式污染全局 -->
<style type="text/css">
	.reserve-div1{
		display: flex;
		height: 105px;
		width: 100%;
		text-align: center;
		background-color: #FFF;
		padding-bottom: 15px;
	}
	.reserve-div1 img{
		width:22px;
		height:39px;
		margin-left: 42px;
		margin-top: 64px;
	}
	.reserve-div1 h1{
		font-size:36px;
		color:#333333;
		letter-spacing:0.58px;
		text-align:center;
		width: 390px;
		height: 50px;
		margin-top: 64px;
		margin-left: 116px;
	}
	.reserve-div2{
		background-color: #FFF;
		padding-left: 40px;
		padding-top: 30px;
		margin-bottom: 15px;
	}
	.reserve-div2 h1{
		font-family:PingFangSC-Medium;
		font-size:36px;
		color:#333333;
		font-weight: 500;
		margin-bottom: 30px;
	}
	.reserve-div2 ul{
		font-family:PingFangSC-Regular;
		font-size:28px;
		color:#666666;
		letter-spacing:0.45px;
	}
	.reserve-div2 ul span{
		font-family:PingFangSC-Regular;
		font-size:28px;
		color:#999999;
		line-height: 70px;
		letter-spacing:0.45px;
		margin-right: 30px;
	}

	.reserve-div3{
		height: 66px;
		background-color: #FFF;
		display: flex;
		padding-top: 34px;
		margin-bottom: 15px;	
	}
	.reserve-div3 ul{
		width: 510px;
		height:66px;
	}
	.reserve-div3 ul li:nth-child(1){
		width:54px;
		height:31px;
		display: inline-block;
		line-height: 100px;
		margin-left: 44px;
		border-right: 1px solid #eee;

	}
	.reserve-div3 ul li:nth-child(1) img{
		width: 27px;
		height: 38px;
	}
	.reserve-div3 ul li:nth-child(2){
		width: 113px;
		display: inline-block;
		vertical-align: top;
		margin-left: 19px;
	}
	.reserve-div3 span img{
		width:14px;
		height:25px;
		margin-left: 25px;
		float: right;
		margin-top: 8px;
	}
	.reserve-div3 ul li:nth-child(2){
		margin-left: 19px;

	}
	.reserve-div3 .reserve-span1{
		font-family:PingFangSC-Regular;
		font-size:28px;
		color:#999999;
		letter-spacing:0.1px;
		padding-left: 70px;
		margin-bottom: 50px;
	}
	.reserve-div3 .reserve-span2{
		padding-left: 0px;
	}
	.reserve-div4 ul{
		width: 480px;
		height:66px;
	}
	.reserve-footer{
		height: 120px;
		background-color: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
	}
	.reserve-footer div{
		height: 110px;
		width: 346px;
		margin-left: 46px;
		padding-top: 10px;

	}
	.reserve-footer div h1{
		font-family:PingFangSC-Regular;
		color:#fa4c01;
		letter-spacing:-0px;
	}
	.reserve-footer div h2{
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#fa4c01;
		letter-spacing:-0px;
		font-weight: 500;
	}
	.reserve-footer button{
		width: 358px;
		height: 120px;
		background-image: url(../../assets/foods/bg1.png);
		border:0;
		font-family:PingFangSC-Semibold;
		font-size:36px;
		color:#ffffff;
	}
</style>