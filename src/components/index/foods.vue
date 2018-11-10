<template>
	<div>
		<div class="foods-div1">
			<img src="../../assets/index/back.png" @click="back">
		<h1>养生膳食</h1>
		</div>

		<div class="foods-div2">
			<el-tabs v-model="activeName" @tab-click="handleClick" tab-position="left">
			    <el-tab-pane label="热门推荐" name="first">
			    	<div class="foods-div3">
				    	<router-link  to="/foodsdetail" tag="figure"class="figure1">
				    		<img src="../../assets/foods1.png">
				    		<figcaption>
				    			<h2>宜盏燕窝膳食</h2>
				    			<span>￥398</span>
				    			<span>月销201</span>
				    			<p>功效：美容养颜有，滋阴补血...</p>
				    		</figcaption>
				    	</router-link>
			    	</div>
			    </el-tab-pane>
			    <el-tab-pane label="日本菜" name="second">
			    	<div class="foods-div3">
				    	<router-link  to="/foodsdetail" tag="figure"class="figure1">
				    		<img src="../../assets/foods1.png">
				    		<figcaption>
				    			<h2>宜盏燕窝膳食</h2>
				    			<span>￥398</span>
				    			<span>月销201</span>
				    			<p>功效：美容养颜有，滋阴补血...</p>
				    		</figcaption>
				    	</router-link>
			    	</div>

			    </el-tab-pane>
			    <el-tab-pane label="面包甜食" name="third">
			    	<div class="foods-div3">
				    	<router-link  to="/foodsdetail" tag="figure"class="figure1">
				    		<img src="../../assets/foods1.png">
				    		<figcaption>
				    			<h2>宜盏燕窝膳食</h2>
				    			<span>￥398</span>
				    			<span>月销201</span>
				    			<p>功效：美容养颜有，滋阴补血...</p>
				    		</figcaption>
				    	</router-link>
			    	</div>
			    </el-tab-pane>
			    <el-tab-pane label="西餐" name="fourth">
			    	<div class="foods-div3">
				    	<router-link  to="/foodsdetail" tag="figure"class="figure1">
				    		<img src="../../assets/foods1.png">
				    		<figcaption>
				    			<h2>宜盏燕窝膳食</h2>
				    			<span>￥398</span>
				    			<span>月销201</span>
				    			<p>功效：美容养颜有，滋阴补血...</p>
				    		</figcaption>
				    	</router-link>
			    	</div>
			    </el-tab-pane>
			    <el-tab-pane label="韩国料理" name="fifth">
			    	<div class="foods-div3">
				    	<router-link  to="/foodsdetail" tag="figure"class="figure1">
				    		<img src="../../assets/foods1.png">
				    		<figcaption>
				    			<h2>宜盏燕窝膳食</h2>
				    			<span>￥398</span>
				    			<span>月销201</span>
				    			<p>功效：美容养颜有，滋阴补血...</p>
				    		</figcaption>
				    	</router-link>
			    	</div>
			    </el-tab-pane>
			    <el-tab-pane label="东北菜" name="sixth">
			    	<div class="foods-div3">
				    	<router-link  to="/foodsdetail" tag="figure"class="figure1">
				    		<img src="../../assets/foods1.png">
				    		<figcaption>
				    			<h2>宜盏燕窝膳食</h2>
				    			<span>￥398</span>
				    			<span>月销201</span>
				    			<p>功效：美容养颜有，滋阴补血...</p>
				    		</figcaption>
				    	</router-link>
			    	</div>
			    </el-tab-pane>
			    <el-tab-pane label="川菜" name="seventh">
			    	<div class="foods-div3">
				    	<router-link  to="/foodsdetail" tag="figure"class="figure1">
				    		<img src="../../assets/foods1.png">
				    		<figcaption>
				    			<h2>宜盏燕窝膳食</h2>
				    			<span>￥398</span>
				    			<span>月销201</span>
				    			<p>功效：美容养颜有，滋阴补血...</p>
				    		</figcaption>
				    	</router-link>
			    	</div>
			    </el-tab-pane>
			    <el-tab-pane label="粤菜" name="eighth">
			    	<div class="foods-div3">
				    	<router-link  to="/foodsdetail" tag="figure"class="figure1">
				    		<img src="../../assets/foods1.png">
				    		<figcaption>
				    			<h2>宜盏燕窝膳食</h2>
				    			<span>￥398</span>
				    			<span>月销201</span>
				    			<p>功效：美容养颜有，滋阴补血...</p>
				    		</figcaption>
				    	</router-link>
			    	</div>
			    </el-tab-pane>
			    <el-tab-pane label="水果生鲜" name="ninth">
			    	<div class="foods-div3">
				    	<router-link  to="/foodsdetail" tag="figure"class="figure1">
				    		<img src="../../assets/foods1.png">
				    		<figcaption>
				    			<h2>宜盏燕窝膳食</h2>
				    			<span>￥398</span>
				    			<span>月销201</span>
				    			<p>功效：美容养颜有，滋阴补血...</p>
				    		</figcaption>
				    	</router-link>
			    	</div>
			    </el-tab-pane>
			    <el-tab-pane label="家常菜" name="tenth">
			    	<div class="foods-div3">
				    	<router-link  to="/foodsdetail" tag="figure"class="figure1">
				    		<img src="../../assets/foods1.png">
				    		<figcaption>
				    			<h2>宜盏燕窝膳食</h2>
				    			<span>￥398</span>
				    			<span>月销201</span>
				    			<p>功效：美容养颜有，滋阴补血...</p>
				    		</figcaption>
				    	</router-link>
			    	</div>
			    </el-tab-pane>
			 </el-tabs>

		</div>
	</div>
