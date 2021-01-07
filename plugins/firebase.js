import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'

if (!firebase.apps.length) {
    const config = {
        apiKey: "AIzaSyBDl0DImA2BlNJndznBci_rmIzYa8VhEEA",
        authDomain: "manuka-nuxt.firebaseapp.com",
        databaseURL: "https://manuka-nuxt-default-rtdb.firebaseio.com",
        projectId: "manuka-nuxt",
        storageBucket: "manuka-nuxt.appspot.com",
        messagingSenderId: "848001636087",
        appId: "1:848001636087:web:234e4fe76dbdb91876e5f2"
    }
    firebase.initializeApp(config)
    firebase.firestore().settings({ timestampsInSnapshots: true })
}
const fireDb = firebase.firestore()
const realDb = firebase.database()
const auth = firebase.auth()
export { fireDb, realDb,auth }