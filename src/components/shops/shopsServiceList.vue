<template class="container">

<!--  -->
<div class="service">
<el-container>

<div class="container-sec">

  <el-header  height="1.1rem">
  	<img src="../../assets/shops/A327EA3F-5C4E-4335-A8F8-54FD1807650E@1x.png" class="icon-back" @click="back">

		<div class="input-div-sec">
				    				<img src="../../assets/shops/CBAEB421-B09B-4225-9711-9A5876A71DA4@1x.png" class="search-img">
				    				<input type="text" placeholder="搜索你需要的商品" class="inputSearch" /> 
				    		</div>

  </el-header>



<div class="menu-div">

		

		<el-row class="block-col-2">
			  <el-col :span="4">
				    <el-dropdown>
				      <span class="el-dropdown-link order-type-title-active" v-model="defaultType">
				        默认<i class="el-icon-arrow-down el-icon--right"></i>
				      </span>
				      <el-dropdown-menu slot="dropdown">
				       <!--  <el-dropdown-item>由高到低</el-dropdown-item>
				        <el-dropdown-item>由低到高</el-dropdown-item> -->
				      </el-dropdown-menu>
				    </el-dropdown>
				  </el-col>

				   <el-col :span="4">
				    <el-dropdown>
				      <span class="el-dropdown-link order-type-title">
				        价格<i class="el-icon-arrow-down el-icon--right"></i>
				      </span>
				      <el-dropdown-menu slot="dropdown">
				         <el-dropdown-item>由高到低</el-dropdown-item>
				        <el-dropdown-item>由低到高</el-dropdown-item>
				      </el-dropdown-menu>
				    </el-dropdown>
				  </el-col>

				  <el-col :span="4">
				    <el-dropdown>
				      <span class="el-dropdown-link order-type-title">
				        销量<i class="el-icon-arrow-down el-icon--right"></i>
				      </span>
				      <el-dropdown-menu slot="dropdown">
				         <el-dropdown-item>由高到低</el-dropdown-item>
				        <el-dropdown-item>由低到高</el-dropdown-item>
				      </el-dropdown-menu>
				    </el-dropdown>
				  </el-col>

				  <el-col :span="4">
				    <el-dropdown>
				      <span class="el-dropdown-link order-type-title">
				        评价<i class="el-icon-arrow-down el-icon--right"></i>
				      </span>
				      <el-dropdown-menu slot="dropdown">
				          <el-dropdown-item>由高到低</el-dropdown-item>
				        <el-dropdown-item>由低到高</el-dropdown-item>
				      </el-dropdown-menu>
				    </el-dropdown>
				  </el-col>

		</el-row>




		<div class="vertical-line"></div>

		 <div class="shaixuan-div">
		   <!--  <el-checkbox-group v-model="checkboxGroup3" size="small">
		    	<img src="../../assets/shops/A65C144D-142E-4BD8-940B-C207DB8356E5@1x.png" class="shaixuan-icon">
		      <el-checkbox-button >筛选</el-checkbox-button>
		    </el-checkbox-group> -->
				<img src="../../assets/shops/A65C144D-142E-4BD8-940B-C207DB8356E5@1x.png" class="shaixuan-icon">
				<span class="shaixuan-text">筛选</span>
  		</div>

</div>
</div>

<div class="service-list-div">

			
					<ul  v-for="o in 6" :key="o" >
						<li>
							<img src="../../assets/shops/dengshafa.png" class="list-img" />
							<span class="name">脸部补水祛斑精油</span><br>
							<span  class="span-f">豪华实拍,大床,近地铁出入口</span>

							
							    <div></div>
								<span class="span-s">促销</span>
								<span class="span-th">￥398</span>
								<span class="span-fo">￥398</span>
							
						</li>
						
					</ul>
			
			</div>







  </el-container>
</div>
 
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
       /* defaultType：'first'*/
      };
    },
    methods: {
     /* handleClick(tab, event) {
        console.log(tab, event);
      }*/
      back(){
      	this.$router.go(-1)
      }
    }
  };
</script>
<!-- 给style标签加scoped属性， 避免样式污染全局 -->
<style type="text/css" scoped>
.service .container{
	background-color: #fff;
	height: 100%;
	width: 100%;
}
.service .container-sec{
	background-color: #fff;
	position: fixed;
	z-index: 999;
	width: 100%;
}
 .service .el-header {
    background-color: #fff;
    color: #fff;
    text-align: center;
    line-height: 120px;
    font-size: 40px;
    /*position: fixed;*/
    width: 100%;
    /*z-index: 10;*/
    border-bottom: 5px solid whitesmoke;


  }
  	.service .inputSearch{
		background:#f2f2f2;
		z-index: 10;
		color:#999999;
		border: 0px;
		font-family:PingFangSC-Regular;
		font-size:28px;
		color:#999999;
		text-align:left;
		margin-left: 68px;
		width: 400px;
		height: 40px;
		 position: fixed;
		 left: 176px;
		 top: 65px;
	}

	.service .search-img{
	width:28px;
	height:28px;
	position: fixed;
	left:176px;
    margin-top: 15px;
    color: #b2b2b2;
}

