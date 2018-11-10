<template>
	<div>
		<div class="stay-div1">
			<img src="../../assets/index/back.png" @click="back">
		<h1>养生住宿</h1>
		</div>

		<div class="stay-div2">
			<h1><span>住宿推荐</span></h1>
			<ul class="ul1">
				<router-link to="/staydetail" tag="li">
					<img src="../../assets/foods1.png">
					<div class="div3">
						<h2>北京王府井酒店</h2>
						<span>￥398</span>
						<span>月销201件</span>
					</div>
				</router-link>
				<router-link to="/staydetail" tag="li">
					<img src="../../assets/index/house.png">
					<div class="div3">
						<h2>北京王府井酒店</h2>
						<span>￥398</span>
						<span>月销201件</span>
					</div>
				</router-link>
				<router-link to="/staydetail" tag="li">
					<img src="../../assets/index/house1.png">
					<div class="div3">
						<h2>北京王府井酒店</h2>
						<span>￥398</span>
						<span>月销201件</span>
					</div>
				</router-link>
			</ul>
		</div>
		<div class="stay-div4">
				<div class="stay-div2">
					<h1><span>养生住宿</span></h1>
					<ul class="stay-ul2">
				<router-link to="/staydetail" tag="li">
							<img src="../../assets/house2.png" class="stay-img4" />
							<h2>北京福地凰城酒店</h2>
							<span>高档型</span>
							<p>豪华实拍，大床，近地铁入口</p>
							<div>
							<span>月销182件</span>
							<span>￥398<span id="stay-span">起</span></span>
							</div>
						</router-link>
				<router-link to="/staydetail" tag="li">
							<img src="../../assets/house1.png" class="stay-img4" />
							<h2>北京福地凰城酒店</h2>
							<span>高档型</span>
							<p>豪华实拍，大床，近地铁入口</p>
							<div>
							<span>月销128件</span>
							<span>￥398<span id="stay-span">起</span></span>
							</div>
						</router-link>
					</ul>
				</div>	
			</div>




	</div>
</template>

<script type="text/javascript">
	
	export default {
		name:"stay",
		data(){
			return {

			}
		},
		methods:{
			back(){
	    		this.$router.go(-1)
	    	}
		}
	}
</script>

<!-- 给style标签加scoped属性， 避免样式污染全局 -->
<style type="text/css" scoped>
	.stay-div1{
		display: flex;
		height: 128px;
		width: 100%;
		text-align: center;
		background-color: #FFF;
	}
	.stay-div1 img{
		width:22px;
		height:39px;
		margin-left: 42px;
		margin-top: 68px;
	}
	.stay-div1 h1{
		font-size:36px;
		color:#333333;
		letter-spacing:0.58px;
		text-align:center;
		width: 390px;
		height: 50px;
		margin-top: 68px;
		margin-left: 116px;
	}
	.stay-div2 h1 span{
		width: 128px;
		height: 45px;
		display: block;
		background-image: url(../../assets/index/bottomline.png);
		background-repeat: no-repeat;
		background-position: 0px 40px;
		background-size: 138px 10px;
		line-height: 45px;

	}
	.stay-div2 .ul1 img{
		width: 222px;
		height: 222px;

	}
	.stay-div2 h1{
		height: 72px;
		margin-left: 36px;
    	width: 100%-36px;
   		font-family:PingFangSC-Medium;
		font-size:32px;
		color:#333333;
		letter-spacing:-0px;
		line-height: 99px;	
		padding-top: 27px;
		
	}
	.stay-div2{
		padding: 0px 22px 0px 22px;
		background-color: #FFF;
		height: 373px;
		margin-bottom: 20px;

	}
	.stay-div2 .ul1{
		display: flex;
		width: 100%;
		color: #FFF;

	}
	.stay-div2 .ul1 li{
		width:222px;
		height: 222px;
		flex: 1;
		position: relative;
		margin-right: 20px;
	}
	.stay-div2 .ul1 h2{
		font-family:PingFangSC-Medium;
		font-size:24px;
		color:#ffffff;
		letter-spacing:-0px;
		text-align: center;
	}
	.stay-div2 .ul1 li .div3{
		position: absolute;
		bottom: 11px;
		left: 17px;
	}
	.stay-div4{
		width:100%;
		height: 916px;
		background-color: #FFF;
	}
	.stay-img4{
		width: 710px;
		height: 190px;
		border-radius:10px;
	}
	.stay-div2 .stay-ul2 h2{
		font-family:PingFangSC-Medium;
		font-size:30px;
		color:#333333;
		letter-spacing:-0px;
		margin-top: 19px;
		margin-left: 30px;
		display: inline-block;

	}
	.stay-div2 .stay-ul2 span:nth-child(3){
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#999999;
		letter-spacing:-0px;
		margin:20px 0 0 20px;
		line-height: 50px;
	}
	.stay-div2 .stay-ul2 p{
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#666666;
		letter-spacing:-0px;
		line-height:40px;
		margin-left: 30px;
	}
	.stay-div2 .stay-ul2 div{
		display: flex;
		margin-bottom: 40px;
	}
	.stay-div2 .stay-ul2 div span{
		flex: 1;

	}
	.stay-div2 .stay-ul2 div span:nth-child(1){
		margin-left: 30px;
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#999999;
		letter-spacing:-0px;
	}
	.stay-div2 .stay-ul2 div span:nth-child(2){
		margin-left: 350px;
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#fa4c01;
		letter-spacing:-0px;
	}
	.stay-div2 .stay-ul2 div #stay-span{
		margin-left: 6px;
	}
</style>