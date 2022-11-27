import { createStore } from 'vuex'
import global_ from '@/components/GLOBAL.vue'
const store = createStore({
    //创建一个loginUser.js，创建他的state/mutations/actions

    //需要维护的状态
    state: {
        loading: false,
        user: {},
    },
    //计算属性
    getters: {
        status(state) {
            if (state.loading) {
                return 'loading'
            } else if (state.user) {
                return 'login'
            } else {
                return 'unlogin'
            }
        },
        user(state) {
            return state.user
        }
    },

    //改变loading和user状态 
    mutations: {
        setLoading(state, msg) {
            state.loading = msg
        },
        setUser(state, msg) {
            state.user = msg
        }
    },

    actions: {
        isNotEmpty(ctx) {
            console.log(Object.keys(ctx.state.user).length !== 0)
            return Object.keys(ctx.state.user).length !== 0
        },
        //登陆方法ctx相当于store
        async isLogin(ctx) {
            if (await ctx.dispatch('isNotEmpty') === true) {
                return true
            }
            else {
                ctx.commit("setLoading", true)
                var result: any = {};
                try {
                    result = await global_.$axios.post('user/info')
                } catch {
                    ctx.commit("setLoading", false)
                    return false
                }
                console.log(result.data)
                ctx.commit('setUser', result.data.data)
                ctx.commit('setLoading', false)
                return true
            }
        },
        async logout(ctx) {
            ctx.commit('setLoading', false)
            try {
                await global_.$axios.post('user/logout')
            }
            catch { }
            ctx.commit('setUser', {});
        }
    },

})
export default store;