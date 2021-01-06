export const state = () => ({
    isInitialized: false,
    products: [],
    product: null
});
export const mutations = {
    setProducts(state, param) {
        state.products = param;
    },
    setProduct(state, product) {
        state.product = product;
    },
};
export const actions = {
    // initData({ state, commit }, ) {
    //     if (state.isInitialized === false) {
    //         commit("setProducts", data);
    //         state.isInitialized = true;
    //     }
    // },
    SetProduct({ state, commit }, id) {
        for (let i = 0; i < state.products.length; i++) {
            if (state.products[i].id === id) {
                commit("setProduct", state.products[i]);
            }
        }
    },
    fetchProducts({ commit }) {
        return new Promise((resolve, reject) => {

            firebase.database().ref('/products').once('value').then((snapshot) => {
                console.log(snapshot.val());
                commit('setProducts', snapshot.val())
            });
        })
    },
};
export const getters = {
    getProducts(state) {
        return state.products;
    },
    getProduct(state) {
        return state.product;
    }

};