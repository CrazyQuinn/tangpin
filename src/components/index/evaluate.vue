<template>
	<div>
		<div class="evaluate-div1">
			<img src="../../assets/index/back.png" @click="back">
		<h1>全部评价</h1>
		</div>
		<div class="evaluate-div2">
				<div class="evaluate-div2-div1"><p>4.6</p><p>非常好</p></div>
				<ul>
					<li>位置<span><el-progress :percentage="80" color="#fdab2b" :show-text="false" :stroke-width="5"></el-progress></span><i>4.5</i></li>
					<li>位置<span><el-progress :percentage="80" color="#fdab2b" :show-text="false" :stroke-width="5"></el-progress></span><i>4.5</i></li>
					<li>位置<span><el-progress :percentage="80" color="#fdab2b" :show-text="false" :stroke-width="5"></el-progress></span><i>4.5</i></li>
					<li>位置<span><el-progress :percentage="80" color="#fdab2b" :show-text="false" :stroke-width="5"></el-progress></span><i>4.5</i></li>
				</ul>
		</div>

		<div class="evaluate-div3">
			<span>&nbsp;&nbsp;&nbsp;全部(3488)&nbsp;&nbsp;&nbsp;</span>
			<span>&nbsp;&nbsp;&nbsp;有图(1299)&nbsp;&nbsp;&nbsp;</span>
			<span>&nbsp;&nbsp;&nbsp;待改善(235)&nbsp;&nbsp;&nbsp;</span>
			<span>&nbsp;&nbsp;&nbsp;性价比高(233)&nbsp;&nbsp;&nbsp;</span>
		</div>

		<div class="evaluate-div4">
			<div class="evaluate-div4-div1">
				<img src="../../assets/stay/touxiang.png">
				<h1>敬**i</h1>
				<span class="evaluate-span1">舒适大床房</span>
				<el-rate
				  v-model="value5"
				  disabled
				  :show-score="false"
				  text-color="#ff9900"
				  score-template="{value}" class="evaluate-el-rate" disabled-void-color="#c0c4cc">
				</el-rate>

			</div>


			<div class="evaluate-div4-div2">
				<p>酒店位置市内，二环内，离天安门2-3公里。在钱粮胡同中间。酒店门口左拐300米就有吃饭的地方，也有公交站。离地铁口700米左右，酒店门口也有单车。骑车非常方便！…</p>
				<h1>2018-10-31 19:34</h1>
				<ul>
					<li><img src="../../assets/stay/house2.png"></li>
					<li><img src="../../assets/stay/house2.png"></li>
					<li><img src="../../assets/stay/house2.png"></li>
					<li><img src="../../assets/stay/house2.png"></li>
				</ul>

			</div>

		</div>		
		<div class="evaluate-div4">
			<div class="evaluate-div4-div1">
				<img src="../../assets/stay/touxiang.png">
				<h1>敬**i</h1>
				<span class="evaluate-span1">舒适大床房</span>
				<el-rate
				  v-model="value5"
				  disabled
				  :show-score="false"
				  text-color="#ff9900"
				  score-template="{value}" class="evaluate-el-rate" disabled-void-color="#c0c4cc">
				</el-rate>

			</div>


			<div class="evaluate-div4-div2">
				<p>酒店位置市内，二环内，离天安门2-3公里。在钱粮胡同中间。酒店门口左拐300米就有吃饭的地方，也有公交站。离地铁口700米左右，酒店门口也有单车。骑车非常方便！…</p>
				<h1>2018-10-31 19:34</h1>
				<ul>
					<li><img src="../../assets/stay/house2.png"></li>
					<li><img src="../../assets/stay/house2.png"></li>
					<li><img src="../../assets/stay/house2.png"></li>
					<li><img src="../../assets/stay/house2.png"></li>
				</ul>

			</div>

		</div>

</div>

</template>

