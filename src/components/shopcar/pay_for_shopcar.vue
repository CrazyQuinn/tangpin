<template>
	<div>
		<div class="top">
			<div class="go-back" @click="goBack()"></div>
			<div class="title">确认订单</div>
		</div>
		<div class="top-space"></div>
		<div class="all-goods-box" v-for="(allItem,index_) in allItems">
			<div class="goods-title-box">
				<div class="goods-title">
					<span class="goods-title-name">{{allItem.type}}</span>
					<div class="goods-title-name-bottom-line"></div>
				</div>
			</div>
			<div class="goods-boxes" v-for="(item,index) in allItem.items" :key="index">
				<div class="line"></div>
				<div class="goods-box" :id="item.id">
					<div class="goods-image">
						<div class="order" v-if="item.isOrder">已预约</div>
					</div>
					<div class="goods-info">
						<div class="goods-name">{{item.title}}</div>
						<div class="goods-desp">{{item.word1}}</div class="">
						<div class="goods-desp">{{item.word2}}</div class="">
						<div class="goods-desp">购买数量：{{item.num}}</div class="">
						<div class="goods-price">￥<span class="bigger-font">{{item.price}}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<ul class="remarks">
			<li class="entry m-top">买家留言：如有特殊需求，请在这里留言</li>
			<li class="entry">店铺：良心卖家不服来辩假一赔十</li>
			<li class="entry m-top">使用卡券
				<span class="ticket">10元代金券 </span>
			</li>
			<li class="entry m-top">运费
				<span>￥<span class="bigger-font">{{other.freight}}</span></span>
			</li>
			<li class="entry">优惠
				<span>-￥<span class="bigger-font">{{other.discount}}</span></span>
			</li>
			<li class="entry">总价
				<span style="color:#fa4c01">￥<span class="bigger-font">{{totalPrice}}</span></span>
			</li>
		</ul>
		<div class="bottom-space"></div>
		<div class="bottom">
			<span class="total-price">合计金额：<span>￥<span class="bigger-font">{{totalPrice}}</span></span></span>
			<router-link to="/pay for goods" class="pay">
				下单
			</router-link>
		</div>
	</div>
</template>
<script>
	export default{
		name:"pay_for_shopcar",
		data(){
			return{
				allItems:[{
					type:'膳食专区',
					items:[{
						id:'1',
						image:'image',
						title:'title',
						word1:'word1',
						word2:'word2',
						price:'10',
						num:1,
						isOrder:false
					},{
						id:'2',
						image:'image',
						title:'title',
						word1:'word1',
						word2:'word2',
						price:'20',
						num:2,
						isOrder:false
					},{
						id:'3',
						image:'image',
						title:'title',
						word1:'word1',
						word2:'word2',
						price:'30',
						num:3,
						isOrder:true
					}]
				},{
					type:'服务专区',
					items:[{
						id:'4',
						image:'image',
						title:'title',
						word1:'word1',
						word2:'word2',
						price:'40',
						num:1,
						isOrder:false
					},{
						id:'5',
						image:'image',
						title:'title',
						word1:'word1',
						word2:'word2',
						price:'50',
						num:2,
						isOrder:false
					},{
						id:'6',
						image:'image',
						title:'title',
						word1:'word1',
						word2:'word2',
						price:'60',
						num:3,
						isOrder:true
					}]
				}],
				other:{
					freight:10,
					discount:20
				}
			}
		},
		computed:{
			totalPrice(){
				var allItems=this.allItems;
				var total=0;
				for(var i=0;i<allItems.length;i++){
					for(var j=0;j<allItems[i].items.length;j++){
						total+=allItems[i].items[j].num*allItems[i].items[j].price;
					}
				}
				return total+this.other.freight-this.other.discount;
			}
		},
		methods:{
			goBack(){
				this.$router.go(-1);
			}
		}
	}
</script>
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
		bottom:18px;
		left:50%;
		margin-left:-195px;
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
		margin-left:36px;
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
	.goods-box{
		width:100%;
		height:250px;
		background-color:#FFF;
		position:relative;
		display:flex;
		flex-flow:row nowrap;
		align-items:center;
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
	.goods-price{
		font-family:PingFangSC-Regular;
		font-size:24px;
		color:#fa4c01;
		position:absolute;
		right:30px;
		bottom:26px;
	}
	.goods-image{
		width:190px;
		height:190px;
		background-color:#d8d8d8;
		border-radius:10px;
		margin-top:10px;
		margin-left:33px;
		position:relative;
		overflow:hidden;
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
	.entry{
		font-family:PingFangSC-Regular;
		height:38px;
		padding:32px;
		background-color:#FFF;
		line-height:38px;
		font-size:30px;
		margin:1px 0;
		color:#333;
		display:flex;
		justify-content:space-between;
	}
	.ticket{
		color:#fa4c01;
	}
	.ticket:after{
		content:'';
		display:inline-block;
		width:18px;
		height:18px;
		border-right:3px solid #ccc;
		border-bottom:3px solid #ccc;
		transform:rotate(-45deg);
	}
	.m-top{
		margin-top:20px;
	}
	.bottom{
		height:100px;
		width:750px;
		position:fixed;
		bottom:0;
		display:flex;
		align-items:center;
		background-color:#FFF;
		z-index:10;
	}
	.total-price{
		margin-left:30px;
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
		height:120px;
	}
	.go-back{
		width:28px;
		height:28px;
		border-left:3px solid #fdab2b;
		border-bottom:3px solid #fdab2b;
		transform:rotate(45deg);
		position:absolute;
		top:67px;
		left:41px;
	}
</style>