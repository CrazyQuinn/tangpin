<template>
	<div>
		<div id="all">
		<div class="index-div1">
			<img src="../assets/fangdajing.png" class="index-img1">
		<router-link to="/search" tag="input" type="text" placeholder="搜索你需要的商品热门关键词" class="input1" 
		></router-link>
				<div class="index-header-content">
						<mt-swipe :auto="4000" :show-indicators="false">
							<mt-swipe-item class="index-header-swipe">
								<div class="index-header-div">
									<h1>康美汤品</h1>
				       		 		<h2>KANGMEI TANGPIN</h2>
				       		 		<p>智慧健康，汤品养生，从康美汤品开始！</p>
			       		 		</div>
			       		 	</mt-swipe-item>
			       		 	<mt-swipe-item class="index-header-swipe">
								<div class="index-header-div">
									<h1>康美汤品</h1>
				       		 		<h2>KANGMEI TANGPIN</h2>
				       		 		<p>智慧健康，汤品养生，从康美汤品开始！</p>
			       		 		</div>
			       		 	</mt-swipe-item>
			       		 	<mt-swipe-item class="index-header-swipe">
								<div class="index-header-div">
									<h1>康美汤品</h1>
				       		 		<h2>KANGMEI TANGPIN</h2>
				       		 		<p>智慧健康，汤品养生，从康美汤品开始！</p>
			       		 		</div>
			       		 	</mt-swipe-item>
							 
							</mt-swipe>
       		 		
       		 		</div>
	
    		</div>

  		</div>
  		<div class="index-div0">
  		<div class="index-div2">
  			<ul class="index-ul1">
  
  				<router-link to="/foods" tag="li">
  					<img src="../assets/index/foods.png">
  					<span>养生膳食</span>
  				</router-link>	
  				<router-link to="/stay" tag="li">
  					<img src="../assets/index/stay.png">
  					<span>养生住宿</span></router-link>	
  				<router-link to="/service" tag="li">
  					<img src="../assets//index/service.png">
  					<span>养生服务</span>
  				</router-link>	
  			</ul>
  		</div>
  		</div>
  			<div class="index-div3">
	  			<!-- <el-breadcrumb separator="  " class="el-breadcrumb1">
				  <el-breadcrumb-item :to="{ path: '/' }" class="el1">促销活动</el-breadcrumb-item>
				  <el-breadcrumb-item class="el1"><a href="/">养生膳食</a></el-breadcrumb-item>
				  <el-breadcrumb-item class="el1">养生住宿</el-breadcrumb-item>
				  <el-breadcrumb-item class="el1">养生服务</el-breadcrumb-item>
				</el-breadcrumb> -->
				
				<div class="index-div10">
				<h1><span>服务推荐</span></h1>
				 <el-tabs v-model="activeName" @tab-click="handleClick" class="index-eltabs">
				    <el-tab-pane label="养生膳食" name="first">
				    	<div class="index-div11">
				    		<mt-swipe :auto="4000">
							  <mt-swipe-item><img src="../assets/foods.png"></mt-swipe-item>
							  <mt-swipe-item><img src="../assets/foods.png"></mt-swipe-item>
							  <mt-swipe-item><img src="../assets/foods.png"></mt-swipe-item>
							</mt-swipe>
						</div>
				    </el-tab-pane>
				    <el-tab-pane label="养生住宿" name="second">
				    	<div class="index-div11">
				    		<mt-swipe :auto="4000">
							  <mt-swipe-item><img src="../assets/foods.png"></mt-swipe-item>
							  <mt-swipe-item><img src="../assets/foods.png"></mt-swipe-item>
							  <mt-swipe-item><img src="../assets/foods.png"></mt-swipe-item>
							</mt-swipe>
						</div>
				    </el-tab-pane>
				    <el-tab-pane label="养生服务" name="third">
				    	<div class="index-div11">
				    		<mt-swipe :auto="4000">
							  <mt-swipe-item><img src="../assets/foods.png"></mt-swipe-item>
							  <mt-swipe-item><img src="../assets/foods.png"></mt-swipe-item>
							  <mt-swipe-item><img src="../assets/foods.png"></mt-swipe-item>
							</mt-swipe>
						</div>
				    </el-tab-pane>
				  </el-tabs>

				
				</div>
			</div>

			<div class="index-div4">
				<div class="index-div5">	
					<h1>
						<span>膳食推荐</span> 
						<router-link to="/foods" tag="a">
							<img src="../assets/index/point.png" class="index-img6"/>
						</router-link>
					</h1>
					<ul>
						<li>
							<router-link to="/foodsdetail" tag="a">
								<img src="../assets/foods1.png" class="index-img3" />
								<h2>宜盏燕窝膳食</h2>
								<span>￥398</span>
								<span>月销12件</span>
								<p>功效：美容养颜，有滋阴补血，丰富的</p>
							</router-link>
						</li>
						<li>
							<router-link to="/foodsdetail" tag="a">
								<img src="../assets/foods1.png" class="index-img3" />
								<h2>宜盏燕窝膳食</h2>
								<span>￥398</span>
								<span>月销12件</span>
								<p>功效：美容养颜，有滋阴补血，丰富的</p>
							</router-link>
						</li>
						<li>
							<router-link to="/foodsdetail" tag="a">
								<img src="../assets/foods1.png" class="index-img3" />
								<h2>宜盏燕窝膳食</h2>
								<span>￥398</span>
								<span>月销12件</span>
								<p>功效：美容养颜，有滋阴补血，丰富的</p>
							</router-link>
						</li>
					</ul>
				</div>	
			</div>

			<div class="index-div6">
				<div class="index-div7">	
					<h1>
						 <span>住宿推荐</span>
						 <router-link to="/stay" tag="a">
						 	<img src="../assets/index/point.png" class="index-img6"/>
						 </router-link>
					</h1>
					<ul>
						<li>
							<router-link to="/staydetail" tag="a">
								<img src="../assets/house1.png" class="index-img4" />
								<h2>北京福地凰城酒店</h2>
								<p>高档型，大床，近地铁入口</p>
								<span>月销12件</span>
								<span>￥398 <span>起</span></span>
							</router-link>
						</li>
						<li>
							<router-link to="/staydetail" tag="a">
								<img src="../assets/house1.png" class="index-img4" />
								<h2>北京福地凰城酒店</h2>
								<p>高档型，大床，近地铁入口</p>
								<span>月销12件</span>
								<span>￥398 <span>起</span></span>
							</router-link>
						</li>
					</ul>
				</div>	
			</div>

			<div class="index-div8">
				<div class="index-div9">
						<h1>
							<span>服务推荐</span> 
						<router-link to="/service" tag="a">
							<img src="../assets/index/point.png" class="index-img6"/>
						</router-link>
						</h1>
					<ul>
						<li>
							<router-link to="/servicedetail" tag="a">
								<img src="../assets/service.png" class="index-img5" />
								<h2>脸部补水祛斑精油</h2>
								<span>￥398</span>
								<span>月销12件</span>
							</router-link>
						</li>
						<li>
							<router-link to="/servicedetail" tag="a">
								<img src="../assets/service.png" class="index-img5" />
								<h2>脸部补水祛斑精油</h2>
								<span>￥398</span>
								<span>月销12件</span>
							</router-link>
						</li>
						<li>
							<router-link to="/servicedetail" tag="a">
								<img src="../assets/service.png" class="index-img5" />
								<h2>脸部补水祛斑精油</h2>
								<span>￥398</span>
								<span>月销12件</span>
							</router-link>
						</li>
						<li>
							<router-link to="/servicedetail" tag="a">
								<img src="../assets/service.png" class="index-img5" />
								<h2>脸部补水祛斑精油</h2>
								<span>￥398</span>
								<span>月销12件</span>
							</router-link>
						</li>
					</ul>
				</div>



				<div class="index-div12">
					<span></span>
					<p>已经到底啦</p>
					<span></span>
				</div>
			</div>

		</div>
		</div>



	</div>
