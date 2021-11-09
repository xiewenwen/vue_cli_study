<template>
    <div class="demo">
        <h2>{{name}}</h2>
        <h2>{{home}}</h2>
        <!-- 插件增强调用，x和y为在plugins下定义的公共方法 -->
        <!-- <button>{{x}}</button><button>{{y}}</button> -->
        <button @click="sendstuname">send stuname</button>
        <button @click="unbind">解绑组件事件</button>
        <button @click="death">销毁stu这个组件</button>
        <button @click="testvue">test my Vue</button>
        <button @click="offtestvue">销毁自定义vue事件</button>
        <button @click="showhi">showhi</button>
        

        
    </div>
</template>
<script>
    export default{
        name:'Student',
        data(){
        return{
            name:'ashin',
            home:'zg'
        }        
    },
    methods:{
        sendstuname(){
            //触发app中绑定在该组件的自定义事件，并且传递参数
            this.$emit('testeve',this.name)
        },
        unbind(){
            //解绑一个自定义事件
            this.$off('testeve')
            //所有的自定义事件 全部
            // this.$off()
        },
        death(){
            //销毁这个vc的实例组件 所有的自定义事件都会消失
            this.$destroy()
        },
        testvue(){
            //这边绑定事件对应的是app组件下v-on:mytest="xxxx",v-on后面的名字，而不是传递过来的方法
            this.$emit('mytest',this.home)
        },
        offtestvue(){
            this.$off('mytest')
        },
        //当触发该方法的时候 去找原型上的已经绑定好的自定义事件，饭后emit触发，并且传递参数
        //这个时候school组件下会触发并且收到参数
        showhi(){
            console.log('coming')
            this.$bus.$emit('hello',33333)
        }
        
    }
    }
</script>
<style scoped>
 .demo{
     background-color:pink;
 }
</style>