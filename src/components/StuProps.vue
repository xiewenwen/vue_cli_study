<template>
  <div>
    <h2>{{ msg }}</h2>
    <h2>{{ name }}</h2>
    <h2>{{ gender }}</h2>
    <h2>{{ age }}</h2>
    <h2>{{myage}}</h2>
    <button @click="updateage">updateage</button>
  </div>
</template>

<script>
export default {
  name: "StuProps",
  data() {
    return {
      //组件下能出现的
      msg: "hello!welcome to here",
      //外部传递的参数，age不能在方法内直接进行修改，需要把传递过来的数值赋值给data下面的参数
      //通过改修data下的参数来触发
      //外部传递的参数的优先级别大于内部参数
      myage:this.age
    }
  },
    methods:{
        updateage(){
            this.myage=99;
        }
    },

  //接收参数，简单接收
  // props:['name','gender','age']

  ///高级接收，限定的参数的类型
  //     props: {
  //   title: String,
  //   likes: Number,
  //   isPublished: Boolean,
  //   commentIds: Array,
  //   author: Object,
  //   callback: Function,
  //   contactsPromise: Promise // or any other constructor
  // }

  //高级接收，接收的同时加上必要性和默认值指定限制和类型限制
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 21,
    },
    gender: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>