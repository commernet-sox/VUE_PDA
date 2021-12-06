//异步方法
export default {
    async updateLogin(ctx, isLogin) {
        ctx.commit('changeLogin', isLogin)
    },
    async updateToken(ctx,token){
        ctx.commit('changeToken',token)
    }
}