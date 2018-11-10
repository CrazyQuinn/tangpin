<template>
	<div>
		<div class="top">
			<div class="title">购物车</div>
		</div>
		<div class="top-space"></div>
		<div class="all-goods-box" v-for="(allItem,index_) in allItems">
			<div class="goods-title-box">
				<div class="choose" :class="{selected:allItem.isselected}" @click="toChooseTypeAll(index_)"></div>
				<div class="goods-title">
					<span class="goods-title-name">{{allItem.itemsType}}{{isTypeAllChoose}}</span>
					<div class="goods-title-name-bottom-line"></div>
				</div>
			</div>
			<div class="goods-boxes" v-for="(item,index) in allItem.items" :key="index">
				<div class="line"></div>
				<div class="goods-box-inview">
					<div class="goods-box" @touchmove="leftToDelete" @touchstart="startLocation" @touchend="endMove" style="margin-left:0">
						<div class="goods">
							<div class="choose" :class="{selected:item.isselected}" @click="selected(index_,index)"></div>
							<router-link to="/foodsdetail">
								<div class="goods-image">
									<img class="goods-image-img" :src="item.image"/>
									<div class="order" v-if="item.isOrder">已预约</div>
								</div>
							</router-link>
							<div class="goods-info">
								<router-link to="/foodsdetail">
									<div class="goods-name">{{item.title}}</div>
								</router-link>
								<div class="goods-desp">{{item.word1}}</div class="">
								<div class="goods-price-and-num">
									<div class="goods-price">￥<span class="bigger-font">{{item.price}}</span></div>
									<div class="goods-num">
										<el-input-number v-model="item.num" @change="handleChange" :min="1" label="描述文字"></el-input-number>
									</div>
								</div>
							</div>
						</div>
						<div class="delete-goods" @click="deleteGoods(index_,index)">删除</div>
					</div>
				</div>
			</div>
		</div>
		<div class="recommend">
			<div class="recommend-title">智能推荐</div>
			<div class="line"></div>
			<div class="recommend-list">
				<div class="recommend-goods" v-for="item in items2">
					<router-link to="/foodsdetail">
						<div class="recommend-image">
							<img class="recommend-image-img" :src="item.image"/>
						</div>
					</router-link>
					<div class="recommend-name">{{item.name}}</div>
					<span class="recommend-price">￥<span class="bigger-font">{{item.price}}</span></span>
					<span class="recommend-sold">月销{{item.sold}}件</span>
				</div>
			</div>
		</div>
		<div class="bottom-space"></div>
		<div class="bottom">
			<div class="choose" :class="{selected:allChoose}" @click="toChooseAll"></div>
			<span class="choose-all">全选{{isAllChoose}}</span>
			<span class="total-price">合计：<span>￥<span class="bigger-font">{{totalPrice}}</span></span></span>
			<router-link to="/pay for shopcar" class="pay">
				去结算({{totalNum}})
			</router-link>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name:"shopcar",
		data(){
			return {
				originX:0,
				boxMarginLeft:0,
				moveRange:0,
				allChoose:false,
				allItems:[{
					itemsType:'膳食专区',
					isselected:false,
					items:[{
						id:'1',
						image:'/static/gouwu.png',
						title:'title',
						word1:'word1',
						word2:'word2',
						price:'10',
						num:1,
						isOrder:false,
						isselected:false
					},{
						id:'2',
						image:'/static/gouwu.png',
						title:'title',
						word1:'word1',
						word2:'word2',
						price:'20',
						num:2,
						isOrder:false,
						isselected:true
					},{
						id:'3',
						image:'/static/gouwu.png',
						title:'title',
						word1:'word1',
						word2:'word2',
						price:'30',
						num:3,
						isOrder:true,
						isselected:false
					}]
				},{
					itemsType:'服务专区',
					isselected:true,
					items:[{
						id:'4',
						image:'/static/gouwu.png',
						title:'title',
						word1:'word1',
						word2:'word2',
						price:'40',
						num:1,
						isOrder:false,
						isselected:true
					},{
						id:'5',
						image:'/static/gouwu.png',
						title:'title',
						word1:'word1',
						word2:'word2',
						price:'50',
						num:2,
						isOrder:false,
						isselected:true
					},{
						id:'6',
						image:'/static/gouwu.png',
						title:'title',
						word1:'word1',
						word2:'word2',
						price:'60',
						num:3,
						isOrder:true,
						isselected:true
					}]
				}],
				items2:[{
					id:'1',
					image:'/static/meirong.png',
					name:'name',
					price:'2010',
					sold:'201'
				},{
					id:'2',
					image:'/static/meirong.png',
					name:'name',
					price:'2020',
					sold:'202'
				},{
					id:'3',
					image:'/static/meirong.png',
					name:'name',
					price:'2030',
					sold:'203'
				},{
					id:'4',
					image:'/static/meirong.png',
					name:'name',
					price:'2040',
					sold:'204'
				},{
					id:'5',
					image:'/static/meirong.png',
					name:'name',
					price:'2050',
					sold:'205'
				}]
			}
		},
		computed:{
			totalPrice(){
				var allItems=this.allItems;
				var total=0;
				for(var i=0;i<allItems.length;i++){
					for(var j=0;j<allItems[i].items.length;j++){
						if(allItems[i].items[j].isselected==true){
							total+=allItems[i].items[j].num*allItems[i].items[j].price;
						}
					}
				}
				return total;
			},
			totalNum(){
				var allItems=this.allItems;
				var num=0;
				for(var i=0;i<allItems.length;i++){
					for(var j=0;j<allItems[i].items.length;j++){
						if(allItems[i].items[j].isselected==true){
							num++;
						}
					}
				}
				return num;
			},
			isAllChoose(){
				var allItems=this.allItems;
				var flag=true;
				for(var i=0;i<allItems.length;i++){
					for(var j=0;j<allItems[i].items.length;j++){
						if(allItems[i].items[j].isselected==false){
							flag=false;
						}
					}
				}
				this.allChoose=flag;
			},
			isTypeAllChoose(){
				var allItems=this.allItems;
				var flag=true;
				for(var i=0;i<allItems.length;i++){
					flag=true;
					for(var j=0;j<allItems[i].items.length;j++){
						if(allItems[i].items[j].isselected==false){
							flag=false;
						}
					}
					this.allItems[i].isselected=flag;
				}
			}
		},
		methods:{
			selected(index_,index){
				this.allItems[index_].items[index].isselected==true?this.allItems[index_].items[index].isselected=false:this.allItems[index_].items[index].isselected=true;
			},
			// selected(element){
			// 	var id=element.target.parentNode.getAttribute("id");
			// 	var isselected=this.allItems[0].items.filter(function(a){
			// 		return a.id==id;
			// 	})[0].isselected;
			// 	isselected=isselected==true?false:true;
			// 	this.allItems[0].items.filter(function(a){
			// 		return a.id==id;
			// 	})[0].isselected=isselected;
			// },
      		toChooseAll(){
      			var flag=this.allChoose==true?false:true;
      			for(var i=0;i<this.allItems.length;i++){
      				this.allItems[i].isselected=flag;
      				for(var j=0;j<this.allItems[i].items.length;j++){
      					this.allItems[i].items[j].isselected=flag;
      				}
      			}
      			this.allChoose=flag;
      		},
      		toChooseTypeAll(index_){
      			var flag=this.allItems[index_].isselected==true?false:true;
      			for(var j=0;j<this.allItems[index_].items.length;j++){
  					this.allItems[index_].items[j].isselected=flag;
  				}
  				this.allItems[index_].isselected=flag;
      		},
      		handleChange(value) {},
      		deleteGoods(index_,index){
      			var allItems=this.allItems;
      			this.allItems=[];
      			var items=[];
      			var aJson;
      			for(var i=0;i<allItems.length;i++){
      				items=[];
      				for(var j=0;j<allItems[i].items.length;j++){
      					if(i==index_ && j==index){
      						continue;
      					}
      					items.push(allItems[i].items[j]);
      				}
      				if(items[0]==undefined){
      					continue;
      				}
      				aJson={
      					itemsType:allItems[i].itemsType,
      					isselected:allItems[i].isselected,
      					items:items
      				}
      				this.allItems.push(aJson);
      			}
      			var boxes=document.getElementsByClassName("goods-box");
      			for(var i=0;i<boxes.length;i++){
      				boxes[i].style.marginLeft=0;
      			}
      		},
      		startLocation(start){
      			this.moveRange=document.getElementsByClassName("delete-goods")[0].offsetWidth;
      			this.originX=start.changedTouches[0].pageX;
      			var box=start.target;
      			while(box.className != "goods-box"){
      				box=box.parentNode;
      			}
      			this.boxMarginLeft=parseInt(box.style.marginLeft);
      		},
      		leftToDelete(move){
      			var direction=move.changedTouches[0].pageX-this.originX;
      			var box=move.target;
      			while(box.className != "goods-box"){
      				box=box.parentNode;
      			}
      			if(parseInt(box.style.marginLeft) > 0 || parseInt(box.style.marginLeft) < (0-this.moveRange)){
      				return;
      			}
      			box.style.marginLeft=(this.boxMarginLeft+direction)+"px";
      		},
      		endMove(stop){
      			var box=stop.target;
      			while(box.className != "goods-box"){
      				box=box.parentNode;
      			}
      			var speed=2;
      			var maxRange=-this.moveRange;
      			if(parseInt(box.style.marginLeft) > (this.moveRange/-2)){
      				var animal=setInterval(function(){
	      				box.style.marginLeft=(parseInt(box.style.marginLeft)+speed)+"px";
	      				if(parseInt(box.style.marginLeft) > -speed){
	      					box.style.marginLeft=0;
	      					clearInterval(animal);
	      				}
	      			},10)
      			}else{
      				if(parseInt(box.style.marginLeft) == maxRange){
      					return;
      				}
      				var animal=setInterval(function(){
	      				box.style.marginLeft=(parseInt(box.style.marginLeft)-speed)+"px";
	      				if(parseInt(box.style.marginLeft) < maxRange){
	      					box.style.marginLeft = maxRange + "px";
	      					clearInterval(animal);
	      				}
	      			},10)
      			}
      		}
		}
	}
