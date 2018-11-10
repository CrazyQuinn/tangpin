<template>
  <div id="app">
  
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
  
}
</script>


<!-- 全局样式,通常用来定义通用样式，或者进行样式重置，不要轻易改这里的样式，如果有需要改的在自己的单页面组件里修改 -->
<style>
ul,ol{ list-style: none;}
input{ outline:none}
img{ display: block; border:0;}
header,footer,nav,main,article,aside,section{ display:block;}
a{ text-decoration: none;}
html,body{background: #eee;}
body,h1,h2,h3,h4,h5,h6,ol,ul,li,dl,dt,p,dd,input,img,a,figure,figcaption{padding:0; margin:0;}

</style>
