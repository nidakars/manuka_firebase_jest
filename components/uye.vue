<template>
  <div class="col col-12 loaderWrapper" id="page-login">
    <div class="row mb">
      <div class="col col-12">
        <div class="row">
          <div class="col col-12 mb line-bottom pageTitle small-title d-flex">
            <i class="icon-member-default text-custom-pink"></i>
            <div id="fullname">Merhaba {{ mailim }}</div>
          </div>
          <div class="box col-12 p-right p-bottom">
            <div class="box col-4 col-md-6 col-sm-12 p-top p-left">
              <nuxt-link
                class="btn col-12 btn-custom-gray btn-medium btn-upper btn-radius a-center"
                to="#"
              >
                Siparişlerim
              </nuxt-link>
            </div>
            <div class="box col-4 col-md-6 col-sm-12 p-top p-left">
              <nuxt-link
                class="btn col-12 btn-custom-gray btn-medium btn-upper btn-radius a-center"
                to="#"
              >
                Kişisel Bilgilerim
              </nuxt-link>
            </div>
            <div class="box col-4 col-md-6 col-sm-12 p-top p-left">
              <nuxt-link
                class="btn col-12 btn-custom-gray btn-medium btn-upper btn-radius a-center"
                to="#"
              >
                Favorilerim
              </nuxt-link>
            </div>
            <div class="box col-4 col-md-6 col-sm-12 p-top p-left">
              <a
                href="#"
                class="btn col-12 btn-custom-gray btn-medium btn-upper btn-radius a-center"
              >
                Hediye Çeklerim
              </a>
            </div>
            <div class="box col-4 col-md-6 col-sm-12 p-top p-left">
              <a
                href="#"
                class="btn col-12 btn-custom-gray btn-medium btn-upper btn-radius a-center"
              >
                Puanlarım
              </a>
            </div>
            <div class="box col-4 col-md-6 col-sm-12 p-top p-left">
              <a
                href="#"
                class="btn col-12 btn-custom-gray btn-medium btn-upper btn-radius a-center"
              >
                Stok Alarm Listem
              </a>
            </div>
            <div class="box col-4 col-md-6 col-sm-12 p-top p-left">
              <a
                href="#"
                class="btn col-12 btn-custom-gray btn-medium btn-upper btn-radius a-center"
              >
                Havale Bildirimi
              </a>
            </div>
            <div class="box col-4 col-md-6 col-sm-12 p-top p-left">
              <a
                href="#"
                class="btn col-12 btn-custom-gray btn-medium btn-upper btn-radius a-center"
              >
                Şifremi Değiştir
              </a>
            </div>
            <div
              @click="logout, removeBasketAll()"
              class="box col-4 col-md-6 col-sm-12 p-top p-left"
            >
              <a
                class="logout btn col-12 btn-custom-gray btn-medium btn-upper btn-radius a-center"
                href="/"
              >
                Çıkış Yap
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import user from '@/store/user'
import firebase from 'firebase'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      isLoggedIn: false,
      currentUser: false,
      mailim: '',
      uid: null,
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true
      } else {
        this.isLoggedIn = false
      }
    })
  },
  methods: {
    ...mapActions({
      logout: 'user/logout',
    }),
    removeBasketAll() {
      this.$store.dispatch('basket/removeBasketAll')
    },
    getUserdata() {
      // Kullanıcı verilerini çekiyoruz.
      if (this.isLoggedIn) {
        // kullanici diye bir variable tanımladık. Email ile ismi çektik.
        var kullanici = firebase.auth().currentUser
        this.mailim = kullanici.email
        this.uid = kullanici.uid
      }
    },
  },
}
</script>
