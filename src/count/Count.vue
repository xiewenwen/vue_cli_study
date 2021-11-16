<template>
  <div>
      <h1>the num is:{{$store.state.sum}}</h1>
      <select v-model="n">
          <option :value="1">1</option>
          <option :value="2">2</option>
          <option :value="3">3</option>
      </select>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementodd">当前求和为奇数再加</button>
      <button @click="incrementwait">等等再加</button>
  </div>
</template>

<script>
export default {
    name:'Count',
    data(){
        return{
            // sum:0,
            n:1
        }
    },
    methods:{
        increment(){
            //越过调用，直接转发到mutations
            this.$store.commit('JIA',this.n)
            //普通调用 转发到actions下，然后在actions下commit到mutations，进行调用
            //this.$store.dispatch("jia",this.n)
            // this.sum+=this.n
        },
        decrement(){
            // this.sum-=this.n
            console.log('调用jian')
            this.$store.dispatch("jian",this.n)
        },
        incrementodd(){
            // if(this.sum%2){
            //     this.sum+=this.n
            // }

        },
        incrementwait(){
            setInterval(() => {
                // this.sum+=this.n
            }, 500);

        }

    },
    mounted(){
        console.log(this)
    }

}
</script>

<style lang="css">

</style>