<template>
  <div>
      <h2>the num of person is</h2>
      <input v-model="namei" type="text"  @keyup.enter="addp"/>
      <ul>
         <li v-for="p in persons" :key="p.id">{{p.name}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'Person',
    data(){
        return {
            namei:''
        }
    },
    methods:{
        addp(){
            this.$store.dispatch("addp",this.namei)
        }
    },
    computed:{
        persons(){
           return  this.$store.state.persons
        }
    }

}
</script>

<style>

</style>