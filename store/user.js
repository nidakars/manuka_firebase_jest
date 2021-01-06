export const state = () => ({
    isInitialized: false,
    user: null
});
export const mutations = {
    setUser(state, param) {
        state.user = param;
    }
};
export const actions = {};
export const getters = {
    getUser(state) {
        return state.user;
    }
};