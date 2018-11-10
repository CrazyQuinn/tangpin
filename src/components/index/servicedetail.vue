<template>
	<div>
		<div class="servicedetail-div1">
			<img src="../../assets/index/back.png" @click="back">
			<img src="../../assets/service/shoucang.png" class="right">
			<img src="../../assets/service/fenxiang.png" class="right">

		</div>



		<div class="servicedetail-div2">
			<mt-swipe :auto="4000" :show-indicators="false">
			  <mt-swipe-item><img src="../../assets/service/service4.png" class="servicedetail-img1"></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/service/service4.png" class="servicedetail-img1"></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/service/service4.png" class="servicedetail-img1"></mt-swipe-item>
			</mt-swipe>
		</div>



		<div class="servicedetail-div3">
			<h1>鸣·瑜伽调理塑形服务套餐</h1>
			<p>
				<span>￥798</span>
				<span>￥999</span>
				<span>限时特惠</span>
			</p>
		</div>

		<div class="servicedetail-div4">
			<ul>
				<li><img src="../../assets/service/service6.png"></li>
				<li>预定数量</li>
			</ul>
			<el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
		</div>

		<div class="servicedetail-div5">
			<h1>服务详情</h1>
			<div class="servicedetail-div6">
				<h2>服务内容</h2>
				<ul>
						<li><span>1.推拿</span>20分钟</li>
						<li><span>2.疏通</span>20分钟</li>
						<li><span>3.拔罐</span>20分钟</li>
						<li><span>4.塑形</span>20分钟</li>
				</ul>
				<h2>针对部位</h2>
				<p class="servicedetail-p1">
					<ul>
						<li>
							<img src="../../assets/service/service7.png">
							<p>肩部</p>
						</li>
						<li>
							<img src="../../assets/service/service7.png">
							<p>肩部</p>
						</li>
						<li>
							<img src="../../assets/service/service7.png">
							<p>肩部</p>
						</li>
					</ul>
				</p>
			</div>
			<h1>购买须知</h1>
			<div class="servicedetail-div7">
				<ul>
					<li><span>有效期</span>2018年10月20日 - 2019年2月22日</li>
					<li><span>使用时间</span>每天 09:00 - 18:00</li>
					<li><span>预约规则</span>提前一天电话预约</li>
					<li><span>适用人群</span>高血压、孕妇不可用</li>
				</ul>

			</div>

		</div>

		<div class="servicedetail-div8">
				<h1 class=""><p>5.0</p><p>超出预期</p></h1>
				<div class="servicedetail-div9">
					<p>评论(120)</p>
					<span>服务不错(30)</span>
					<span>非常干净(30)</span>
				</div>
				<router-link to="/evaluate" tag="span" class="servicedetail-span1"><img src="../../assets/back1.png"></router-link>
		</div>



		<div class="servicedetail-div10">
			<router-link to="/shopsMain" tag="ul">
				<li><img src="../../assets/service/service6.png"></li>
				<li>店铺名称</li>
			</router-link>
			<span><img src="../../assets/back1.png"></span>
		</div>

		<footer class="servicedetail-footer">
			<p class="left">
				<span>￥798</span>
				<span>￥999</span>
			</p>
			<el-row class="right">
			  <el-button :round="false" class="servicedetail-elbutton">立即预定</el-button>
			</el-row>




		</footer>



	</div>
</template>

<script type="text/javascript">
	
	export default {
		name:"servicedetail",
		data(){
			return {
				num1:1
			}
		},
		 methods: {
		      handleChange(value) {
		        console.log(value);
      		},
      		 back(){
	    		this.$router.go(-1)
	    	}
   		 }

	}
</script>

