// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//引入入口文件
import App from './App'
//引入路由

//引入axios插件
import axios from 'axios'
//引入自适应适配文件
import 'lib-flexible'
//导入elementui库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import MintUI from 'mint-ui';
//import 'mint-ui/lib/style.css'
import 'mint-ui/lib/style.css' 
Vue.use(MintUI);

import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


import './assets/iconfont1/iconfont.css'


//使用elemntui
Vue.use(ElementUI);

//axios继承http请求
Vue.prototype.$http=axios;


/*Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);*/


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

import router from './router'
