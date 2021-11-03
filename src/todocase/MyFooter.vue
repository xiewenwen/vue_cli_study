<template>
<div>
    <input type="checkbox"/><span>已完成{{dsum}}/全部{{todos.length}}</span>
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
        }
    }
    
}
</script>

<style>

</style>