</template>

<script type="text/javascript">
	
	export default {
		name:"foods",
		data(){
			return {
				activeName: 'first'
			}
		},
		methods: {
	      handleClick(tab, event) {
	        console.log(tab, event);
	      },
	      back(){
	    		this.$router.go(-1)
	    	}
	   	}

	}
</script>

<!-- 给style标签加scoped属性， 避免样式污染全局 -->
<style type="text/css">
	.foods-div1{
		display: flex;
		height: 120px;
		width: 100%;
		text-align: center;
		background-color: #FFF;
	}
	.foods-div1 img{
		width:22px;
		height:39px;
		margin-left: 42px;
		margin-top: 64px;
	}
	.foods-div1 h1{
		font-size:36px;
		color:#333333;
		letter-spacing:0.58px;
		text-align:center;
		width: 390px;
		height: 50px;
		margin-top: 64px;
		margin-left: 116px;
	}
	.foods-div2{
		background-color: #FFF;
		height: 100%;
	}
	.foods-div2 .el-tabs--left .el-tabs__active-bar.is-left, .el-tabs--left .el-tabs__nav-wrap.is-left::after{
		left: 0;
	}
	.foods-div2 .el-tabs__active-bar{
		 background-color: #fdab2b;
	}
	.foods-div2 .el-tabs__item:hover{
		color:#fdab2b;
		background: #FFF;
	}
	.foods-div2 .el-tabs__item.is-active{
		color:#fdab2b;
		background: #FFF;
	}
	.foods-div2 .el-tabs__item{
		width:220px;
		height: 110px;
		font-family:PingFangSC-Semibold;
		font-size:28px;
		text-align: center;
		line-height: 110px;
		background:#f5f5f5;
	}
	.figure1{
		padding:50px 0 50px 25px;

	}
	.figure1 img{
		background:#d8d8d8;
		border-radius:10px;
		width:121px;
		height:121px;
		float: left;
		margin-right: 20px;
	}
	.figure1 h2{
		font-family:PingFangSC-Regular;
		font-size:28px;
		color:#333333;
		letter-spacing:-0px;
	}
/*	.foods-div2 .el-tabs__item:nth-last-child(1){
		background-color: #FFF;
	}*/
	.foods-div3{
		height: 1210px;
		overflow-y:scroll;

	}
</style>