<template>
  <div>
    <h2>search username</h2>
    <input name="search" v-model="word"/>
    <button @click="searchname">
      search
    </button>
  </div>
</template>

<script>
import axios from "axios"
import pubsub from 'pubsub-js'

export default {
  name: "Search",
  data() {
    return {
      word:""
    }
  },
  methods: {
    searchname() {
      console.log("发送请求");
      
      axios.get("https://api.github.com/search/users?q="+this.word).then(
        (response) => {
          console.log("success", response.data);
          pubsub.publish('users',response.data.items)
        },
        (error) => {
          console.log("fail", error.data);
        }
      );
    },
  },
};
</script>

<style>
</style>