import VueRouter from "vue-router"
import About from '../route/About'
import Home from "../route/Home"
import News from '../route/News'
import Message from "../route/Message"
import Detail from "../route/Detail"

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
                            path:'detail',
                            component:Detail
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