</template>

<script type="text/javascript">
	import search from'./index/search'
	/*var sousuo={
		template:`
			<div class="index-search-div1">
				<input type="text" placeholder="搜索你需要的商品热门关键词" class="input1" />

			</div>

		`
	}*/
	
	export default {
		name:"index",
		data(){
			return {
				 activeName: 'first',
			/*	 who:""*/

			}
		},
		components:{
			/*search,*/
		},

		methods: {
      		handleClick(tab, event) {
        		console.log(tab, event);
      		},

    }

	}
</script>

<!-- 给style标签加scoped属性， 避免样式污染全局 -->
<style type="text/css" >
	.index-search-div1{
		height: 1800px;
		width: 100%;
		background-color: #fff;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 9999;
	}
	.index-div10 .el-tabs__content{
		    overflow: inherit;
		    position: relative;
		    top: 6px;
		    left: -160px;
		    width:730px;

	}
	.index-div10{
		height: 100%;
	}
	.index-div10 h1{
		float: left;
	}
	.index-eltabs{
		float: right;
		width: 580px;
	}

	.index-div10 .el-tabs__item{
		width:162px;
		height: 100px;
		font-family:PingFangSC-Regular;
		font-size:28px;
		line-height: 100px;
		text-align: right;
		letter-spacing:-0px;
		} 
	.index-div10 .el-tabs__active-bar{
		background-color: #FFF;
	}
	.index-div10 .el-tabs__item.is-active{
		color:#fdab2b;
	}
	.index-div11{
		height: 200px;
	}
	.index-div11 img{
		width: 710px;
		height: 180px;
	}
    #all{
    	height: 100%;
    	width: 100%;
    	background-color: #EEE;
    }
	.index-div1{
		height: 450px;
		width: 100%;
	}
	.input1{
		height: 65px;
		width: 658px;
		border-radius: 32.5px;
		background:#ffffff;
		box-shadow:0 0 18px 0 rgba(0,0,0,0.50);
		position: absolute;
		top:62px;
		left: 46px;
		z-index: 10;
		font-family:PingFangSC-Regular;
		font-size:26px;
		color:#999999;
		letter-spacing:0;
		text-align:center;
		border:0;
	}
	.index-img1{
		width: 35px;
		height: 35px;
		display: inline-block;
		z-index: 11;
		position: absolute;
		top: 82px;
		left: 170px;
	}
