<template>
    <div class="demo">
        <h2>{{name}}</h2>
        <h2>{{home}}</h2>
        <button @click="gethihi">给学生名给学校组件</button>
    </div>
</template>
<script>
import pubsub from 'pubsub-js';
    export default{
        name:'Stupub',
        data(){
        return{
            name:'ashin',
            home:'zg'
        }},
        methods:{
        gethihi(){
           //发布一个消息
           pubsub.publish('hihi',6666)
     }
    }

    }
    
    
    
    
</script>
<style scoped>
 .demo{
     background-color:pink;
 }
</style>