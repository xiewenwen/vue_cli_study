<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- school标签下和student标签下 都用.demo的样式，定义了不同的背景色 
          那个标签先引用 就会被覆盖，所以要在对应组件的<style scoped>,各自独立不会被覆盖
     -->
        <School ref="school"></School>
        <Student></Student>
        <h2 v-text="msg" ref="title" id='title'></h2><button @click="show" ref="btn">show</button>
        <!-- :age的意思是后面的是 按照表达式运算 -->
        <StuProps name="stone" gender="men" :age="20+1"/>

        <StuMixin></StuMixin>
        <!-- header下接收的是函数，在hander内调用函数 增加数组项 -->
        <MyHeader :addtodo='addtodo'></MyHeader>

        <List :todos="todos" :checkTodo="checkTodo"/>
        <MyFooter :todos="todos"/>
        <!-- 绑定组件的自定义事件 -->
        <StuEvent v-on:testeve="getstuname" v-on:mytest="testvue"></StuEvent>
        <SchoolEvent :todos="todos" :testvue2="testvue2"></SchoolEvent>
        <Schpub/>
        <Stupub/>
        
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import School from './components/School'
import Student from './components/Student'
import StuProps from './components/StuProps'
import StuMixin from './components/StuMixin'
import MyHeader from './todocase/MyHeader.vue'
import List from './todocase/List.vue'
import MyFooter from './todocase/MyFooter.vue'
import StuEvent from './vueevents/StuEvent.vue'
import SchoolEvent from './vueevents/SchoolEvent.vue'
import Schpub from './vuepubsub/Schpub.vue'
import Stupub from './vuepubsub/Stupub.vue'


export default {
  name: 'App',
  components: {
    // HelloWorld
      School,
      Student,
      StuProps,
      StuMixin,
      MyHeader,
      List,
      MyFooter,
      StuEvent,
      SchoolEvent,
      Schpub,
      Stupub

      
  },
  data(){
    return {
      msg:'hello',
      // todos:[{'id':'001','title':'eat','done':true},
      //       {'id':'002','title':'sleep','done':true},
      //       {'id':'003','title':'drink','done':false}]
      //初始化的时候的从缓存中读取todos,但是注意 在一开始没有缓存写入进去，读取为空的时候，会报错
      //所以加上个空数组判断，没有读取也不会报错
      todos:JSON.parse(localStorage.getItem('todos'))||[]
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
    },
    addtodo(obj){
      this.todos.unshift(obj);
    },
    checkTodo(id){
      this.todos.forEach((todo)=>{
        if(todo.id===id) todo.done=!todo.done
      })
    },
    getstuname(name){
      console.log('app收到的了name'+name)
    },
    testvue(name){
      console.log('测试名称'+name)
    },
    testvue2(name){
      console.log('测试名称'+name)
    },
  },
  watch:{

    // todos(value){
    //   localStorage.setItem('todos',JSON.stringify(value))
    // }
    todos:{
      //开启深度检测，报错done的检测，所以之前的简写模式不能用了 要完整写法
      deep:true,
      handler(value){
        localStorage.setItem('todos',JSON.stringify(value))
      }
    }
  }
  // ,
  // mounted(){
  //   //谁接收参数 谁需要绑定事件 app组件下有总数据todos  需要收来自item组件下的id勾选中操作 所有需要接收该组件的id
  //   //把函数绑定到自定义事件上去
  //   this.$bus.$on('checkTodo',this.checkTodo)
  // }
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