</script>

<!-- 给style标签加scoped属性， 避免样式污染全局 -->
<style scoped>
	.top{
		width:750px;
		height:128px;
		background-color:#FFF;
		position:fixed;
		top:0;
		z-index:10;
	}
	.title{
		position:absolute;
		left:50%;
		margin-left:-195px;
		top:50%;
		margin-top:-25px;
		height:50px;
		width:390px;
		line-height:50px;
		font-family:PingFangSC-Semibold;
		font-size:36px;
		color:#333333;
		letter-spacing:0.58px;
		text-align:center;
	}
	.all-goods-box{
		margin-top:20px;
		background-color:#FFF;
	}
	.goods-title-box{
		width:100%;
		height:72px;
		background-color:#FFF;
		display:flex;
		align-items:center;
	}
	.goods-title{
		margin-left:32px;
		font-family:PingFangSC-Medium;
		font-size:32px;
		color:#333333;
		text-align:left;
		width:128px;
		height:45px;
		line-height:45px;
		position:relative;
	}
	.goods-title-name{
		position:absolute;
		z-index:2;
	}
	.goods-title-name-bottom-line{
		background-image:linear-gradient(-270deg, #ffd556 0%, #fdab2b 100%);
		box-shadow:0 2px 8px 0 rgba(255,209,56,0.50);
		width:138px;
		height:10px;
		position:absolute;
		bottom:0;
		transform:skewX(30deg);
	}
	.goods{
		width:750px;
		height:250px;
		background-color:#FFF;
		position:relative;
		display:flex;
		flex-flow:row nowrap;
		align-items:center;
	}
	.goods-box{
		width:913px;
		display:flex;
		flex-flow:row nowrap;
	}
	.goods-box-inview{
		width:750px;
		overflow:hidden;
	}
	.delete-goods{
		background:#fa4c01;
		width:163px;
		height:250px;
		line-height:250px;
		text-align:center;
		font-size:30px;
		font-family:PingFangSC-Regular;
		color:#ffffff;
	}
	.goods-info{
		height:190px;
		margin-left:30px;
	}
	.goods-name{
		height:50px;
		line-height:50px;
		font-family:PingFangSC-Regular;
		font-size:30px;
		color:#333;
	}
	.goods-desp{
		height:33px;
		line-height:33px;
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#999;
		margin-top:10px;
	}
	.goods-price-and-num{
		margin-top:43px;
		height:53px;
		display:flex;
		align-items:center;
	}
	.goods-price{
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#fa4c01;
	}
	.goods-num{
		position:absolute;
		right:30px;
	}
	.choose{
		height:33px;
		width:33px;
		border:1px solid #fdab2b;
		border-radius:100%;
		margin-left:30px;
	}
	.selected{
		background-image:linear-gradient(-270deg, #ffd556 0%, #fdab2b 100%);
		box-shadow:0 2px 8px 0 rgba(255,209,56,0.50);
		border:opacity(0);
	}
	.selected:after{
		content:'';
		height:18px;
		width:8px;
		display:block;
		margin-left:12px;
		margin-top:4px;
		border-right:3px solid #fff;
		border-bottom:3px solid #fff;
		transform:rotate(45deg);
	}
	.goods-image{
		width:190px;
		height:190px;
		background-color:#d8d8d8;
		border-radius:10px;
		margin-top:10px;
		margin-left:30px;
		position:relative;
		overflow:hidden;
	}
	.goods-image-img{
		height:190px;
		width:190px;
	}
	.order{
		position:absolute;
		bottom:0;
		height:36px;
		width:190px;
		background:rgba(254,173,48,0.60);
		color:#FFF;
		font-family:PingFangSC-Regular;
		font-size:24px;
		line-height:36px;
		text-align:center;
	}
	.recommend{
		margin-top:20px;
		background-color:#FFF;
		padding-bottom:20px;
	}
	.recommend-title{
		text-align:center;
		color:#333;
		height:100px;
		line-height:100px;
		font-size:28px;
		font-family:PingFangSC-Regular;
	}
	.recommend-list{
		display:flex;
		flex-flow:row wrap;
		justify-content:space-between;
		padding:0 20px;
		margin:0 auto;
	}
	.recommend-image{
		width:346px;
		height:346px;
		background-color:#d8d8d8;
		border-radius:10px;
		margin-top:30px;
		overflow:hidden;
	}
	.recommend-image-img{
		width:346px;
		height:346px;
	}
	.recommend-name{
		height:50px;
		line-height:50px;
		font-family:PingFangSC-Regular;
		font-size:28px;
		color:#333333;
		margin:10px;
	}
	.recommend-price{
		height:45px;
		line-height:45px;
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#fa4c01;
	}
	.recommend-sold{
		height:30px;
		line-height:30px;
		font-family:PingFangSC-Regular;
		font-size:22px;
		color:#999999;
		margin-left:10px;
	}
	.bottom{
		height:100px;
		width:750px;
		position:fixed;
		bottom:101px;
		border-bottom:1px solid #eee;
		display:flex;
		align-items:center;
		background-color:#FFF;
		z-index:10;
	}
	.choose-all{
		margin-left:13px;
		width:94px;
		height:33px;
		font-family:PingFangSC-Medium;
		font-size:24px;
		color:#333333;
	}
	.total-price{
		height:33px;
		line-height:33px;
		font-family:PingFangSC-Medium;
		font-size:24px;
		color:#333333;
	}
	.total-price span{
		font-family:PingFangSC-Regular;
		color:#fa4c01;
	}
	.pay{
		position:absolute;
		right:0;
		border:none;
		background-image:linear-gradient(-270deg, #ffd556 0%, #fdab2b 100%);
		width:260px;
		height:100px;
		text-align:center;
		line-height:100px;
		color:#FFF;
		font-family:PingFangSC-Medium;
		font-size:34px;
	}
	.line{
		width:680px;
		height:1px;
		border:1px solid #eee;
		margin:0 auto;
	}
	.bigger-font{
		font-size:35px;
	}
	.total-price .bigger-font{
		position:absolute;
		margin-top:-3px;
	}
	.top-space{
		height:120px;
	}
	.bottom-space{
		height:220px;
	}
</style>
<!-- element ui调节数量组件样式 -->
<style>
	.goods-num .el-input-number__decrease,
	.goods-num .el-input-number__increase{
		background-image:linear-gradient(-270deg, #ffd556 0%, #fdab2b 100%);
		box-shadow:0 2px 8px 0 rgba(255,209,56,0.50);
		border-radius:23px;
		width:46px;
		height:46px;
		line-height:46px;
		text-align:center;
		color:#FFF;
	}
	.goods-num .el-input-number .is-disabled{
		background-image:linear-gradient(45deg, #f1f1f1 0%, #c2c2c5 100%);
		box-shadow:0 2px 8px 0 #e6e6e7;
	}
	.goods-num .el-input__inner{
		font-family:PingFangSC-Medium;
		font-size:24px;
		color:#333333;
		border:none;
	}
</style>