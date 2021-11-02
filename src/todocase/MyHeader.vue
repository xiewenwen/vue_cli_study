<template>
  <div>
      <input type="text" v-model="todo" ref="todo" @keyup.enter="gettodo"/>
  </div>
</template>

<script>
export default {
    name:'MyHeader',
    data(){
        return{
            todo:''
        }
    },
    props:['addtodo'],
    methods:{
        gettodo(){
            //输入的是空 结束条件
            if(!this.todo)  return false;
            console.log(this.todo);
            const obj={
                id:Math.random()*100000000,
                title:this.todo,
                done:false
            }
            console.log(obj);
            //这边本质调用的是app下的方法，实现app下数组的添加
            this.addtodo(obj);
            this.todo=''
        }

    },
    

}
</script>

<style>

</style>