<template>

<div>
  
  <div class="shop">

<el-container>
  <el-header class="header-content">


    <p class="header-text">商铺</p>
</el-header>

  <el-tabs v-model="activeName" @tab-click="handleClick" class="tab-header" :stretch=true >
      <el-tab-pane  label="全部" name="first">
      
      <div v-for="item in arrList" v-if="item.tabtype == '1' " >

          <el-card class="box-card">
                 <li class="img-li">
                    <router-link to="/shopsMain" tag="li">
                      <img  v-bind:src="item.stayImg" class="box-img" />
                    </router-link>  
                   <div class="box-text">
                    <h2 class="box-text-h2">{{item.stayName}}</h2>
                      <img src="../../assets/shops/9E92EBA5-E4A8-4BB6-8D2F-FAB1678BEBF1@1x.png" class="position-icon">
                          <p class="box-text-p1">{{item.stayPosition}}</p>
                          <p class="box-text-p2">{{item.stayInfo}}</p>
                  </div>
                    
                 </li>
            
          </el-card>
      </div>


    </el-tab-pane>

      <el-tab-pane  label="膳食类" name="second">
      
        <div v-for="item in arrList" v-if="item.tabtype == '2'" >

         
           <el-card class="box-card">
                 <li class="img-li">
                    <router-link to="/shopsMain" tag="li">
                        <img  v-bind:src="item.stayImg" class="box-img" />
                    </router-link>  
                  <div class="box-text">
                    <h2 class="box-text-h2">{{item.stayName}}</h2>
                      <img src="../../assets/shops/9E92EBA5-E4A8-4BB6-8D2F-FAB1678BEBF1@1x.png" class="position-icon">
                          <p class="box-text-p1">{{item.stayPosition}}</p>
                          <p class="box-text-p2">{{item.stayInfo}}</p>
                  </div>
                    
                 </li>
            
          </el-card>
      </div>

    </el-tab-pane>

      <el-tab-pane label="住宿类" name="third">

         <div v-for="item in arrList" v-if="item.tabtype == '3'" >

         
              <el-card class="box-card">
                 <li class="img-li">
                    <router-link to="/shopsMain" tag="li">
                        <img  v-bind:src="item.stayImg" class="box-img" />
                    </router-link>  
                  <div class="box-text">
                    <h2 class="box-text-h2">{{item.stayName}}</h2>
                      <img src="../../assets/shops/9E92EBA5-E4A8-4BB6-8D2F-FAB1678BEBF1@1x.png" class="position-icon">
                          <p class="box-text-p1">{{item.stayPosition}}</p>
                          <p class="box-text-p2">{{item.stayInfo}}</p>
                  </div>
                    
                 </li>
            
          </el-card>
      </div>
      
    </el-tab-pane>

      <el-tab-pane label="服务类" name="fourth" >

          <div v-for="item in arrList" v-if="item.tabtype == '4'" >


            <el-card class="box-card">
                 <li class="img-li">
                    <router-link to="/shopsMain" tag="li">
                     <img  v-bind:src="item.stayImg" class="box-img" />
                    </router-link>  
                  <div class="box-text">
                    <h2 class="box-text-h2">{{item.stayName}}</h2>
                       <img src="../../assets/shops/9E92EBA5-E4A8-4BB6-8D2F-FAB1678BEBF1@1x.png" class="position-icon">
                          <p class="box-text-p1">{{item.stayPosition}}</p>
                          <p class="box-text-p2">{{item.stayInfo}}</p>
                  </div>
                    
                 </li>
            
          </el-card>
        


      </div>
      
    </el-tab-pane>
  </el-tabs>
</el-container>
    
  </div>
