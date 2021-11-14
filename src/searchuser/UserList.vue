<template>
  <div>
      <ul>
          <li><img/></li>
      </ul>
      <button @click="getinfo">get</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'UserList',
    data(){
        return{
            users:[1,2,3,4]||[],
            my:[]
        }        
    },
    methods:{
        getinfo(){
            pubsub.subscribe('users',function(name,value){
            // console.log(this.all.users)
            console(this.users)
            console.log('我收到了'+JSON.stringify(value))
        })
        }
    },
    mounted(){
        pubsub.subscribe('users',(name,value)=>{
            this.my=value;
            console.log('mymymy'+this.my)
            console.log('我收到了'+JSON.stringify(value))
        })
    }
    
}
</script>

<style>

</style>