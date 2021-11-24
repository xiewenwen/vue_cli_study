<template>
  <el-container>
  <el-header>
    <Header></Header>
  </el-header>
  <el-container>
    <el-aside width="250px" height="100%">
    <!-- <el-aside width="200px"> -->
      <Aside></Aside>
    </el-aside> 
    <el-container>
      <el-main>
        <!-- <Content></Content> -->
        <Breadcrumb/>
        <Tab></Tab>

      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
  </el-container>
</template>

<script>
import Header from './Header.vue'
import Aside from './Aside.vue'
// import Content from './Content.vue'
import Tab from './Tab.vue'
import Breadcrumb from './Breadcrumb.vue'
export default {
    name:'Main',
    components:{
      Header,
      Aside,
      // Content
      Tab,
      Breadcrumb
      

    }
   
}
</script>

<style>
.el-header, .el-footer {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 60px;
    width: 100%;
  }
  
  .el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 200px;
    height: 600px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 30px;
    height: 100%;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

</style>