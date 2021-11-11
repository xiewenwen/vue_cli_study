<template>
  <div>
      <button @click="show=!show">play</button>
      <h1 v-show="show" class="go">ashin</h1>
      <!-- transition自动帮你渲染动画 用标签包裹 只用关注展示的参数就可 -->
      <transition appear>
          <h1 v-show="show" class="go">ashin</h1>
      </transition>
  </div>
</template>

<script>
export default {
    name:'Catton',
    data(){
        return{
            show:true
        }
    }

}
</script>

<style>
h1{
    background-color: rosybrown;
}
.come{
    animation: call 1s; 
}
.go{
    animation: call 1s reverse;
}
/* vue规定来的动画 */
.v-enter-active{
    animation: call 1s; 
}
/* vue规定去的动画 */
.v-leave-active{
    animation: call 1s reverse;
}
/* 定义动画 */
@keyframes call{
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateX(0px);
    }
}
/* 进入的起点 */
.hello-enter{
    transform: translateX(-100%);
}
/* 进入的终点 */
.hello-enter-to{
    transform: translateX(0px);
}
/* 离开的起点 */
.hello-leave{
    transform: translateX(0px);
}
/* 离开的终点 */
.hello-leave-to{
    transform: translateX(100%);
}

</style>