/*	 .el-carousel__item h3 {
	    color: #475669;
	    font-size: 14px;
	    opacity: 0.75;
	    line-height: 150px;
	    margin: 0;
  }
*/
  .lunbo1 .el-carousel__item:nth-child(n) {

	     background-image: url(../assets/beijingtu.png);
	     background-repeat: no-repeat;
	     background-size: 750px 450px;
  }
  
 /* .el-carousel__item:nth-child(2n+1) {

  }*/
  .index-header-content{

	  	height: 450px;
	  	width:100%;
  }
  .index-header-content h1{
		font-family:PingFangSC-Semibold;
		font-size:58px;
		color:#ffffff;
		letter-spacing:0;
		text-shadow:0 4px 10px rgba(0,0,0,0.50);

  }
  .index-header-content h2{
	  	margin-bottom: 20px;
	  	font-family:PingFangSC-Regular;
		font-size:24px;
		color:#ffffff;
		letter-spacing:1.1px;
		text-shadow:0 4px 10px rgba(0,0,0,0.50);
  }
  .index-header-content p{
	  	font-family:PingFangSC-Regular;
		font-size:32px;
		color:#ffffff;
		letter-spacing:0;
		text-shadow:0 4px 10px rgba(0,0,0,0.50);

  }
  .index-header-swipe{
  	background-image: url(../assets/beijingtu.png);
  	background-size: 100% 450px;
  	background-repeat: no-repeat;
  }
  .index-header-div{
  	margin-left: 92px;
  	margin-top: 167px;
  }


  .index-ul1{
  	display: flex;
  	width: 710px;
  	height: 200px;
  	background:#ffffff;
	box-shadow:0 2px 20px 0 rgba(0,0,0,0.05);
	border-radius:20px;



  }
  .index-div0{
  	position: relative;
  	height: 200px;
  	width: 100%
  }
  .index-div2{
  	position: absolute;
	top: -40px;
	left: 20px;
	z-index: 15;

  }
	.index-eltabs .el-tabs__nav-wrap::after{
     	background-color: #fff;
     }
   .index-ul1 li{
  	flex: 1;
  	text-align: center;

  	font-family:PingFangSC-Regular;
	font-size:28px;
	color:#333333;
	letter-spacing:1.28px;

  }
    .index-ul1 li img{
    	width: 73px;
    	height: 77px;
    	margin:0 auto;
    	margin-top: 28px;
    }
    .index-div3{
    	height: 350px;
    	width: 100%;
    	padding-top:27px;
    	background-color: #FFF;
    	margin-bottom: 20px;

    }
    .index-ul2{
    	font-family:PingFangSC-Regular;
		font-size:28px;
		color:#333333;
		letter-spacing:-0px;
		display: flex;
		width: 100%;
		text-align: center;
		margin-bottom: 30px;

    }
  .index-div3 .el-tabs__item:hover{
    	color: #fdab2b
    }
    .index-ul2 li{
    	flex: 1;
    	font-family:PingFangSC-Medium;
		font-size:32px;
		color: #333;
		letter-spacing:-0px; 

    }
    .index-img2{
    	width: 710px;
    	height: 180px;
    	margin-left: 20px;
    	border-radius: 90px;
    }
    .index-div4{
    	width: 100%;
    	height: 907px;
    	background-color: #FFF;	
    	margin-bottom: 20px;

    }
    .index-div5 li{
    	padding-top: 28px;
    	height: 250px;
    	padding: 15px 0 15px 20px;

    }
  

    .index-img3{
    	border-radius:10px;
		width:190px;
		height:190px;
		float: left;
		margin-right: 30px;
    }
    .index-div5 h2{
    	font-family:PingFangSC-Regular;
		font-size:30px;
		color:#333333;
		letter-spacing:-0px;
		height: 50px;
		line-height: 50px;  

    }
    .index-div5 span:nth-child(3){
    	font-family:PingFangSC-Regular;
		font-size:24px;
		color:#fa4c01;
		letter-spacing:-0px;
		height: 53px;
		line-height: 53px;
		display: inline-block;
    }
    .index-div5 span:nth-child(4){
    	font-family:PingFangSC-Regular;
		font-size:22px;
		color:#999999;
		letter-spacing:-0px;
		margin-left: 20px;
    }
    .index-div5 ul p{  
    	height: 80px;
    	font-family:PingFangSC-Regular;
		font-size:24px;
		color:#666666;
		letter-spacing:-0px;
    }
    .index-div6{
    	width: 100%;
    	height: 916px;
    	background-color: #FFF;	
    	margin-bottom: 20px;
    }
    .index-div6 li {
    	height: 393px;
    	padding-top: 27px;
    	padding-left: 20px;

    }



    .index-div6 h2,.index-div9 h2{
    	font-family:PingFangSC-Regular;
		font-size:30px;
		color:#333333;
		letter-spacing:-0px;
		margin-left: 30px;
		margin-top: 20px;
    }
    .index-div9 h2{
    	margin-top: 10px;
    	margin-bottom: 10px;
    }
    .index-div6 p{
    	font-family:PingFangSC-Regular;
		font-size:24px;
		color:#666666;
		letter-spacing:-0px;
		margin-left: 30px;
		margin-top: 9px;
		margin-bottom: 17px;
    }
    .index-div6 ul li span:nth-child(4),.index-div9 ul li span:nth-child(4){
    	font-family:PingFangSC-Regular;
		font-size:22px;
		color:#999999;
		letter-spacing:-0px;
		margin-left: 30px;

    }    
    .index-div6 ul li span:nth-child(5),.index-div9 ul li span:nth-child(3){
   		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#fa4c01;
		letter-spacing:-0px;
		margin-left: 30px;
		float: right;

    }

    .index-div6 ul li span:nth-child(5) span{
    	font-family:PingFangSC-Regular;
		font-size:24px;
		color:#999999;
		margin-left: 6px;
		margin-right: 32px;
    }





    .index-img4{
    	background:#d8d8d8;
		border-radius:10px;
		width:710px;
		height:190px;
    }
    .index-div8{
		background:#ffffff;
		width:100%;
		height:750px;

    }
    .index-img5{
    	background:#d8d8d8;
		border-radius:10px;
		width:346px;
		height:190px;
    }
    .index-div9 li{
    	width: 346px;
    	float: left;
    	margin-left: 19px;
    	margin-top: 15px;

    }
    .index-div9{
    	height: 750px;
    }

    .index-div9 h1 span,.index-div5 h1 span,.index-div7 h1 span,.index-div10 h1 span{
		width: 128px;
		height: 45px;
		display: inline-block;
		background-image: url(../assets/index/bottomline.png);
		background-repeat: no-repeat;
		background-position: 0px 40px;
		background-size: 138px 10px;
		line-height: 45px;

	}
	.index-div9 h1,.index-div5 h1,.index-div7 h1,.index-div10 h1{

		margin-left: 36px;
   		font-family:PingFangSC-Medium;
		font-size:32px;
		color:#333333;
		letter-spacing:-0px;
		line-height: 99px;	

		
	}
	.index-img6{
		width:42px;
		height:12px;
		display: inline-block;
		margin-top: 45px;
		margin-right: 41px;
		float: right;
	}

	.index-div12{
		height:200px;
		font-family:PingFangSC-Regular;
		font-size:26px;
		color:#cccccc;
		margin-top: 30px;
		position: relative;
	}
	.index-div12 p{
		position: absolute;
		top:0;
		left: 300px;
	}
	.index-div12 span{
		width:79px;
		height:1px;
		position: absolute;
		top: 20px;
		left: 194px;
		background-color: #ddd

	}

	.index-div12 span:nth-child(3){
		left: 470px;
	}


/*  el-carousel{
  	height: 450px;
  }*/
</style>