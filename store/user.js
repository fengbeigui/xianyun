//用户管理
export const state = () =>({
    //采用接口返回的数据结构
        userInfo:{}
})
//存放的方法，同步修改state的方法
export const mutations = {
    //保存用户信息到state
    //mutations下的值必须是一个函数，函数中会有一个固定的参数state;第二个参数数用户调用方法的时候传进来的
    //非常类似于$emit
    setUserInfo(state,data){
        state.userInfo =  data;
    }
    
};
//存放的是异步修改state的方法
export const actions = {};


