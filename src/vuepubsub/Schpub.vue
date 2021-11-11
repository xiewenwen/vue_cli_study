<template>
    <div class="demo">
        <h2>{{name}}</h2>
        <h2>{{home}}</h2>
    </div>
</template>
<script>
import pubsub from 'pubsub-js'
    export default{
        name:'Schpub',
        data(){
        return{
            name:'ashin',
            home:'zg'
        }        
    }, 
    mounted(){
        //订阅消息 当有消息发布的时候会接受到
        //每个订阅都会有个id，销毁时候找id
       this.pubid= pubsub.subscribe('hihi',function () {
            console.log('i get it')
            
        })
    },
    beforeDestroy(){
        //销毁订阅
        pubsub.unsubscribe(this.pubid)
    }
    }
</script>
<style scoped>

</style>