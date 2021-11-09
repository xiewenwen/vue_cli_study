<template>
    <div class="demo">
        <h2>{{name}}  {{home}}</h2>
        <h2>这里是测试页面</h2><button @click="showtodos(name)">使用props传递参数和方法</button>
        <!-- <button @click="showhello">showhello</button> -->
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
    },
    //初始化组件的时候 在school上面绑定自定义事件
    mounted(){
            this.$bus.$on('hello',(data)=>{
                console.log('我是school 我收到了'+data)
            })
        }
    }
//备注
</script>
<style>
 .demo{
     background-color: brown;
 }
</style>