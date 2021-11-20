import VueRouter from "vue-router"
import About from '../route/About'
import Home from "../route/Home"
import News from '../route/News'
import Message from "../route/Message"

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
                    component:News
                },
                {
                    path:'message',
                    component:Message
                }
            ]
        }
        
    ]
})

export default router