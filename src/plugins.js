import Vue from "vue";

const obj={
    //插件的安装，vue会帮你执行安装
    //一定要在install下写
    //install可接收参数
    install(){
        //console.log('use install',z,m);
        //插件中定义mixin的公共函数
        Vue.mixin({
            data(){
                return {
                    x:100,
                    y:200
                }
            }
        })
    }
}

export default obj