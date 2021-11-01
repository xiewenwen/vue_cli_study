//mixin文件下用于定义一些公共的方法或者数据
//通过模块的export暴露出去，在需要用的地方进行import
export const a={
    methods:{
        show(){
            alert(this.name);
        }
    }
}
//不仅仅是方法，data数据也可以在里面定义
export const b={
    methods:{
        show2(){
            alert(this.home);
        }
    },
    data(){
        return{
            age:12
        }
    }
}