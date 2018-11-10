<template>
	<div>
		<div class="foodsdetail-div1">
			<img src="../../assets/index/back.png" @click="back">
			
		</div>

		<div class="foodsdetail-div2">
			<mt-swipe :auto="4000" :show-indicators="false">
			  <mt-swipe-item><img src="../../assets/foods/foods.png" class="foodsdetail-img1"></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/foods/foods.png" class="foodsdetail-img1"></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/foods/foods.png" class="foodsdetail-img1"></mt-swipe-item>
			</mt-swipe>
		</div>

		<div class="foodsdetail-div3">
			<h1>冬瓜排骨蛤蜊汤</h1>
			<p>
				<span>￥798</span>
				<span>￥999</span>
				<span>限时特惠</span>
			</p>


		</div>

		<router-link to="/evaluate" tag="div" class="foodsdetail-div4">
				<h1 class=""><p>5.0</p><p>超出预期</p></h1>
				<div class="foodsdetail-div5">
					<p>评论(120)</p>
					<span>服务不错(30)</span>
					<span>非常干净(30)</span>
				</div>
				<span class="foodsdetail-span1"><img src="../../assets/back1.png"></span>
		</router-link >

<el-button type="text" @click="dialogTableVisible = true">
		<div class="foodsdetail-div6">
			
			<ul>
				<li><img src="../../assets/foods/canshu.png"></li>
				<li>参数选择</li>
			</ul>
			<span><img src="../../assets/back1.png"></span>

		</div>
</el-button>


		<div class="foodsdetail-div7">
			<ul>
				<li><img src="../../assets/foods/shuliang.png"></li>
				<li>购买数量</li>
			</ul>
			<el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>

		</div>


		<div class="foodsdetail-div8">
			<ul>
				<li><img src="../../assets/stay/dianpu.png"></li>
				<li>北李妈妈菜臻品餐厅</li>
			</ul>

		</div>
		<div class="foodsdetail-div9">
				<ul>
					<li>
						<img src="../../assets/foods/weizhi.png">
						<span class="foodsdetail-span2">（一部）高尔基路695号凯德和平广场4层</span>
						<span class="foodsdetail-span3">导航</span>
					</li>
					<li>
						<img src="../../assets/foods/weizhi.png">
						<span class="foodsdetail-span2">（一部）高尔基路695号凯德和平广场4层</span>
						<span class="foodsdetail-span3">导航</span>
					</li>
				</ul>
		</div>

		<div class="foodsdetail-div10">
			<ul>
				<li>预约</li>
				<li>客服</li>
				<li><button >加入购物车</button></li>
				<li>			
					<div class="foodsdetail-div11">
				     	<h1><el-button type="text" @click="dialogTableVisible = true" class="foodsdetail-button2">立即订购</el-button></h1>
						<el-dialog 
							title="" 
							:visible.sync="dialogTableVisible" 
							width="100%"
							:lock-scroll="true"
							id="dialog-el"
							:modal-append-to-body='false'
							>

							<div class="foodsdetail-div11-div2">
								<figure>
									<img src="../../assets/foods/jiaozi.png">
									<figcaption>
										<h1>冬瓜排骨蛤蜊汤</h1>
										<h2>￥798</h2>
									</figcaption>
								</figure>
							<div class="foodsdetail-div11-div3">
								<h1>套餐</h1>
								<span v-for="item,myindex in list"  @click="handleClick(myindex)"
								 :class="currentIndex==myindex?'span123':'span111'">{{item}}</span>
								
							</div>


							<div class="foodsdetail-div11-div4">
								<span>购买数量</span>
								 <el-input-number v-model="num1" @change="handleChange" :min="1" label="描述文字" class="foodsdetail-input1"></el-input-number>
							</div>



							<div class="foodsdetail-div11-div5">
								<button id="foodsdetail-button1" @click="closeDialog">确定</button>
							</div>
							</div>




						</el-dialog>
					</div>
				</li>
			</ul>
		</div>

	</div>
</template>

<script type="text/javascript">
	
	export default {
		name:"foodsdetail",
		data(){
			return {
				 num1: 1,
				dialogTableVisible:false,
				list:["套餐1","套餐2","套餐3","套餐4","套餐5","套餐6"],
				currentIndex:0
			}
		},
		methods: {
	      handleChange(value) {
	        console.log(value);
	      },
	      handleClick(myindex){
					console.log("click",myindex);
					this.currentIndex = myindex
			},
	      back(){
	    		this.$router.go(-1)
	    	},
	    	closeDialog(){
	    		this.dialogTableVisible=false
	    	}
    }

	}
</script>

