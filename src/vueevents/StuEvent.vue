<template>
    <div class="demo">
        <h2>{{name}}</h2>
        <h2>{{home}}</h2>
        <!-- 插件增强调用，x和y为在plugins下定义的公共方法 -->
        <!-- <button>{{x}}</button><button>{{y}}</button> -->
        <button @click="sendstuname">send stuname</button>
        <button @click="unbind">解绑组件事件</button>
        <button @click="death">销毁stu这个组件</button>

        
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
        }
    }
    }
</script>
<style scoped>
 .demo{
     background-color:pink;
 }
</style>