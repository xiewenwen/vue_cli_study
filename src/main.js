//脚手架默认找min.js
import Vue from 'vue'
//引入残缺版的vue版本，之前vue.js是完整版
import App from './App.vue'

import plugins from './plugins'

Vue.config.productionTip = false

//引入残缺版本的vue，vue.runtime.xxx.js没有模版解析器，所以不能使用template配置项
//需要使用render函数接收到createElement函数去指定具体内容

//启动vue的时候，安装自定义的插件
//use插件的使用
//也可以带参数
Vue.use(plugins,12,13);

// const Demo=Vue.extend({})
// const d=new Demo()

// Vue.prototype.x=d

new Vue({
  render: h => h(App),
  // 安装全局事件总线 在vm创建前
  beforeCreate(){
    Vue.prototype.$bus=this
  },
}).$mount('#app')
