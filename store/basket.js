export const state = () => ({
    items: [],
});
export const mutations = {
    addBasketItem(state, item) {
        state.items.push(item);
    },
    removeBasketItem(state, index) {
        state.items.splice(index, 1);
    },
    removeBasketAll(state, index) {
        state.items[index].count++;
    },
    increase(state, index) {
        state.items[index].count++;
    },
    decrease(state, index) {
        state.items[index].count--;
    }
};
export const actions = {
    addBasket({ state, commit }, data) {
        for (let i = 0; i < state.items.length; i++) {
            if (state.items[i].product.id === data.product.id && state.items[i].size === data.size) {
                commit('increase', i);
                return true;
            }
        }
        commit('addBasketItem', data);
    },
    increaseBasketItem({ state, commit }, id) {
        for (let i = 0; i < state.items.length; i++) {
            if (state.items[i].id === id) {
                commit('increase', i);
                return false;
            }
        }
    },
    decreaseBasketItem({ state, commit }, id) {
        for (let i = 0; i < state.items.length; i++) {
            if (state.items[i].id === id) {
                if (state.items[i].count < 2) {
                    commit('removeBasketItem', i);
                } else {
                    commit('decrease', i);
                }
                return false;
            }
        }
    },
    removeBasketItem({ state, commit }, id) {
        for (let i = 0; i < state.items.length; i++) {
            if (state.items[i].id === id) {
                commit('removeBasketItem', i);
                return false;
            }
        }
    },
    removeBasketAll({ state, commit }, id) {
        for (let i = 0; i < state.items.length; i++) {

            commit('removeBasketItem', i);
            return false;

        }
    }
};
export const getters = {
    getBasketItems(state) {
        return state.items;
    }
};