<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        <School ref="school"></School>
        <Student></Student>
        <h2 v-text="msg" ref="title" id='title'></h2><button @click="show" ref="btn">show</button>
        <!-- :age的意思是后面的是 按照表达式运算 -->
        <StuProps name="stone" gender="men" :age="20+1"/>

        <StuMixin></StuMixin>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import School from './components/School'
import Student from './components/Student'
import StuProps from './components/StuProps'
import StuMixin from './components/StuMixin'

export default {
  name: 'App',
  components: {
    // HelloWorld
      School,
      Student,
      StuProps,
      StuMixin
      
  },
  data(){
    return {
      msg:'hello'
    }
  },
  methods:{
    show(){
      //ref用于给元素或者组件打上标签，用于找到对应的标签信息
      console.log(this.msg);
      //传统获取dom的方式
      console.log(document.getElementById('title'));
      //vue下获取对应的dom元素
      console.log(this.$refs.title);
      //组件也可获取，获取组件，获取的是组件vc实例
      console.log(this.$refs.school);      
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
