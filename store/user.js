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
import { realDb, auth } from '~/plugins/firebase.js';
export const state = () => ({
    test: "Bu bir test mesajıdır."
})
export const getters = {
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
export const actions = {
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
                    alert("İsim " + payload.name + " güncellendi");
                    alert("Telefon " + payload.phone + " güncellendi");
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
}
export const mutations = {}