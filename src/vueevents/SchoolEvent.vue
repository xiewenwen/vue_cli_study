<template>
    <div class="demo">
        <h2>{{name}}  {{home}}</h2>
        <h2>这里是测试页面</h2><button @click="showtodos(name)">使用props传递参数和方法</button>
    </div>
</template>
<script>
    export default{
        name:'School',
        data(){
        return{
            name:'ashin',
            home:'zg'
        }        
    },
    props:['todos','testvue2'],
    methods:{
        showtodos(name){
            console.log(this.todos)
            this.testvue2(name)
        }
    }
    }
//备注
</script>
<style>
 .demo{
     background-color: brown;
 }
</style>