.service .input-div-sec{
		width:612px;
		height:60px;
		background:#f2f2f2;
		border-radius: 4px;
   		 margin-top: 55px;
   		 /*margin-left: 108px;*/
   		 margin-left: 88px;
}

	.service .el-dropdown {
    vertical-align: top;
  }
  .service .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .service .el-icon-arrow-down {
    font-size: 12px;
  }
  .service .menu-div{
  		background-color: #fff!important;
  		height: 100px;
  		/*margin-top: 120px;*/
  		padding-left: 47px;
  		border-bottom: 1px solid #eaeaea;

  }
  .service .vertical-line{
  	background-color: #dddddd;
  	width: 2px;
  	height: 40px;
  	position: absolute;
  	right: 130px;
  	top: 173px;
  }
  .service .main-list-div{

  		width: 100%;
    	height: 907px;
    	background-color: #FFF;	
    	margin-bottom: 20px;
  }

   .service  .service-list-div{
    	width: 100%;
    	height: 2000px;
    	background-color: #FFF;	
    	margin-bottom: 20px;
    	margin-top: 240px;

    }

.service  .service-list-div li{
    	border-bottom: 1px solid #eaeaea;
    	padding-top: 28px;
    	height: 250px;
    	padding: 15px 0 15px 20px;
    }

     .service .service-list-div .name{
    	
		margin-left: 32px;
		margin-top: 32px;
		position: absolute;
		font-family:PingFangSC-Medium;
		font-size:34px;
		color:#333333;
		letter-spacing:0;


    }
	.service .service-list-div .span-f{

	    	font-family:PingFangSC-Regular;
			font-size:34px;
			color:#afafaf;	
			margin-top: 50px;
			margin-left: 32px;
			position: absolute;
	}

	.service .service-list-div .span-s{
			font-family:PingFangSC-Regular;
			font-size:24px;
			color:#e8541e;
			letter-spacing:0;
			position: absolute;
			margin-top: 115px;
			margin-left: 66px;
	}

	.service .service-list-div .span-th{
		font-family:PingFangSC-Medium;
		font-size:40px;
		color:#ff3b30;
		letter-spacing:0;
		margin-left: 32px;
				
	}

	.service .service-list-div .span-fo{
			font-family:PingFangSC-Regular;
			font-size:30px;
			color:#999999;
			letter-spacing:0;
			text-align:left;
			margin-left: 35px;
			text-decoration:line-through;

	}


.service .service-list-div ul div{  
    	opacity:0.1;
		background:#e95a27;
		border-radius:2px;
		width:112px;
		height:36px;	
		float: right;
		margin-right: 350px;
		text-align: center;
		margin-top: 110px;
		margin-bottom: 10px;
    }


    .service .service-list-div img{
    	border-radius:2px;
		width: 200px;
		height: 200px;
		float: left;
		margin-left: 32px;
		margin-top: 22px;

    }

    .service .icon-back{
		position: absolute;
		color:#fdab2b;
		top: 68px;
		left: 42px;
		width:22px;
		height:39px;
	}

	.service .order-type-title{

		font-family:PingFangSC-Regular;
		font-size:28px;
		color:#999999;
		text-align:left;
	}
	.service .order-type-title-active{
		font-family:PingFangSC-Regular;
		font-size:28px;
		color:#fdab2b ;
		text-align:left;
	}
	.service .el-row{
		    position: fixed;
		    width: 120%;
		   /* top: 151px;*/

		        height:75px;
    line-height: 95px;

			}

	.service .shaixuan-icon{
		width:32px;
		height:32px;
		float: left;
	}

	.service .shaixuan-text{
		font-family:PingFangSC-Regular;
		font-size:28px;
		color:#999999;
		text-align:left;
	}
	.service .el-checkbox-button--small .el-checkbox-button__inner{
		border: 0px;
		padding-left: 0px;
	}

	.service input::-webkit-input-placeholder{
			font-size:28px;
			color:#999999;


	}

	.service .shaixuan-div{
		margin-top: 35px;
		float:right;
		right:20px;
		position: fixed;
	}
  </style>