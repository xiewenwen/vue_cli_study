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
    <!-- kepp-alive 保存路由组件的缓存 不会被销毁 include下写的是组件名 指定组件不被销毁 
        持续挂载，不被销毁 不然在切换路由的时候 组件就会被销毁 下面的数据都不会保存了
    -->
    <keep-alive include="News">
    <router-view></router-view>
    </keep-alive>
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