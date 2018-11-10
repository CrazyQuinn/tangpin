<template>
	<div>
		<div class="staydetail-div1">
			<img src="../../assets/index/back.png" @click="back">
			<img src="../../assets/service/shoucang.png" class="right">
			<img src="../../assets/service/fenxiang.png" class="right">
			
		</div>

		<div class="staydetail-div2">

			 <mt-swipe :auto="4000" :show-indicators="false">
			  <mt-swipe-item><img src="../../assets/stay/house.png" class="staydetail-img1"></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/stay/house.png" class="staydetail-img1"></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/stay/house.png" class="staydetail-img1"></mt-swipe-item>
			</mt-swipe>
		</div>

		<div class="staydetail-div3">
			<h1>北京福地凰城酒店</h1>
			<p>广东省深圳市南山区星海大街88号深业上城<span><img src="../../assets/back1.png"></span></p>
			<h4></h4>

		</div>

		
			<router-link to="/evaluate" tag="div" class="staydetail-div4">
				<h1 class=""><p>5.0</p><p>超出预期</p></h1>
				<div class="staydetail-div5">
					<p>评论(120)</p>
					<span>服务不错(30)</span>
					<span>非常干净(30)</span>
				</div>
				<span class="staydetail-span1"><img src="../../assets/back1.png"></span>
			</router-link>
	

	
		<div class="staydetail-div6">
			<router-link to="/shopsMain" tag="ul">
				<li><img src="../../assets/stay/dianpu.png"></li>
				<li>店铺名称</li>
			</router-link>
			<span><img src="../../assets/back1.png"></span>
		</div>

		<div class="staydetail-div6">
			 <ul>
				<li><img src="../../assets/stay/rili.png"></li>
				<li>到店时间</li>
			</ul>
		<div class="staydetail-div6-div1">
		<div class="block staydetail-div6-div2">
			    <el-date-picker
			      v-model="value1"
			      type="datetime"
			      placeholder="11月04日  20:00"
			      format="MM 月 dd 日 HH : mm "
			      prefix-icon=" "
			      clear-icon=" "
			      size="large"
			      :editable="false">
			    </el-date-picker>
			    <span><img src="../../assets/back1.png"></span> 
			 </div>
			
		</div>
		</div>



		<div class="staydetail-div7">
			<span>大床房</span>
			<span>标准间</span>
			<span>筛选</span>
		</div>

		<div class="staydetail-div8">
			<el-collapse  @change="handleChange">
			  <el-collapse-item name="1">
			  	    <template slot="title">
				     <div class="staydetail-div9">
				     	<ul>
				     		<li>
				     			<img src="../../assets/stay/house1.png">
				     			<div class="staydetail-div9-div1">
				     				<h1><el-button type="text" @click="dialogTableVisible = true">标准大床房</el-button></h1>
									<el-dialog 
									title="标准双床间 【标准双床房+无早】" 
									:visible.sync="dialogTableVisible" 
									width="100%"
									:lock-scroll="true">

								 	<mt-swipe :auto="4000">
									  <mt-swipe-item><img src="../../assets/stay/house.png"></mt-swipe-item>
									  <mt-swipe-item><img src="../../assets/stay/house.png"></mt-swipe-item>
									  <mt-swipe-item><img src="../../assets/stay/house.png"></mt-swipe-item>
									</mt-swipe>
 									
 									<ul> 
 										<li><span>床型</span> <i>2张单人床1.2m</i> <span>面积</span><i>28㎡</i></li>
 										<li><span>可住</span> <i>2人</i> <span>楼层</span><i>5-9</i></li>
 										<li><span>网络</span> <i>免费Wi-Fi 公共区域上网</i> <span>电话</span><i>国内长途（收费）</i></li>
 										<li><span>窗户</span><i>有窗</i></li>
 										<li><span>卫浴</span><i>独立洗浴</i></li>
 										<li><span>早餐</span><i>无早</i></li>

 									</ul>

 									<div class="staydetail-div9-div2">
 										<h1>使用规则</h1>
 										<p class="staydetail-div9-div2-p1">1. 使用规则使用规则使用规则使用规则使用规则使用规则使用规则使用规则</p>
 										<p class="staydetail-div9-div2-p1">2. 使用规则使用规则使用规则使用规则使用规则使用规则使用规则使用规则</p>
 										<p class="staydetail-div9-div2-p1">3. 使用规则使用规则使用规则使用规则使用规则使用规则使用规则使用规则</p>
 									</div>

 									<div class="staydetail-div9-div3">
 										<h1>详细设施</h1>
 										<ul> 
	 										
	 										<li><span>冰箱</span><i>双开门冰箱</i></li>
	 										<li><span>Wi-Fi</span><i>全天24小时免费</i></li>
	 										<li><span>电视</span><i>海信24寸液晶电视</i></li>

 										</ul>
 									</div>

 									<footer class="staydetail-div9-footer">
										<p class="left">
											<span>￥798</span>
											<span>￥999</span>
											<i id="staydetail-div9-footer-p1">优惠已减￥26</i>
										</p>
										<el-row class="right">
										  <el-button :round="false" class="staydetail-div9-elbutton">立即预定</el-button>
										</el-row>




									</footer>


									</el-dialog>

				     				<h2><span>25平米</span> <span>大床1.8米</span> <span>有窗</span></h2>
				     				<h3><span>&nbsp;立减&nbsp;</span><span>&nbsp;限时特惠&nbsp;</span></h3>
				     			</div>
				     			<p>
				     				<span>￥603 <span>起</span></span>
				     				
				     				<img src="../../assets/stay/bottom.png">
				     			</p>

				     		</li>
				     	</ul>
				     	
				     </div>
				    </template>
			   		<div class="staydetail-div10">
				   		<ul>
				   			<li>
				   				<div class="staydetail-div10-div1">
					   				<h1>大床 无早 不可取消</h1>
					   				<h2>25平米 大床1.8米</h2>
									<h3><span>&nbsp;立减&nbsp;</span><span>&nbsp;限时特惠&nbsp;</span></h3>
								</div>
								<div class="staydetail-div10-div2">
									<h1>￥603</h1>
									<h2>￥899</h2>
									<h3>优惠已减￥19</h3>
								</div>
								<div class="staydetail-div10-div3">
									<el-row>
									  <router-link to="/reserve" tag="el-button" class="staydetail-button1">预定</router-link>
									</el-row>
								</div>
				   			</li>
				   		</ul>
			   		</div>	
			   		<div class="staydetail-div10">
				   		<ul>
				   			<li>
				   				<div class="staydetail-div10-div1">
					   				<h1>大床 无早 不可取消</h1>
					   				<h2>25平米 大床1.8米</h2>
									<h3><span>&nbsp;立减&nbsp;</span><span>&nbsp;限时特惠&nbsp;</span></h3>
								</div>
								<div class="staydetail-div10-div2">
									<h1>￥603</h1>
									<h2>￥899</h2>
									<h3>优惠已减￥19</h3>
								</div>
								<div class="staydetail-div10-div3">
									<el-row>
									  <router-link to="/reserve" tag="el-button" class="staydetail-button1">预定</router-link>
									</el-row>
								</div>
				   			</li>
				   		</ul>
			   		</div>	
			   		<div class="staydetail-div10">
				   		<ul>
				   			<li>
				   				<div class="staydetail-div10-div1">
					   				<h1>大床 无早 不可取消</h1>
					   				<h2>25平米 大床1.8米</h2>
									<h3><span>&nbsp;立减&nbsp;</span><span>&nbsp;限时特惠&nbsp;</span></h3>
								</div>
								<div class="staydetail-div10-div2">
									<h1>￥603</h1>
									<h2>￥899</h2>
									<h3>优惠已减￥19</h3>
								</div>
								<div class="staydetail-div10-div3">
									<el-row>
									 <router-link to="/reserve" tag="el-button" class="staydetail-button1">预定</router-link>
									</el-row>
								</div>
				   			</li>
				   		</ul>
			   		</div>
			  </el-collapse-item>
			   <el-collapse-item name="2">
			  	    <template slot="title">
				     <div class="staydetail-div9">
				     	<ul>
				     		<li>
				     			<img src="../../assets/stay/house1.png">
				     			<div class="staydetail-div9-div1">
				     				<h1><el-button type="text" @click="dialogTableVisible = true">标准大床房</el-button></h1>
									<el-dialog 
									title="标准双床间 【标准双床房+无早】" 
									:visible.sync="dialogTableVisible" 
									width="100%"
									:lock-scroll="true">

								 	<mt-swipe :auto="4000">
									  <mt-swipe-item><img src="../../assets/stay/house.png"></mt-swipe-item>
									  <mt-swipe-item><img src="../../assets/stay/house.png"></mt-swipe-item>
									  <mt-swipe-item><img src="../../assets/stay/house.png"></mt-swipe-item>
									</mt-swipe>
 									
 									<ul> 
 										<li><span>床型</span> <i>2张单人床1.2m</i> <span>面积</span><i>28㎡</i></li>
 										<li><span>可住</span> <i>2人</i> <span>楼层</span><i>5-9</i></li>
 										<li><span>网络</span> <i>免费Wi-Fi 公共区域上网</i> <span>电话</span><i>国内长途（收费）</i></li>
 										<li><span>窗户</span><i>有窗</i></li>
 										<li><span>卫浴</span><i>独立洗浴</i></li>
 										<li><span>早餐</span><i>无早</i></li>

 									</ul>

 									<div class="staydetail-div9-div2">
 										<h1>使用规则</h1>
 										<p class="staydetail-div9-div2-p1">1. 使用规则使用规则使用规则使用规则使用规则使用规则使用规则使用规则</p>
 										<p class="staydetail-div9-div2-p1">2. 使用规则使用规则使用规则使用规则使用规则使用规则使用规则使用规则</p>
 										<p class="staydetail-div9-div2-p1">3. 使用规则使用规则使用规则使用规则使用规则使用规则使用规则使用规则</p>
 									</div>

 									<div class="staydetail-div9-div3">
 										<h1>详细设施</h1>
 										<ul> 
	 										
	 										<li><span>冰箱</span><i>双开门冰箱</i></li>
	 										<li><span>Wi-Fi</span><i>全天24小时免费</i></li>
	 										<li><span>电视</span><i>海信24寸液晶电视</i></li>

 										</ul>
 									</div>

 									<footer class="staydetail-div9-footer">
										<p class="left">
											<span>￥798</span>
											<span>￥999</span>
											<i id="staydetail-div9-footer-p1">优惠已减￥26</i>
										</p>
										<el-row class="right">
										  <el-button :round="false" class="staydetail-div9-elbutton">立即预定</el-button>
										</el-row>




									</footer>


									</el-dialog>

				     				<h2><span>25平米</span> <span>大床1.8米</span> <span>有窗</span></h2>
				     				<h3><span>&nbsp;立减&nbsp;</span><span>&nbsp;限时特惠&nbsp;</span></h3>
				     			</div>
				     			<p>
				     				<span>￥603 <span>起</span></span>
				     				
				     				<img src="../../assets/stay/bottom.png">
				     			</p>

				     		</li>
				     	</ul>
				     	
				     </div>
				    </template>
			   		<div class="staydetail-div10">
				   		<ul>
				   			<li>
				   				<div class="staydetail-div10-div1">
					   				<h1>大床 无早 不可取消</h1>
					   				<h2>25平米 大床1.8米</h2>
									<h3><span>&nbsp;立减&nbsp;</span><span>&nbsp;限时特惠&nbsp;</span></h3>
								</div>
								<div class="staydetail-div10-div2">
									<h1>￥603</h1>
									<h2>￥899</h2>
									<h3>优惠已减￥19</h3>
								</div>
								<div class="staydetail-div10-div3">
									<el-row>
									  <router-link to="/reserve" tag="el-button" class="staydetail-button1">预定</router-link>
									</el-row>
								</div>
				   			</li>
				   		</ul>
			   		</div>	
			   		<div class="staydetail-div10">
				   		<ul>
				   			<li>
				   				<div class="staydetail-div10-div1">
					   				<h1>大床 无早 不可取消</h1>
					   				<h2>25平米 大床1.8米</h2>
									<h3><span>&nbsp;立减&nbsp;</span><span>&nbsp;限时特惠&nbsp;</span></h3>
								</div>
								<div class="staydetail-div10-div2">
									<h1>￥603</h1>
									<h2>￥899</h2>
									<h3>优惠已减￥19</h3>
								</div>
								<div class="staydetail-div10-div3">
									<el-row>
									  <router-link to="/reserve" tag="el-button" class="staydetail-button1">预定</router-link>
									</el-row>
								</div>
				   			</li>
				   		</ul>
			   		</div>	
			   		<div class="staydetail-div10">
				   		<ul>
				   			<li>
				   				<div class="staydetail-div10-div1">
					   				<h1>大床 无早 不可取消</h1>
					   				<h2>25平米 大床1.8米</h2>
									<h3><span>&nbsp;立减&nbsp;</span><span>&nbsp;限时特惠&nbsp;</span></h3>
								</div>
								<div class="staydetail-div10-div2">
									<h1>￥603</h1>
									<h2>￥899</h2>
									<h3>优惠已减￥19</h3>
								</div>
								<div class="staydetail-div10-div3">
									<el-row>
									  <router-link to="/reserve" tag="el-button" class="staydetail-button1">预定</router-link>
									</el-row>
								</div>
				   			</li>
				   		</ul>
			   		</div>
			  </el-collapse-item>

			</el-collapse>
		</div>



	</div>
