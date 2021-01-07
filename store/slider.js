import { realDb } from '~/plugins/firebase.js';
export const state = () => ({
    isInitialized: false,
    pics: [],
    pic: null
});
export const mutations = {
    setSliders(state, param) {
        state.pics = param;
    },
    setSlider(state, pic) {
        state.pic = pic;
    }
};
export const getters = {
    getSliders: (state) => () => {
        return state.pics;
    },
    getSlider: (state) => (id) => {
        return state.pics.find(pic => pic.id == id);
    }

};
export const actions = {
    SetSlider({ state, commit }, id) {
        for (let i = 0; i < state.pics.length; i++) {
            if (state.pics[i].id === id) {
                commit("setSlider", state.pics[i]);
            }
        }
    },
    fetchSliders({ commit }) {
        return new Promise((resolve, reject) => {
            //Düzeltme 5
            realDb.ref('/slider').once('value').then((snapshot) => {

                //console.log(snapshot.val());
                let arr = []
                if (snapshot.val() != null) {
                    //Map tipinde bir değişkeni arraye dönüştürmek için kullandığımız kod:
                    arr = Object.entries(snapshot.val()).map(e => Object.assign(e[1], { key: e[0] }))
                }
                commit('setSliders', arr)

            });
        })
    },
};