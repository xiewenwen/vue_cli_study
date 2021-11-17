//文件用于创建vuex中的store 配置文件
import Vue from 'vue'
import Vuex from 'vuex'

//引入vuex
//这一步需要在使用store前引入
//如果放在app下引入，就无法在模块倒入前找到
Vue.use(Vuex)

//用于响应组件中的动作
const actions={
    //b是传递的值
    jia(context,value){
        //提交给mutations
        context.commit('JIA',value)
    },
    jian(context,value){
        //提交给mutations
        console.log('调用jian')
        context.commit('JIAN',value)
    },
    //在这边处理业务逻辑，不要放在mutations下处理
    jiaodd(context,value){
        if(context.state.sum%2){
            context.commit('JIAODD',value)
        }      
    },
    jiawait(context,value){
        setInterval(() => {
            context.commit('JIAWAIT',value)
        }, 500)
       
    }
    
}

//用于操作数据state
const mutations={
    //在mutations可直接修改state的下的数据
    JIA(state,value){
        state.sum+=value
    },
    JIAN(state,value){
        state.sum-=value
    },
    JIAODD(state,value){
        state.sum+=value
    },
    JIAWAIT(state,value){
        state.sum+=value
    }

}

//用于存储数据 准备state
const state={
    sum:0,
    band:'mayday',
    name:'ashin'
}
//类似vue中的计算属性，统一处理state中的值
const getters={
    bigsum(state){
        //需要返回值
        return state.sum*10
    }
}


const store=new Vuex.Store({
    actions:actions,
    mutations:mutations,
    state:state,
    getters:getters
})
//暴露store
export default store


