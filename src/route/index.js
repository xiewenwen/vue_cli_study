import VueRouter from "vue-router"
import About from '../route/About'
import Home from "../route/Home"
import News from '../route/News'
import Message from "../route/Message"
import Detail from "../route/Detail"
import DetailNews from "../route/DeatilNews"

const router=new VueRouter({
    //路由器工作模式 两种history和hash
    //hash：默认的工作模式  路径会带# 兼容性好
    //history：路径不带# 兼容性略差 点击路由不会有问题 如果部署上线的话 但是在当前路由下刷新路由的话 会404找不到路径
    //解决以上问题 要靠后端 或者nginx
    mode:'history',
    routes:[
        {   //一级路由
            path:'/about',
            name:'guanyu',
            component:About,
            //往路由下塞参数 meta绑定
            meta:{
                isAuth:true
            }

        },
        {
            path:'/home',
            component:Home,
            //二级路由
            children:[
                {
                    path:'news',
                    component:News,
                    children:[
                        {
                            name:'DetailNews',
                            //当路由接收params参数的时候，不能使用path跳转，需要指定name
                            //params参数需要在路径中用占位符接收参数
                            path:'detailNews/:id/:name',
                            component:DetailNews,
                            //第一种，对象的形式
                            // props:{

                            // }
                            //第二种 布尔值 只能接受params 不能query
                            // props:true
                            //第三种 函数方式（接收一个路由对象） 当接受参数为query的时候 路由用query返回
                            props($route){
                                return{
                                    id:$route.params.id,
                                    name:$route.params.name
                                }
                            }
                        }
                    ]
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            path:'detail',
                            component:Detail
                        }
                    ]
                }
            ]
        }
        
    ]
})
//第一种：全局前置路由守卫（权限） 每次切换路由前被调用 初始化的时候被调用
router.beforeEach((to,from,next)=>{
    console.log('前置路由守卫')
    const flag=true
    //当路由到new和message这两个组件下的时候 会被拦截
    if(to.path==='/home/news'||to.path==='/home/message'){
        if(flag){
            console.log(flag)
        }      
    }else{
        //next控制路由可以切换到点击的组件下
        next()
    }

    //优化前置路由 使用路由上的meta参数 进行全局的路由判断是否可跳转
    // if(to.meta.isAuth){

    // }else{
    //     next()
    // }

})
//第一种：全局后置路由守卫
//初始化和每次路由切换后执行
router.afterEach((to,from)=>{
    console.log('后置路由守卫')
    console.log(to)
    console.log(from)

})

//第二种：独享路由守卫
//第三种：组件内路由守卫


export default router