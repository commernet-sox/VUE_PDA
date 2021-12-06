//同步方法
export default {
    //修改登录状态
    changeLogin(state,isLogin){
        state.isLogin=isLogin
    },
    //修改token状态
    changeToken(state,token){
        state.token=token
    }
}