</template>

<script type="text/javascript">
		
	export default {

		name:"staydetail",
		data(){
			return {
				value1: '',
				dialogTableVisible:false,
			}
		},
		 methods: {
	      handleChange(val) {
	        console.log(val);
	      	},
	      	back(){
	    		this.$router.go(-1)
	    	}
   		 }
	}



</script>

<!-- 给style标签加scoped属性， 避免样式污染全局 -->
<style type="text/css">
	.right{
		float: right;
	}
	.left{
		float: left;
	}
	.staydetail-div1{
		display: flex;
		height: 120px;
		width: 100%;
		text-align: center;
		background-color: #FFF;
	}

	.staydetail-div1 img:nth-child(1){
		width:22px;
		height:39px;
		margin-left: 42px;
		margin-top: 45px;
	}
	.staydetail-div1 img:nth-child(2){
		width:39px;
		height:34px;
		position: absolute;
		top: 50px;
		right: 124px;
	}		
	.staydetail-div1 img:nth-child(3){
		width:34px;
		height:34px;
		position: absolute;
		top: 50px;
		right: 39px;
	}	
	.staydetail-div2{
		background-color: #FFF;
		padding-top: 40px;
		height: 330px;
	}
	 .staydetail-div2 .el-carousel__item h3 {
	    color: #475669;
	    font-size: 18px;
	    opacity: 0.75;
	    line-height: 300px;
	    margin: 0;
	}	
	.staydetail-img1{
		width:660px;
		height: 310px;
		margin-left:40px;
	}
	.staydetail-div3{
		background-color: #FFF;
		padding-left: 40px;
		padding-top: 30px;
	}
	.staydetail-div3 h1{
		font-family:PingFangSC-Medium;
		font-size:36px;
		color:#333333;

	}
	.staydetail-div3 p{
		font-family:PingFangSC-Regular;
		font-size:28px;
		color:#666666;
		margin-top: 30px;
		padding-left: 50px;
		background-image: url(../../assets/stay/map.png);
		background-repeat: no-repeat;
		background-position: 15px 10px;
		background-size: 24px 31px;
	}
	.staydetail-div3 p span{
		color: #000;
		font-size: 35px;


	}
	.staydetail-div3 p span img{
		width:14px;
		height:25px;
		display: inline-block;
		margin-left: 45px;
	}
	.staydetail-div3 h4{
		width: 689px;
		height: 1px;
		background-color: #eee;
		margin-top: 22px;
	}
	.staydetail-div4{
		display: flex;
		padding-left: 41px;
		padding-top: 21px;
		background-color: #FFF;
		justify-content: center;
		height: 145px;
		margin-bottom: 15px;

	}
	.staydetail-div4 h1{
		width: 130px;
		height: 116px;
		text-align: center;
	}

	.staydetail-div4 h1 p:nth-child(1){
		font-family:Arial-BoldMT;
		font-size:48px;
		color:#ffffff;
		letter-spacing:0.17px;
		background-image: url(../../assets/stay/bg.png);
		height: 64px;
		line-height: 64px;
		width: 130px;

	}
	.staydetail-div4 h1 p:nth-child(2){
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#fdab2b;
		letter-spacing:0.09px;	
		height: 52px;
		line-height: 52px;
		background:#fffaf0;
		width: 130px;

	}
	.staydetail-div5{
		margin-left: 30px;
			width: 440px;

		
	}
	.staydetail-div5 p{
		font-family:PingFangSC-Regular;
		font-size:28px;
		color:#333333;
		letter-spacing:0.1px;
	}
	.staydetail-div5 span{
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
	.staydetail-span1{
		color: #000;
		font-size: 35px;
		margin-left: 10px;
		display: block;
		width: 50px;
		line-height: 58px;
		height: 58px;
		margin-top: 15px;
	}
	.staydetail-span1 img{
		width:14px;
		height:25px;
		margin-top:30px;
	}
	.staydetail-div6{
		height: 66px;
		background-color: #FFF;
		display: flex;
		padding-top: 34px;
		margin-bottom: 15px;	
	}

	.staydetail-div6 ul{
		width: 450px;
		height:66px;
	}
	.staydetail-div6 ul li:nth-child(1){
		width:54px;
		height:31px;
		display: inline-block;
		line-height: 100px;
		margin-left: 44px;
		border-right: 1px solid #eee;

	}
	.staydetail-div6 ul li:nth-child(1) img{
		width: 29px;
		height: 31px;
	}
	.staydetail-div6 ul li:nth-child(2){
		width: 113px;
		display: inline-block;
		vertical-align: top;
		margin-left: 19px;
	}
	.staydetail-div6 span img{
		width:14px;
		height:25px;
		margin-left: 220px;
	}
	.el-date-picker{
		margin:-10px -80px;
	}
	.staydetail-div6-div1 .el-input__inner{
		border:0;
	}
	.staydetail-div6-div1 span img{
		margin-left: 0;
		display: inline-block;
		float: right;
	}

	.staydetail-div7{
		height: 110px;
		background-color: #FFF;
		border-bottom: 1px solid #eee;

	}
	.staydetail-div8 h1 .el-button--text{
		font-family:PingFangSC-Regular;
		font-size:28px;
		color:#333333;
		letter-spacing:-0px;
	}
	.staydetail-div8 .el-collapse-item__header{
		height: 190px;
	}
	.staydetail-div9{

	}
	.staydetail-div9 ul li{
		display: flex;
		padding-top: 30px;
		padding-left:40px;
	}
	.staydetail-div9 ul li .staydetail-div9-div1{
		width: 390px;

	}
	.staydetail-div9 ul li .staydetail-div9-div1 h1{
		font-family:PingFangSC-Regular;
		font-size:28px;
		color:#333333;
		letter-spacing:-0px;
	}
	.staydetail-div9 ul li .staydetail-div9-div1 .el-dialog{
		height: 1400px;
		margin-bottom: 0;
	}
	.staydetail-div9-div1 .el-dialog__header{
		height: 97px;

		border-bottom: 1px solid #eee;
	}
	.staydetail-div9-div1 .el-dialog__title{
		font-family:PingFangSC-Regular;
		font-size:28px;
		color:#333333;
		letter-spacing:0.45px;
		line-height: 97px;
	}
	.staydetail-div9-div1 .el-dialog__headerbtn{
		font-size: 26px;
		top:55px;
		right: 48px;
		
	}
	.staydetail-div9 .staydetail-div9-div1 img{
		width: 690px;
		height: 270px;
		border-radius:22px;
	}
	.staydetail-div9-div1 .mint-swipe{

		height: 270px;
		width: 690px;

	}
	.staydetail-div9-div1 ul{
		margin-top: 10px;
	}
	.staydetail-div9-div1 ul li span{
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#999999;
		letter-spacing:0.39px;
		margin-right: 20px;
		margin-left: 10px;
	}
	.staydetail-div9-div1 ul li{
		padding-left: 0px;
		padding-top: 0;
	}
	.staydetail-div9-div1 ul li i{
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#333333;
		letter-spacing:0.39px;
		font-style: normal;
		width: 269px;
	}
	.staydetail-div9-div1 .el-dialog__close{
		color: #000;
	}
	.staydetail-div9 ul li div h2{
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#999999;
		letter-spacing:-0px;
		font-weight: 500
	}
	.staydetail-div9 ul li div h3 span:nth-child(1){
		border:1px solid #fa4c01;
		border-radius:3px;
		width:50px;
		height:23px;
		font-family:PingFangSC-Regular;
		font-size:20px;
		color:#fa4c01;
		letter-spacing:0.09px;
		margin-right: 5px;
		font-weight: 500;
	}
	.staydetail-div9 ul li div h3 span:nth-child(2){
		border:1px solid #fa4c01;
		border-radius:3px;
		width:91px;
		height:23px;
		font-family:PingFangSC-Regular;
		font-size:20px;
		color:#fa4c01;
		font-weight: 500;
		letter-spacing:0.09px;
	}
	
	.staydetail-div9 ul li img{
		width: 130px;
		height: 130px;
		margin-right: 20px;
	}
	.staydetail-div9 ul li p{
		height: 53px;
		margin-top: 30px;
		color: #999
	}
	.staydetail-div9 ul li p img{
		width: 24px;
		height: 24px;
		display: inline-block;
		margin-right: 0;

	}
	.staydetail-div9 ul li p span{
		font-size: 30px;
		color:#fa4c01;
		letter-spacing:0.09px;
		font-family:PingFangSC-Regular;

		margin-right: 5px;

	}
	.staydetail-div9 ul li p span span{
		font-size: 20px;
		color: #999

	}
	.staydetail-div9-div2{
		padding-left: 10px;
		padding-right: 20px;
		border-bottom: 1px solid #eee;
		padding-bottom: 20px;
	}
	.staydetail-div9-div2 .staydetail-div9-div2-p1{
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#666666;
		letter-spacing:0.39px;
		line-height:40px;
		margin-top: 0;
		height: 75px;
	}



	.staydetail-div8 .el-collapse-item__header{
		font-size: 0;
	}
	.staydetail-button1{
		background:#fa4c01;
		border-radius:4px;
		width:91px;
		height:52px;
		font-family:PingFangSC-Regular;
		font-size:28px;
		color:#ffffff;
		letter-spacing:0.12px;
		text-align: center;
		padding:0;
		margin-top: 34px;
		margin-left: 48px;

	}
	.staydetail-button1 .el-button:focus, .el-button:hover{
		color: #ffffff; 
     	background-color: #fa4c01;
	}

	.staydetail-div10 li{
		padding-top: 30px;
		padding-left: 40px;
		background-color: #eee;
		display: flex;
		height: 150px;
		border-bottom: 1px solid #CCC;
	}
	.staydetail-div10-div1 h1{
		font-family:PingFangSC-Regular;
		font-size:28px;
		color:#333333;
		letter-spacing:-0px;
		font-weight: 500
	}
	.staydetail-div10-div1 h2{
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#999999;
		letter-spacing:-0px;
		font-weight: 500
	}
	.staydetail-div10-div1 h3 span:nth-child(1){
		border:1px solid #fa4c01;
		border-radius:3px;
		width:50px;
		height:23px;
		font-family:PingFangSC-Regular;
		font-size:20px;
		color:#fa4c01;
		letter-spacing:0.09px;
		margin-right: 5px;
	}
	.staydetail-div10-div1 h3 span:nth-child(2){
		border:1px solid #fa4c01;
		border-radius:3px;
		width:91px;
		height:23px;
		font-family:PingFangSC-Regular;
		font-size:20px;
		color:#fa4c01;
		letter-spacing:0.09px;
	}
	.staydetail-div10-div1{
		width: 350px;
		height: 110px;
		border-right: 1px solid #CCC;
		margin-right: 37px;
	}
	.staydetail-div10-div2{
		width: 140px;
		height: 110px;
		text-align: right;
	}


	.staydetail-div10-div2 h1{
		font-family:PingFangSC-Regular;
		font-size:30px;
		color:#fa4c01;
		letter-spacing:0.09px;
		font-weight: 500;
	}
	.staydetail-div10-div2 h3{
		font-family:PingFangSC-Regular;
		font-size:22px;
		color:#fa4c01;
		letter-spacing:0.09px;
		text-align: left;
		font-weight: 500;
	}
	.staydetail-div10-div2 h2{
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#999999;
		letter-spacing:0.1px;
		font-weight: 500;
	}
	.staydetail-div9-footer{
		height: 120px;
		background-color: #FFF;
		position: fixed;
		bottom: 0;
		right: 0;
		width: 100%;
	}
	.staydetail-div9-footer p.left{
		height: 120px;
		margin-left: 40px;
		width: 200px;
		margin-top: 0;
	}
	.staydetail-div9-footer p span:nth-child(1){
		width: 100px;
		display: inline-block;
		font-family:PingFangSC-Regular;
		font-size:36px;
		color:#fa4c01;
		letter-spacing:-0px;
	}
	.staydetail-div9-footer p span:nth-child(2){
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#999999;
		letter-spacing:-0px;
		text-decoration: line-through;
	}
	.staydetail-div9-elbutton{
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
	#staydetail-div9-footer-p1{
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#fa4c01;
		letter-spacing:-0px;
		font-style: normal;
	}
	


</style>