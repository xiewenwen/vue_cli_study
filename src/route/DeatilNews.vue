<template>
  <div>
    <!--使用$route对象下的params 查看携带过来的查询的参数内容 -->
  <h2>消息编号：{{$route.params.id}}</h2>
  <h2>消息内容：{{$route.params.name}}</h2>
  <!-- props参数接收形式 -->
  <h2>消息编号：{{id}}</h2>
  <h2>消息内容：{{name}}</h2>
</div>
</template>

<script>
export default {
    name:"DetailNews",
    props:['id','name']
}
</script>

<style>

</style>