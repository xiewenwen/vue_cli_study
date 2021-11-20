<template>
<div>
    <!--使用$route对象下的query 查看携带过来的查询的参数内容 -->
  <h2>消息编号：{{$route.query.id}}</h2>
  <h2>消息内容：{{$route.query.name}}</h2>
</div>
</template>
<script>
export default {
    name:'Detail'
}
</script>

<style>

</style>