--MANUKA 7 COMPONENT--
<template>
  <div
    class="pWrapper"
    style="visibility: visible; display: block"
    data-name="myPopupWin"
  >
    <div class="flex">
      <nuxt-link class="pBg close" to="/giyim"></nuxt-link>
      <div
        style="width: 500px; margin: 0 auto; z-index: 9981"
        class="pWin box whiteBg br5"
        id="myPopupWin"
      >
        <router-link to="/giyim"
          ><div v-on:click="giyim" class="pClose close"></div
        ></router-link>
        <div class="pText col col-12">
          <div class="row oh">
            <!--cache-->
            <div class="col col-12 loaderWrapper" id="popup-login">
              <div class="col popupInnerBlock">
                <div class="box col-12 xlarge">
                  Üye giriş bilgilerini giriniz.
                </div>
                <div class="fl col-12">
                  <div class="fl col-12">
                    <ul class="fl col-12" id="popup-login-inputs">
                      <li class="fl col-12">
                        <div class="box col-12 form-control xlarge">
                          <div class="row input-icon tooltipWrapper">
                            <span class="icon icon-mail"></span>
                            <input
                              v-model="email"
                              type="text"
                              placeholder="E-Mail"
                              name="pop-email"
                              id="pop-email"
                              value=""
                              class="col col-12 withHolder loadedPlace personaclick-initialized"
                            />
                            <span
                              class="col ease placeholder"
                              :class="focus"
                              @click="focusActive()"
                              >E-Mail</span
                            >
                            <span
                              v-if="error"
                              class="tooltip btn-danger"
                              style="display: inline"
                              >Giriş bilgileriniz hatalı.</span
                            >
                            <span
                              v-if="success"
                              class="tooltip btn-success"
                              style="display: inline"
                              >Başarıyla giriş yaptınız.</span
                            >
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="box col-12 form-control xlarge tooltipWrapper">
                  <div class="row input-icon tooltipWrapper">
                    <span class="icon icon-pass"></span>
                    <input
                      v-model="password"
                      type="password"
                      placeholder="Şifre"
                      name="pop-password"
                      id="pop-password"
                      value=""
                      class="col col-12 withHolder loadedPlace"
                    />
                    <span
                      class="col ease placeholder"
                      :class="focus"
                      @click="focusActive1()"
                      >Şifre</span
                    >
                  </div>
                </div>
                <div
                  class="box col-12 form-control tooltipWrapper"
                  style="display: none"
                >
                  <div class="row mb input-icon">
                    <img
                      id="pop-code"
                      data-limit="9999"
                      class="secCode"
                      src="/SecCode.php?1509621554748"
                    />
                    <input
                      type="text"
                      id="pop-security"
                      name="pop-security"
                      placeholder="Güvenlik Kodu"
                      class="col col-12 mail required withHolder loadedPlace personaclick-initialized"
                      style="height: 30px"
                    />
                    <span class="col ease placeholder">Güvenlik Kodu</span>
                  </div>
                </div>
                <div @click="giris()" class="box col-12">
                  <div class="row">
                    <nuxt-link
                      @click="girisYap()"
                      to="giris_yapilan"
                      data-prefix="pop-"
                      data-callback="popMemberLoginFn"
                      class="login btn col-12 btn-default btn-big btn-upper btn-radius a-center"
                      id="popup-member-login"
                      >Giriş Yap</nuxt-link
                    >
                  </div>
                </div>
                <div class="col col-12">
                  <div class="row">
                    <a
                      href="/uye-sifre-hatirlat"
                      class="fr form-link info"
                      target="_blank"
                      id="popup-member-forgot-password"
                      >Şifremi Unuttum</a
                    >
                  </div>
                </div>
                <div class="col col-12">
                  <div class="row">
                    <nuxt-link
                      to="/uye_kayit"
                      class="fr form-link"
                      id="popup-member-register"
                      >Üye Ol</nuxt-link
                    >
                  </div>
                </div>
                <div class="row"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      isFocus: false,
      isFocus2: false,
      email: '',
      password: '',
      error: false,
      success: false,
      isAlreadyLogged: false,
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isAlreadyLogged = true
        // this.$router.push('/giris_yapilan') // yönlendiriyor giriş yapılmışsa
      } else {
        this.isAlreadyLogged = false
      }
    })
  },
  computed: {
    giris() {
      if ((this.isAlreadyLogged = true)) {
        this.$router.push('/giris_yapilan') // yönlendiriyor giriş yapılmışsa
      } else {
        this.isAlreadyLogged = false
        this.$router.push('/uye_giris') // yönlendiriyor giriş yapılmışsa
      }
    },

    focus() {
      return this.isFocus ? 'focus' : ''
    },
  },
  mounted() {
    // console.log(this.$store.getters['user/getUser'])
  },
  methods: {
    focusActive() {
      this.isFocus = !this.isFocus
    },
    focusActive1() {
      this.isFocus2 = !this.isFocus2
    },
    ...mapActions({
      register: 'register',
      login: 'login',
      updateUser: 'updateData',
    }),
    girisYap() {
      this.login({ email: this.email, password: this.password })
    },
    // login() {
    //   firebase.auth()
    //     .signInWithEmailAndPassword(this.email, this.password)
    //     .then((res) => {
    //       alert('Giriş başarılı')
    //       this.$store.commit('user/setUser', this.email)
    //       setTimeout(() => {
    //         window.location.href = '/'
    //       }, 1500)

    //       this.error = false
    //       this.success = true
    //     })
    //     .catch((err) => {
    //       alert('Giriş başarısız')
    //       this.error = true
    //       this.success = false
    //     })
    // },
  },
}
</script>

<style scoped>
.tooltip {
  display: none;
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  line-height: 20px;
  padding-left: 10px;
  padding-top: 5px;
  padding-right: 10px;
  padding-bottom: 5px;
  background: #fff;
  box-sizing: border-box;
  margin-bottom: 5px;
  z-index: 999;
}
.btn-success,
.btn-success.passive:hover {
  color: #fff;
  background-color: #000;
}
.btn-danger,
.btn-danger.passive:hover {
  color: #fff;
  background-color: #f33939;
}
</style>
