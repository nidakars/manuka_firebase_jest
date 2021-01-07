import { realDb } from '~/plugins/firebase.js';
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
    }
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
            //Düzeltme 5
            realDb.ref('/products').once('value').then((snapshot) => {

                //console.log(snapshot.val());
                let arr = []
                if (snapshot.val() != null) {
                    //Map tipinde bir değişkeni arraye dönüştürmek için kullandığımız kod:
                    arr = Object.entries(snapshot.val()).map(e => Object.assign(e[1], { key: e[0] }))
                }
                commit('setProducts', arr)

            });
        })
    },
};
export const getters = {
    getProducts: (state) => () => {
        return state.products;
    },
    getProduct: (state) => (id) => {
        return state.products.find(product=>product.id==id);
    }

};