import VueRouter from "vue-router"
import About from '../route/About'
import Home from "../route/Home"
import News from '../route/News'
import Message from "../route/Message"
import Detail from "../route/Detail"
import DetailNews from "../route/DeatilNews"

const router=new VueRouter({
    routes:[
        {   //一级路由
            path:'/about',
            component:About

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

export default router