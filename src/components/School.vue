<template>
    <div class="demo">
        <h2>{{name}}</h2>
        <h2>{{home}}</h2>
    </div>
</template>
<script>
//方式一
//   const school=Vue.extend({
//     data(){
//         return{
//             name:'ashin',
//             home:'zg'
//         }        
//     }
// })
// export default school
//////////////////////////
//方式二：一般都是这样写，默认暴露，不用extend vue  需要指定组件名称 一般是和该文件名称一致
    export default{
        name:'School',
        data(){
        return{
            name:'ashin',
            home:'zg'
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