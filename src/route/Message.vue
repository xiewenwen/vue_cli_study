<template>
<ul>
    <!-- <li>mes1</li>
    <li>mes2</li>
    <li>mes3</li> -->
    <li v-for="m in meslist" :key="m.id">
        <!-- 路由带参数的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}`">{{m.name}}</router-link> -->
        <!-- 路由带参数的对象写法 推荐使用 -->
        <router-link :to="{
            //跳转路径
            path:'/home/message/detail',
            //携带的参数
            query:{
                id:m.id,
                name:m.name
            }

        }">
            {{m.name}}
        </router-link>
    </li>

    <router-view></router-view>
</ul>
  
</template>

<script>
export default {
    name:'Message',
    data(){
        return {
            meslist:[
                {"id":'001',"name":'mes1',"content":'concent mes1'},
                {"id":'002',"name":'mes2',"content":'concent mes2'},
                {"id":'003',"name":'mes3',"content":'concent mes3'}
            ]
        }
    }
}
</script>

<style>

</style>