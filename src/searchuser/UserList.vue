<template>
  <div>
      <ul>
          <li v-for="user in users" :key="user.login"><img :src="user.avatar_url"/></li>
      </ul>
      
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'UserList',
    data(){
        return{
            users:[],
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
            this.users=value;
            console.log('mymymy'+this.my)
            // console.log('我收到了'+JSON.stringify(value))
        })
    }
    
}
</script>

<style>

</style>