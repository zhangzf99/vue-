<template>
  <div class="app">
    <div class="header"></div>
    <div class="content">
      <div class="left_nav">
        <ul>
          <li>
            <router-link to="/">欢迎页面</router-link>
          </li>
          <li>
            <router-link to="/category">栏目管理</router-link>
          </li>
          <li>
            <router-link to="/article">文章管理</router-link>
          </li>
          <li>
            <router-link to="/user">用户管理</router-link>
          </li>
          <li>
            <router-link to="/exam">考试管理</router-link>
          </li>
        </ul>
      </div>
      <div class="right_content">
        <div class="wrapper">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return{
      msg:'hello world'
    }
  }
}
</script>
<style>
template,div,h2,ul,li{
  padding: 0;
  margin: 0
}
ul,li{
  list-style: none
}
a{
  text-decoration: none;
  color:black
}
.header{
  position: absolute;
  width: 100%;
  height: 60px;
  top: 0;
  left:0;
  background-color: teal;
}
.content{
  position: absolute;
  width: 100%;
  top:60px;
  left:0;
  bottom: 0;
}
.content > .left_nav{
  width: 160px;
  height: 100%;
  /* background-color: teal; */
  float: left
}
.content > .left_nav > ul{

}
.content > .left_nav > ul li{
  text-align: center;
  line-height: 3em;
  border-bottom: 1px solid #ededed
} 
.content > .right_content{
  margin-left:160px;
  height: 100%;
  padding: .5em;
  background-color: #f0f0f0;
  box-sizing:border-box;
}
.content > .right_content > .wrapper{
  padding: .5em;
  border:1px solid #ccc;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  box-sizing:border-box;
  background-color: #ffffff
}
</style>
