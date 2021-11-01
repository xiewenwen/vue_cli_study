<template>
    <div class="demo">
        <h2>{{name}}</h2>
        <h2>{{home}}</h2>
        <!-- 插件增强调用，x和y为在plugins下定义的公共方法 -->
        <button>{{x}}</button><button>{{y}}</button>
    </div>
</template>
<script>
    export default{
        name:'Student',
        data(){
        return{
            name:'ashin',
            home:'zg'
        }        
    }
    }
</script>
<style scoped>
 .demo{
     background-color:pink;
 }
</style>