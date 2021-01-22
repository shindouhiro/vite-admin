import { createStore } from 'vuex'
export default createStore({
    state: {
        name: 'zhagnsan',
        isCollapse: false
    },
    mutations: {
        CONTROL_MENU: (state) => {
            state.isCollapse = !state.isCollapse
        },
    }
})