<!-- 给style标签加scoped属性， 避免样式污染全局 -->
<style type="text/css" scoped>
	.servicedetail-div1{
		display: flex;
		height: 120px;
		width: 100%;
		text-align: center;
		background-color: #FFF;
	}
	.servicedetail-div1 img:nth-child(1){
		width:22px;
		height:39px;
		margin-left: 42px;
		margin-top: 45px;
	}
	.servicedetail-div1 img:nth-child(2){
		width:39px;
		height:34px;
		position: absolute;
		top: 50px;
		right: 124px;
	}		
	.servicedetail-div1 img:nth-child(3){
		width:34px;
		height:34px;
		position: absolute;
		top: 50px;
		right: 39px;
	}	
	.servicedetail-div2{
		background-color: #FFF;
		padding-top: 40px;
		height: 330px;
	}
	 .servicedetail-div2 .el-carousel__item h3 {
	    color: #475669;
	    font-size: 18px;
	    opacity: 0.75;
	    line-height: 300px;
	    margin: 0;
	}
	.servicedetail-img1{
		width:660px;
		height: 310px;
		margin-left:40px;
	}
	.servicedetail-div3{
		background-color: #FFF;
		padding-left: 40px;
		padding-top: 30px;
		margin-bottom: 15px;
	}
	.servicedetail-div3 h1{
		font-family:PingFangSC-Medium;
		font-size:36px;
		color:#333333;

	}
	.servicedetail-div3 p{
		padding-top: 14px;

	}
	.servicedetail-div3 p span:nth-child(1){
		width: 100px;
		height: 62px;
		display: inline-block;
		font-family:PingFangSC-Regular;
		font-size:36px;
		color:#fa4c01;
		letter-spacing:-0px;
	}
	.servicedetail-div3 p span:nth-child(2){
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#999999;
		letter-spacing:-0px;
		text-decoration: line-through;
	}
	.servicedetail-div3 p span:nth-child(3){
		font-family:PingFangSC-Regular;
		font-size:20px;
		color:#fa4c01;
		letter-spacing:0.09px;
		display: inline-block;
		width: 100px;
		height: 23px;
		border:1px solid #fa4c01;
		border-radius:3px;
		text-align: center;
		vertical-align:top;

	}
	.servicedetail-div4,.servicedetail-div10{
		height: 66px;
		background-color: #FFF;
		display: flex;
		padding-top: 34px;
		margin-bottom: 15px;
	}

	.servicedetail-div4 ul,.servicedetail-div10 ul{
		width: 510px;
		height:66px;
	}
	.servicedetail-div4 ul li:nth-child(1),.servicedetail-div10 ul li:nth-child(1){
		width:54px;
		height:31px;
		display: inline-block;
		line-height: 100px;
		margin-left: 44px;
		border-right: 1px solid #eee;

	}
	.servicedetail-div4 ul li:nth-child(1) img,.servicedetail-div10 ul li:nth-child(1) img{
		width: 29px;
		height: 31px;
	}
	.servicedetail-div4 ul li:nth-child(2),.servicedetail-div10 ul li:nth-child(2){
		width: 113px;
		display: inline-block;
		vertical-align: top;
		margin-left: 19px;
	}

	.servicedetail-div5{
		height: 820px;
		background-color: #FFF;
		margin-bottom: 15px;
		padding-left: 46px;
		padding-top: 30px;
	}
	.servicedetail-div5 h1{
		font-family:PingFangSC-Medium;
		font-size:28px;
		color:#333333;
		letter-spacing:0.45px;
		margin-bottom: 16px;
	}
	.servicedetail-div6 h2{
		margin-left: 4px;
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#333333;
		letter-spacing:0.39px;
		line-height:40px;
		margin-bottom: 24px;
	}
	.servicedetail-div6 ul{
		height: 200px;
		margin-bottom: 20px;
		margin-left: 2px;
	}
	.servicedetail-div6 li{
		font-family:PingFangSC-Regular;
		font-size:24px;
		height: 50px;
		line-height: 50px;
		letter-spacing:0.39px;
	}
	.servicedetail-div6 li span{
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#666666;
		letter-spacing:0.39px;
		margin-right: 20px;
	}
	.servicedetail-p1 img{
		width:39px;
		height:45px;
	}

	.servicedetail-p1 ul{
		display: flex;
		width: 375px;
		height: 100px;
		padding-left: 46px;

	}
	.servicedetail-p1 ul li{
		flex: 1;
	}



	.servicedetail-div7 ul li{
		height: 50px;
		margin-left: 4px;
	}

	.servicedetail-div7 ul li span{
		display: inline-block;
		width: 98px;
		text-align: right;
		margin-right: 20px;

	}











	.servicedetail-div8{
		display: flex;
		padding-left: 41px;
		padding-top: 21px;
		background-color: #FFF;
		justify-content: center;
		height: 145px;
		margin-bottom: 15px;

	}

	.servicedetail-div8 h1{
		width: 130px;
		height: 116px;
		text-align: center;



	}

	.servicedetail-div8 h1 p:nth-child(1){
		font-family:Arial-BoldMT;
		font-size:48px;
		color:#ffffff;
		letter-spacing:0.17px;
		background-image: url(../../assets/stay/bg.png);
		height: 64px;
		line-height: 64px;
		width: 130px;

	}
	.servicedetail-div8 h1 p:nth-child(2){
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#fdab2b;
		letter-spacing:0.09px;	
		height: 52px;
		line-height: 52px;
		background:#fffaf0;
		width: 130px;

	}
	.servicedetail-div8 span img{
		width:14px;
		height:25px;
		margin-top: 30px;
	}
	.servicedetail-div9{
		margin-left: 30px;
		width: 460px;

		
	}
	.servicedetail-div9 p{
		font-family:PingFangSC-Regular;
		font-size:28px;
		color:#333333;
		letter-spacing:0.1px;
	}
	.servicedetail-div9 span{
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#fdab2b;
		letter-spacing:0.09px;
		display: inline-block;
		background:#f2f2f2;
		border-radius:24px;
		width:181px;
		height:48px;
		text-align: center;
		line-height: 48px;
		margin-top: 30px;
		margin-right: 10px;
	}
	.servicedetail-span1{
		color: #000;
		font-size: 35px;
		margin-left: 10px;
		display: block;
		width: 80px;
		line-height: 58px;
		height: 58px;
		margin-top: 15px;
	}
	.servicedetail-div10 span img{
		width:14px;
		height:25px;
		margin-left: 160px;
	}

	.left{
		float: left;
	}
	.right{
		float: right;
	}
	.servicedetail-footer{
		height: 120px;
		background-color: #FFF;
	}
	.servicedetail-footer p{
		height: 120px;
		line-height: 120px;
		margin-left: 40px;
	}
	.servicedetail-footer p span:nth-child(1){
		width: 100px;
		height: 62px;
		display: inline-block;
		font-family:PingFangSC-Regular;
		font-size:36px;
		color:#fa4c01;
		letter-spacing:-0px;
	}
	.servicedetail-footer p span:nth-child(2){
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#999999;
		letter-spacing:-0px;
		text-decoration: line-through;
	}
	.servicedetail-elbutton{
		width:358px;
		height:120px;
		font-family:PingFangSC-Semibold;
		font-size:36px;
		color:#ffffff;
		letter-spacing:-0px;
		background-image: url(../../assets/service/bg.png);
		background-repeat: no-repeat;
		background-size: 358px 120px;
	}

</style>