<!-- 给style标签加scoped属性， 避免样式污染全局 -->
<style type="text/css">
	.foodsdetail-div1{
		display: flex;
		height: 120px;
		width: 100%;
		text-align: center;
		background-color: #FFF;
	}
	.foodsdetail-div1 img{
		width:22px;
		height:39px;
		margin-left: 42px;
		margin-top: 64px;
	}
	.foodsdetail-div2{
		background-color: #FFF;
		padding-top: 40px;
		height: 330px;
		width: 100%;
	}
	 .foodsdetail-div2 .el-carousel__item h3 {
	    color: #475669;
	    font-size: 18px;
	    opacity: 0.75;
	    line-height: 300px;
	    margin: 0;
	}
	.foodsdetail-img1{
		width:660px;
		height: 310px;
		margin-left:40px;
	}
	.foodsdetail-div3{
		background-color: #FFF;
		padding-left: 40px;
		padding-top: 30px;
		margin-bottom: 15px;
	}
	.foodsdetail-div3 h1{
		font-family:PingFangSC-Medium;
		font-size:36px;
		color:#333333;

	}
	.foodsdetail-div3 p{
		padding-top: 14px;

	}
	.foodsdetail-div3 p span:nth-child(1){
		width: 100px;
		height: 62px;
		display: inline-block;
		font-family:PingFangSC-Regular;
		font-size:36px;
		color:#fa4c01;
		letter-spacing:-0px;
	}
	.foodsdetail-div3 p span:nth-child(2){
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#999999;
		letter-spacing:-0px;
		text-decoration: line-through;
	}
	.foodsdetail-div3 p span:nth-child(3){
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


	.foodsdetail-div4{
		display: flex;
		padding-left: 41px;
		padding-top: 21px;
		background-color: #FFF;
		justify-content: center;
		height: 145px;
		margin-bottom: 15px;

	}

	.foodsdetail-div4 h1{
		width: 130px;
		height: 116px;
		text-align: center;



	}

	.foodsdetail-div4 h1 p:nth-child(1){
		font-family:Arial-BoldMT;
		font-size:48px;
		color:#ffffff;
		letter-spacing:0.17px;
		background-image: url(../../assets/stay/bg.png);
		height: 64px;
		line-height: 64px;
		width: 130px;

	}
	.foodsdetail-div4 h1 p:nth-child(2){
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#fdab2b;
		letter-spacing:0.09px;	
		height: 52px;
		line-height: 52px;
		background:#fffaf0;
		width: 130px;

	}
	.foodsdetail-div5{
		margin-left: 30px;
		width: 460px;

		
	}
	.foodsdetail-div5 p{
		font-family:PingFangSC-Regular;
		font-size:28px;
		color:#333333;
		letter-spacing:0.1px;
	}
	.foodsdetail-div5 span{
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
	.foodsdetail-span1 {
		color: #000;
		font-size: 35px;
		margin-left: 10px;
		display: block;
		width: 80px;
		line-height: 58px;
		height: 58px;
		margin-top: 15px;
	}

	.foodsdetail-div6{

		width: 750px;
	}

	.foodsdetail-div6,.foodsdetail-div7{
		height: 66px;
		background-color: #FFF;
		display: flex;
		padding-top: 34px;
		margin-bottom: 15px;	
	}
	.foodsdetail-div7 ul,.foodsdetail-div8 ul{
		width: 510px;
		height:66px;
	}
	.foodsdetail-div6 ul{
	
	}
	.foodsdetail-div6 ul li:nth-child(1),.foodsdetail-div7 ul li:nth-child(1),.foodsdetail-div8 ul li:nth-child(1){
		width:54px;
		height:31px;
		display: inline-block;
		line-height: 100px;
		margin-left: 44px;
		border-right: 1px solid #eee;

	}
	.foodsdetail-div6 ul li:nth-child(1) img,.foodsdetail-div7 ul li:nth-child(1) img,.foodsdetail-div8 ul li:nth-child(1) img{
		width: 29px;
		height: 31px;
		margin-top: 5px;
	}
	.foodsdetail-div7 ul li:nth-child(2),.foodsdetail-div8 ul li:nth-child(2){
		
		display: inline-block;
		vertical-align: top;
		margin-left: 19px;
		font-family:PingFangSC-Regular;
		font-size:28px;
		color:#333333;
		letter-spacing:0.1px;
	}
	.foodsdetail-div6 ul li:nth-child(2){
		font-family:PingFangSC-Regular;
		font-size:28px;
		color:#333333;
		letter-spacing:0.1px;
		display: inline-block;
		vertical-align: top;
		margin-left: 19px;
		}
	.foodsdetail-div6 span img{
		width:14px;
		height:25px;
		margin-left: 430px;
	}
	.foodsdetail-span1 img{
		width:14px;
		height:25px;
		margin-top:30px;
	}
	.foodsdetail-div8{
	
		background-color: #FFF;
		display: flex;
		padding-top: 34px;
	}

	.foodsdetail-div9{
		background-color:#fff;
		padding-bottom: 1px;
		margin-bottom: 145px;

	}
	.foodsdetail-div9 ul li {
		display: flex;
		padding-left: 51px;
		margin-bottom: 40px;

	}
	.foodsdetail-div9 ul li img{
		width:29px;
		height:33px;
	}
	.foodsdetail-span2{
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#999999;
		letter-spacing:0.09px;
	}
	.foodsdetail-span3{
		width: 85px;
		text-align: right;
		background-image: url(../../assets/foods/daohang.png);
		background-repeat: no-repeat;
		background-size: 24px 24px;
		background-position: 0px 5px;
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#fdab2b;
		letter-spacing:0.09px;
		margin-left: 113px;

	}
	.foodsdetail-div10{
		background-color: #FFF;
		position: fixed;
		bottom: 0;
		left: 0;
		width:100%;
		z-index: 1000;


	}
	.foodsdetail-div10 ul{
		display: flex;

	}
	.foodsdetail-div10 ul li{
		flex: 1;
		height: 120px;
	}
	.foodsdetail-div10 ul li:nth-child(1){
		text-align: center;
		height: 100px;
		line-height: 120px;
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#333333;
		letter-spacing:-0px;
		padding-top: 20px;
		background-image: url(../../assets/foods/yuyue.png);
		background-repeat: no-repeat;
		background-size: 39px 37px;
		background-position: 54px 20px;
	}
	.foodsdetail-div10 ul li:nth-child(1) img{
		width: 39px;
		height: 37px;

	}
	.foodsdetail-div10 ul li:nth-child(2){
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#333333;
		letter-spacing:-0px;
		text-align: center;
		height: 100px;
		line-height: 120px;
		padding-top: 20px;
		background-image: url(../../assets/foods/erji.png);
		background-repeat: no-repeat;
		background-size: 39px 37px;
		background-position: 54px 20px;
	}
	.foodsdetail-div10 ul li:nth-child(2) img{
		width: 34px;
		height: 34px;
	}
	.foodsdetail-div10 ul li:nth-child(3) button{
		width: 228px;
		height: 120px;
		background: url(../../assets/foods/bg.png) no-repeat;
		border:0px;
		color: #FFF;
		font-size: 36px;

	}
	.foodsdetail-div10 ul li:nth-child(4) .foodsdetail-button2{
		width: 228px;
		height: 120px;
		background: url(../../assets/foods/bg1.png) no-repeat;
		border:0px;
		color: #FFF;
		font-size: 36px;
	}
	.foodsdetail-div11 #dialog-el{
		margin-top: 314px!important;
	}
	 .foodsdetail-div10 ul li .foodsdetail-div11 .el-dialog{
	 	margin-bottom: 0px!important;

	 }
	.foodsdetail-div11-div2 figure{
		height: 200px;
		background-color: #fff;
		margin-left: 15px;
		border-bottom: 1px solid #eee;
	}
	.foodsdetail-div11-div2 figure img{
		width: 218px;
		height: 163px;
		float: left;
		margin-right: 30px;

	}
	.foodsdetail-div11-div2 figure figcaption{
		margin-top: 50px;
		float: left;

	}
	.foodsdetail-div11-div2 figure figcaption h1{
		font-family:PingFangSC-Regular;
		font-size:30px;
		color:#333333;
		margin-bottom: 20px;
		font-weight: 500;

	}
	.foodsdetail-div11-div2 figure figcaption h2{
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#fa4c01;
		letter-spacing:-0px;
		font-weight: 500;

	}

	.foodsdetail-div11-div3{
		height: 218px;
		margin-left: 15px;
		padding-top: 27px;
		border-bottom: 1px solid #eee;
	}
	.foodsdetail-div11-div3 h1{
		font-family:PingFangSC-Regular;
		color:#333333;
		font-weight: 500;
		margin-bottom: 20px;

	}
	.foodsdetail-div11-div3 span{
		display: inline-block;
		width: 142px;
		height: 54px;
		font-family:PingFangSC-Regular;
		font-size:24px;
		border-radius:32.5px;
		text-align: center;
		line-height: 54px;
		margin-right: 20px;
		margin-bottom: 20px;
		
	}
	.span111{
		color:#333333;
		background-color:#efefef;
	}
	.span123{
		background-color:#fdab2b;
		color: #fff;
	}

	.foodsdetail-div11-div4{
		height: 150px;
		margin-top: 32px;
		padding-left: 15px;
	

	}
	.foodsdetail-div11-div4 span{
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#333333;
		letter-spacing:0.09px;
	}
	.foodsdetail-div11-div4 .foodsdetail-input1{
		float: right;
	}

	.foodsdetail-div11-div5 #foodsdetail-button1{
		width: 690px;
		height: 100px;
		border-radius:50px;
		background-image: url(../../assets/foods/button1.png);
		background-repeat: no-repeat;
		background-size: 690px 100px;
		background-color: #fff;
		border: 0;
		color: #fff;
	}
</style>