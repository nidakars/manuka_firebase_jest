export const mutations = {
    setProducts(state, param) {
        state.products = param;
    },
    setProduct(state, product) {
        state.product = product;
    },
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
    async logout({}) {
        try {
            await firebase
                .auth()
                .signOut()
                .then(() => {
                    //this.$router.push("/login/signin");
                    location.reload();
                });
        } catch (err) {
            console.log(err);
        }
    },
    register({}, payload) {
        firebase
            .auth()
            .createUserWithEmailAndPassword(payload.email, payload.password)
            .then(
                userCredential => {
                    // Kayıt işlemi sadece email ve şifre ile oluşturuluyor, baştan isim ve numara ekleyemiyoruz.
                    alert("Hesap " + payload.email + " başarıyla oluşturuldu");
                    // Email ve şifre ile kullanıcı oluşturduktan sonra hesabın isim ve numarasını güncelliyoruz.
                    var kullanici = firebase.auth().currentUser;
                    alert("Kullanıcıya giriş yapıldı");
                    kullanici.updateProfile({
                        displayName: payload.name,
                        phoneNumber: payload.phone
                    });
                    // alert("İsim " + payload.name + " güncellendi");
                    // alert("Telefon " + payload.phone + " güncellendi");
                    var newUser = userCredential.user
                    alert("oluşturulan kullanıcı idsi: " + newUser.uid)

                    var ref = realDb.ref("usersData/" + newUser.uid) //.set(userData)
                    var uData = {
                        adresses: null,



                        id: newUser.uid,


                        ordersId: null
                    }
                    alert("Kullanıcı verisi Realtime'a kaydedildi")
                    ref.set(uData);
                    //payload.$router.push("/"); 
                    location.reload();
                },
                err => {
                    alert(err.message);
                }
            ).then(

            );
    },
    login({}, payload) {
        console.log("login çalıştı.")
        console.log(payload.email)
        try {
            firebase
                .auth()
                .signInWithEmailAndPassword(payload.email, payload.password)
                .then(
                    user => {
                        alert(payload.email + " ile giriş yaptınız");
                        //this.$router.push("/");
                        location.reload();
                    },
                    err => {
                        alert(err.message);
                    }
                );
        } catch (error) {
            console.log(error)
        }
    },
    updateUser({}, payload) {},
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
    removeBasketAll({ state, commit }) {
        for (let i = 0; i < state.items.length; i++) {
            commit('removeBasketItem', i);
        }
    }
};
//import { realDb } from '~/plugins/firebase.js';
export const state = () => ({
    isInitialized: false,
    products: [],
    product: null,
    items: [],
    test: "Bu bir test mesajıdır."
});

// export const state = () => ({
//     isInitialized: false,
//     user: null
// });
// export const mutations = {
//     setUser(state, param) {
//         state.user = param;
//     }
// };
// export const actions = {};
// export const getters = {
//     getUser(state) {
//         return state.user;
//     }
// };
/////////////////////////////////////////////////////////////

import firebase from "firebase";
import { realDb, auth } from '../plugins/firebase.js';

export const getters = {
    getBasketItems(state) {
        return state.items;
    },
    getProducts: (state) => () => {
        return state.products;
    },
    getProduct: (state) => (id) => {
        return state.products.find(product => product.id == id);
    },
    getTest: (state) => () => {
        return state.test
    },
    isLogged: () => () => {
        firebase.auth().onAuthStateChanged(user => {
            return user ? true : false;
        });
    },
    getUserdata: () => () => {
        // Kullanıcı verilerini çekiyoruz.
        if (this.isLoggedIn) {
            // kullanici diye bir variable tanımladık. Email ile ismi çektik.
            var kullanici = firebase.auth().currentUser;
            return {
                email: kullanici.email,
                name: kullanici.displayName,
                uid: kullanici.uid,
            }
        }
    }
}