</div>
 
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        activeName: 'first',
       
        arrList:[{
             stayName:'深圳中天养生酒店1',
             stayPosition:'广东省深圳市南山区星海大街88号深业上城',
             stayInfo:'酒店位置市内，二环内，离天安门2-3公里。在钱粮胡同中间。酒店门口左拐300米就有吃饭的地方',
             stayImg:'/static/2572BA30-55B9-4D30-A451-56A1AB6AC9C6@1x.png',
             tabtype:'1'

        },{
             stayName:'深圳中天养生酒店2',
             stayPosition:'广东省深圳市南山区星海大街88号深业上城',
             stayInfo:'酒店位置市内，二环内，离天安门2-3公里。在钱粮胡同中间。酒店门口左拐300米就有吃饭的地方',
              stayImg:'/static/2572BA30-55B9-4D30-A451-56A1AB6AC9C6@1x.png',
             tabtype:'2'

        },{
             stayName:'深圳中天养生酒店2',
             stayPosition:'广东省深圳市南山区星海大街88号深业上城',
             stayInfo:'酒店位置市内，二环内，离天安门2-3公里。在钱粮胡同中间。酒店门口左拐300米就有吃饭的地方',
              stayImg:'/static/2572BA30-55B9-4D30-A451-56A1AB6AC9C6@1x.png',
             tabtype:'2'

        },{
             stayName:'深圳中天养生酒店2',
             stayPosition:'广东省深圳市南山区星海大街88号深业上城',
             stayInfo:'酒店位置市内，二环内，离天安门2-3公里。在钱粮胡同中间。酒店门口左拐300米就有吃饭的地方',
              stayImg:'/static/2572BA30-55B9-4D30-A451-56A1AB6AC9C6@1x.png',
             tabtype:'2'

        },{
             stayName:'深圳中天养生酒店3',
             stayPosition:'广东省深圳市南山区星海大街88号深业上城',
             stayInfo:'酒店位置市内，二环内，离天安门2-3公里。在钱粮胡同中间。酒店门口左拐300米就有吃饭的地方',
               stayImg:'/static/2572BA30-55B9-4D30-A451-56A1AB6AC9C6@1x.png',
             tabtype:'3'

        },{
             stayName:'深圳中天养生酒店4',
             stayPosition:'广东省深圳市南山区星海大街88号深业上城',
             stayInfo:'酒店位置市内，二环内，离天安门2-3公里。在钱粮胡同中间。酒店门口左拐300米就有吃饭的地方',
               stayImg:'/static/2572BA30-55B9-4D30-A451-56A1AB6AC9C6@1x.png',
             tabtype:'4'

        },]

      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>



<!-- 给style标签加scoped属性， 避免样式污染全局 -->
<style type="text/css" >
 .shop .header-content {
    background-color: #fff;
    text-align: center;
    line-height: 120px;
    height: 128px!important;
    position: fixed;
    width: 100%;
    z-index: 10;
    border-bottom: 5px solid whitesmoke;
    top: 0px;
    left: 0px;

  }


  .shop .header-text{
   font-family:PingFangSC-Semibold;
    font-size:36px;
    color:#333333;
    letter-spacing:0.58px;
  }
  .shop .el-tab-pane{
    background-color: #fff;
    flex: 1;
    font-size:20px;
    width: 100%;
  }
.shop .el-tabs__item{


    line-height: 83px;
    font-family:PingFangSC-Semibold;
    font-size:32px;
    color:#333333;
    text-align:center;


}
.shop .box-img{
  margin-bottom: 30px;
  background:#e0e0e0;
  width:686px;
  height:360px;
  border-top-left-radius: 10px;
   border-top-right-radius: 10px;
}
.shop li{

list-style:none;
}
.shop el-card{
  text-align: center;
}
.shop .el-tabs__nav{
    width: 100%!important;
    height: 40px;
    position: absolute;
}

.shop .tab-header{
  width: 100%;
  margin-top: 128px;
  margin-bottom:100px;
}
 .shop .div4{
      width: 100%;
      height: 907px;
      background-color: #FFF; 
      margin-bottom: 20px;

    }
.shop .el-tabs__nav.is-stretch{
    height: 87px;
    position: fixed;
    width: 100%;
     line-height: 43px;
   background-color: #fff;

}
.shop .el-tabs__content{
  margin-top: 87px
}

.shop .el-tabs__item:hover{
  color: #fdab2b;
}
.shop .el-tabs__active-bar{
      background-color: #fdab2b;
}
.shop .el-tabs__item.is-active{
   color: #fdab2b;
}
.shop .el-card__body{
  background-color:#eee;
  padding:30px 32px 0px 32px;
}
.shop .img-li{
  background-color: #fff;
  border-radius: 10px;
}
.shop .box-text{
  padding-left: 35px;
  padding-bottom: 30px;
}
.shop .box-text-h2{
  font-family:PingFangSC-Semibold;
  font-size:34px;
  color:#333333;
}
.shop .box-text-p1{
  font-family:PingFangSC-Regular;
  font-size:28px;
  color:#666666;
  margin-top: 12px;
  margin-left: 45px;
}
.shop .box-text-p2{
  font-family:PingFangSC-Regular;
  font-size:24px;
  color:#999999;
  margin-top: 25px;
}
.shop .position-icon{
  width:38px;
  height:45px;
  position: absolute;
  margin-top:10px;
}

.el-card{
  border:0px!important;
}

.el-card.is-always-shadow, .el-card.is-hover-shadow:focus, .el-card.is-hover-shadow:hover{
    -webkit-box-shadow:0px!important;
    box-shadow:0px!important;
}
</style>