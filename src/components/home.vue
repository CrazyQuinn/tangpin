<!-- 组件写到template里 -->
<template>
	<div>
			<!-- 二级路由容器  让二级路由的内容显示在页面上 -->
			<router-view></router-view>
	<!-- 	<ul class="home">
			<div class="home-div1" @click="handleClick">
			<router-link to="/home/index" tag="li" :class="isA?'bb':'aa'">首页</router-link>
			</div> 
			<div class="home-div1" @click="handleClick1">
			<router-link to="/home/shops" tag="li">商铺</router-link>
			</div >
			<div class="home-div1">
			<router-link to="/home/shopcar" tag="li">购物车</router-link>
			</div >
			<div class="home-div1">
			<router-link to="/home/personal" tag="li">我的</router-link>
			</div>
		</ul> 
	
	        -->
		<div class="home-div1">
			<el-tabs type="border-card" id="home">
			  <el-tab-pane>
			    <span slot="label">
			    	<router-link to="/home/index" tag="li"><i class="iconfont icon-xiazai44"></i>首页</router-link>
			    </span>
			  </el-tab-pane> <el-tab-pane>
			    <span slot="label">
			    	<router-link to="/home/shops" tag="li"><i class="iconfont icon-dianpufill"></i>商铺</router-link>
			    </span>
			  </el-tab-pane> <el-tab-pane>
			    <span slot="label">
			    	<router-link to="/home/shopcar" tag="li"><i class="iconfont icon-03f"></i>购物车</router-link>
			    </span>
			  </el-tab-pane> <el-tab-pane>
			    <span slot="label">
			    	<router-link to="/home/personal" tag="li"><i class="iconfont icon-wodefill"></i>我的</router-link>
			    </span>
			  </el-tab-pane>
			</el-tabs>
		</div>



	</div>
</template>

<script type="text/javascript">
	
	export default {
		name:"home",//对外提供接口
		data(){
			return {
			}
		},
		methods:{

		}
	}
</script>




<!-- 给style标签加scoped属性， 避免样式污染全局 -->
<style type="text/css">
	#home{
		display: flex;
		width: 750px;
		position: fixed;
		bottom: -1px;
		left: 0;
		text-align: center;
		height: 100px;
		border-top:1px solid #CCC;
		z-index: 9999;
		background-color: #FFF;
	
	}
	.home-div1 .el-tabs--border-card>.el-tabs__header{
		background-color: #FFF;
	}

	.home-div1 li{
		width:145px;
		font-family:PingFangSC-Semibold;
		font-size:20px;
		background-color: #FFF;
		height: 100px;
		padding-top: 15px;

	/*	background-image: url(../assets/shouye.png);
		background-repeat: no-repeat;
		background-size: 41px 37px;
		padding-top: 50px;
		height: 100px;
		background-position: 50px 15px;*/
	}
	.home-div1 li i{
		font-size: 40px;
		display: block;

	}

/*	.home-div1 li:active,.home-div1 li:visited,.home-div1 li:hover{
		background-image: url(../assets/house4.png);
		background-repeat: no-repeat;
		background-size: 41px 37px;
		background-position: 50px 15px;
		z-index: 100000
	}*/

	.home-div1 .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
		color: #fdab2b;
		border-color: #FFF;

	}
	.home-div1 .el-tabs--border-card>.el-tabs__header .el-tabs__item{
		color: #bababa;
		
	}
	.home-div1 .el-tabs--border-card>.el-tabs__header .el-tabs__item:not(.is-disabled):hover{
		color: #fdab2b
	}


</style>