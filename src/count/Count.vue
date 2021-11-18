<template>
  <div>
      <h1>the num is:{{$store.state.sum}}</h1>
      <h1>the num *10 is: {{$store.getters.bigsum}}
      </h1>
      <h2><span class="colo">person的总人数是：{{persons.length}}</span></h2>
      <h2>{{$store.state.band}},{{$store.state.name}}</h2>
      <h2>{{band}},{{name}}</h2>
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
//引入生成函数方法
import { mapGetters, mapState } from "vuex"

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
            this.$store.dispatch('jiaodd',this.n)

        },
        incrementwait(){
            this.$store.dispatch('jiawait',this.n)

        }
        //...mapMutations()

    },
    mounted(){
        console.log(this)
    },
    computed:{
        // band(){
        //     return this.$store.state.band
        // },
        // name(){
        //     return this.$store.state.name
        // },
        //等同于上面的函数，es6语法，结构赋值，拆开每个对象作为一个属性(对象写法)
        ...mapState({band:'band',name:'name',persons:'persons'}),
        //数组写法，生成名和读取名一致才可以用这种
        // ...mapState(['band','name'])

        //从getters中读取数据，生成计算属性
        ...mapGetters(['bigsum'])

    }

}
</script>

<style lang="css">
.colo{
    background-color: blue;
}

</style>