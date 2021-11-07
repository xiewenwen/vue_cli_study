<template>
<div>
    <input type="checkbox" :checked="dsum===todos.length" /><span>已完成{{dsum}}/全部{{todos.length}}</span>
</div>
  
</template>

<script>
export default {
    name:'MyFooter',
    props:['todos'],
    computed:{
        dsum(){
            let i=0
            this.todos.forEach((todo) => {
                console.log(todo.done)
                if(todo.done) i++
            })
            return i
        },
        dsum2(){
            //最后一次调用的返回值就是reduce的值
            const x=this.todos.reduce((pre,current)=>{
                //返回值作为为下的的pre值
                return pre+(current.done?1:0)                
            },0)
            return x;
        }
    }
    
}
</script>

<style>

</style>