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
            // console.log(id);
            // console.log(todo.done);     
            this.checkTodo(id);       
        }
    }
    

}
</script>

<style>

</style>