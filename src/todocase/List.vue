<template>
    <ul>
        <Item v-for="i in todos" :key="i.id" :todo='i' :checkTodo="checkTodo"></Item> 
        
    </ul> 
</template>

<script>
import Item from '../todocase/Item.vue';
export default {
    name:'List',
    components:{Item},
    // data(){
    //     return {
    //         todos:[{'id':'001','title':'eat','done':true},
    //         {'id':'002','title':'sleep','done':true},
    //         {'id':'003','title':'drink','done':false}]
    //     }
    // },
    props:['todos','checkTodo']

}
</script>

<style>

</style>