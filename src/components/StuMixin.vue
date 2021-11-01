<template>
 <div>
        <h2>{{name}}</h2>
        <h2>{{home}}</h2>
        <!-- 在这里@click下面直接引用函数的名字 -->
        <button @click="show">mixin name</button>
        <button @click="show2">mixin home</button>
        <button @click="showage">show mixin age</button>
    </div>
  
</template>

<script>
//顶部进入mixin.js文件
import {a, b} from '../mixin'
export default {
        name:'StuMixin',
        data(){
        return{
            name:'ashin',
            home:'zg'
        }        
    },
    //以数组的形式，将公共方法和数据引入到这里
    mixins:[a,b],
    methods:{
        showage(){
            //这个age是定义mixin的公共数据
            alert(this.age);
        }
    }
    

}
</script>

<style>

</style>