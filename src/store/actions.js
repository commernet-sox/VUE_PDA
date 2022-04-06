//异步方法
export default {
    async updateLogin(ctx, isLogin) {
        ctx.commit('changeLogin', isLogin)
    },
    async updateToken(ctx,token){
        ctx.commit('changeToken',token)
    },
    async updateLoading(ctx,loading){
        ctx.commit('changeLoading',loading)
    },
    async updateOrganization(ctx,organization){
        ctx.commit('changeOrganization',organization)
    },
    async updateOrganizationText(ctx,organization){
        ctx.commit('changeOrganizationText',organization)
    }
}