<script type="text/javascript">
	
	export default {
		name:"evaluate",
		data(){
			return {
				 value5: 4
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

	.evaluate-div1{
		display: flex;
		height: 120px;
		width: 100%;
		text-align: center;
		background-color: #FFF;
	}
	.evaluate-div1 img{
		width:22px;
		height:39px;
		margin-left: 42px;
		margin-top: 34px;
	}
	.evaluate-div1 h1{
		font-size:36px;
		color:#333333;
		letter-spacing:0.58px;
		text-align:center;
		width: 390px;
		height: 50px;
		margin-top: 34px;
		margin-left: 116px;
	}

	.evaluate-div2{
		background-color: #FFF;
		display: flex;
		border-bottom: 1px solid #eee;
	}
	.evaluate-div2 .evaluate-div2-div1{
		width: 130px;
		height: 148px;
		border-right: 1px solid #eee;
		text-align: center;
		font-size:36px;
		color:#fdab2b;
		letter-spacing:0.58px;
		margin-right: 15px;
		font-family:PingFangSC-Semibold;
		padding-left: 12px;

	}
	.evaluate-div2 .evaluate-div2-div1 p:nth-child(1){
		margin-top: 20px;

		
	}
	.evaluate-div2 ul{
		padding-top: 25px;
		width: 580px;
	}
	.evaluate-div2 ul li{
		float: left;
		margin-right: 10px;
	}
	.evaluate-div2 ul li span{
		display: inline-block;
		width: 138px;
		margin-left: 19px;
		margin-right: 30px;
		margin-bottom: 23px;
	}
	.evaluate-div2 ul li span .el-progress-bar__outer{
		background-color: #d8d8d8;
	}
	.evaluate-div2 ul li i{
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#999999;
		letter-spacing:0.39px;
		font-style: normal;
	}
	.evaluate-div3{
		height: 177px;
		background-color: #fff;
		padding-top: 27px;
		padding-left: 30px;
	}
	.evaluate-div3 span{
		display: inline-block;

		height: 50px;
		background-color: #fdab2b;
		border-radius:25px;
		text-align: center;
		line-height: 50px;
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#333333;
		letter-spacing:0.39px;
		margin-right: 20px;
		margin-bottom: 20px;
	}
	.evaluate-div3 span:nth-child(2),.evaluate-div3 span:nth-child(4){
		background-color: #ffe4ba;
	}
	.evaluate-div3 span:nth-child(3){
		background-color: #efefef;
	}
	.evaluate-div4{
		background-color: #fff;
		padding-top: 30px;
		padding-left: 32px;
		height: 517px;
	}
	.evaluate-div4-div1{
		height: 120px;

	}
	.evaluate-div4-div1 h1{
		float: left;
		width: 600px;
		margin-bottom: 17px;
		font-family:PingFangSC-Regular;
		font-size:28px;
		color:#666666;
		letter-spacing:0.45px;
		font-weight: 500;

	}
	.evaluate-div4-div1 img{
		width: 88px;
		height: 88px;
		float: left;
		margin-right: 20px;

	}
	.evaluate-div4-div1 .evaluate-span1{
		float: left;
		font-family:PingFangSC-Regular;
		font-size:22px;
		color:#999999;
		letter-spacing:0.35px;
		margin-right: 11px;

	}

	.evaluate-div4-div1 .el-rate__icon{
		font-size: 30px;
	}
	.evaluate-el-rate {
		float: left;
	}
	.evaluate-div4-div2{
		font-family:PingFangSC-Regular;
		font-size:26px;
		color:#666666;
		letter-spacing:0.42px;
		width: 692px;
		line-height:41px;
	}
	.evaluate-div4-div2 h1{
		font-family:PingFangSC-Regular;
		font-size:22px;
		color:#999999;
		letter-spacing:0.35px;
		margin:15px 0 18px 0;
	}
	.evaluate-div4-div2 ul{
		display: flex;
		padding-bottom: 30px;
		border-bottom: 1px solid #eee;
	}
	.evaluate-div4-div2 ul li img{
		width: 162px;
		height: 162px;
		margin-right: 15px;
	}
</style>