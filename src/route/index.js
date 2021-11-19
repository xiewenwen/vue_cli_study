import VueRouter from "vue-router"
import About from '../route/About'
import Home from "../route/Home"
const router=new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home
        }
        
    ]
})

export default router