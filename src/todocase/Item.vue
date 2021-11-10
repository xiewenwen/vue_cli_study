<template>
<li>
    <label><input ref="todocheck" type="checkbox" :checked="todo.done" @click="handleChenck(todo.id)"/>{{todo.title}}</label>
    <button>delete</button>
</li>

</template>

<script>
export default {
    name:'Item',
    //接收list下的对象
    props:['todo','checkTodo'],
    methods:{
        // deltodo(){

        // }
        handleChenck(id){
            this.checkTodo(id)
            //谁处理 谁调用自定义事件
            //需要提供item具体的id 进行勾选的操作
            // this.$bus.$emit('checkTodo',id)      
        }
    }
    

}
</script>

<style>

</style>