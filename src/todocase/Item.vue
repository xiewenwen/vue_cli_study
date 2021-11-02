<template>
<li>
    <label><input type="checkbox" :checked="todo.done"/>{{todo.title}}</label>
    <button>delete</button>
</li>

</template>

<script>
export default {
    name:'Item',
    //接收list下的对象
    props:['todo'],
    methods:{
        deltodo(){
            
        }
    }

}
</script>

<style>

</style>