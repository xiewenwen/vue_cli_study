<template>
    <div>
        <h2>home组件内容</h2>
        <!-- 二级路由下需要把一级路由的名称带着 -->
        <router-link to="/home/news">news</router-link><br/>
        <router-link to="/home/message">message</router-link>
        <router-view></router-view>
    </div>  
</template>
<script>
export default {
    name:"Home",
    data(){
        return{
            name:''
        }
    }

}
</script>

<style>

</style>