<template>
<ul>
    <!-- <li>news1</li>
    <li>news2</li>
    <li>news3</li> -->
    <li v-for="n in newslist" :key="n.id">
        <router-link :to="{
            //params需要用name实现路由的跳转
            name:'DetailNews',
            //传递params参数
            params:{id:n.id,name:n.name}
        }">
        {{n.name}}
        </router-link>    
    </li>
    <router-view></router-view>
</ul>
  
</template>

<script>
export default {
    name:'News',
    data(){
        return {
            newslist:[
                {'id':'001','name':'news1','content':'news1'},
                {'id':'002','name':'news2','content':'news2'},
                {'id':'003','name':'news3','content':'news3'},
                ]
        }
    }

}
</script>

<style>

</style>