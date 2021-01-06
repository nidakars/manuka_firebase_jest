--MANUKA 8 COMPONENT--
<template>
  <div id="content" class="row">
    <div class="inner">
      <div id="mainColumn" class="fl col-12">
        <!--cache-->
        <div class="col col-12" id="page-login">
          <div class="row mb">
            <div class="col col-12">
              <div class="row">
                <div class="fl col-12 a-center pageTitle d-flex b-bottom">
                  <i class="icon-member-default text-custom-pink"></i>
                  Üye Kayıt/Düzenleme
                </div>
              </div>
            </div>
            <form action="" method="post" onsubmit="return userLogin(this)">
              <div class="box col-12 p-left" id="uye-kayit-form">
                <div class="row">
                  <div class="col col-12"></div>
                  <form
                    name="memberForm"
                    id="memberForm"
                    class="fl col-12"
                    method="post"
                    action="#"
                  >
                    <div class="col col-6 col-sm-12 p-right">
                      <div class="fl col-12 text-title text-semibold d-flex mt">
                        <i class="icon-member-default text-custom-pink"></i>
                        Üyelik Bilgileri
                      </div>
                      <div
                        class="box col-12 p-bottom form-control large"
                        id="alan_ad"
                      >
                        <div class="row input-icon tooltipWrapper">
                          <input
                            @focus="ad = true"
                            @blur="ad = false"
                            type="text"
                            placeholder="Ad"
                            name="name"
                            id="name"
                            class="col col-12 required withHolder loadedPlace personaclick-initialized"
                          />
                          <span
                            :class="{ focus: ad }"
                            class="col ease placeholder"
                            >Ad</span
                          >
                        </div>
                      </div>
                      <div
                        class="box col-12 p-bottom form-control large"
                        id="alan_soyad"
                      >
                        <div class="row input-icon tooltipWrapper">
                          <input
                            type="text"
                            placeholder="Soyad"
                            name="surname"
                            id="surname"
                            class="col col-12 required withHolder loadedPlace personaclick-initialized"
                          />
                          <span class="col ease placeholder">Soyad</span>
                        </div>
                      </div>
                      <div
                        class="box col-12 p-bottom form-control large"
                        id="alan_firma"
                      >
                        <div class="row input-icon tooltipWrapper">
                          <input
                            type="text"
                            placeholder="Firma"
                            name="company"
                            id="company"
                            class="col col-12 withHolder loadedPlace"
                          />
                          <span class="col ease placeholder">Firma</span>
                        </div>
                      </div>
                      <div class="fl col-12 text-title text-semibold d-flex mt">
                        <i class="icon-phone text-custom-pink"></i>
                        İletişim Bilgileri
                      </div>
                      <div
                        class="box col-12 p-bottom form-control large"
                        id="alan_ceptel"
                      >
                        <div class="row input-icon tooltipWrapper phone-masked">
                          <div class="icon myFlag">
                            <div class="myFlagIcon">
                              <i style="background-position: 0px -1606px"></i>
                            </div>
                            <div
                              class="box box-border flagList"
                              style="display: none"
                            >
                              <div
                                class="box col-12 p-left p-right p-top flag-search-input-wrapper"
                              >
                                <input type="text" class="col-12 searchFlag" />
                              </div>
                              <ul class="fl col-12 flag-list-ul">
                                <li
                                  data-top="-44"
                                  data-code="1"
                                  data-pattern="(___) ___ __ __"
                                  data-key="US"
                                  class="box col-12 ease flag-list-item"
                                >
                                  <i
                                    class="flag"
                                    style="background-position: 0px -44px"
                                  ></i
                                  ><span class="country">ABD</span
                                  ><span class="code">1</span>
                                </li>
                                <li
                                  data-top="-2509"
                                  data-code="49"
                                  data-pattern=""
                                  data-key="DE"
                                  class="box col-12 ease flag-list-item"
                                >
                                  <i
                                    class="flag"
                                    style="background-position: 0px -2509px"
                                  ></i
                                  ><span class="country">Almanya</span
                                  ><span class="code">49</span>
                                </li>
                                <li
                                  data-top="-1716"
                                  data-code="61"
                                  data-pattern=""
                                  data-key="AU"
                                  class="box col-12 ease flag-list-item"
                                >
                                  <i
                                    class="flag"
                                    style="background-position: 0px -1716px"
                                  ></i
                                  ><span class="country">Avustralya</span
                                  ><span class="code">61</span>
                                </li>
                                <li
                                  data-top="-1331"
                                  data-code="43"
                                  data-pattern=""
                                  data-key="AT"
                                  class="box col-12 ease flag-list-item"
                                >
                                  <i
                                    class="flag"
                                    style="background-position: 0px -1331px"
                                  ></i
                                  ><span class="country">Avusturya</span
                                  ><span class="code">43</span>
                                </li>
                                <li
                                  data-top="0"
                                  data-code="32"
                                  data-pattern=""
                                  data-key="BE"
                                  class="box col-12 ease flag-list-item"
                                >
                                  <i
                                    class="flag"
                                    style="background-position: 0px 0px"
                                  ></i
                                  ><span class="country">Belçika</span
                                  ><span class="code">32</span>
                                </li>
                                <li
                                  data-top="-528"
                                  data-code="213"
                                  data-pattern=""
                                  data-key="DZ"
                                  class="box col-12 ease flag-list-item"
                                >
                                  <i
                                    class="flag"
                                    style="background-position: 0px -528px"
                                  ></i
                                  ><span class="country">Cezayir</span
                                  ><span class="code">213</span>
                                </li>
                                <li
                                  data-top="-1386"
                                  data-code="45"
                                  data-pattern=""
                                  data-key="DK"
                                  class="box col-12 ease flag-list-item"
                                >
                                  <i
                                    class="flag"
                                    style="background-position: 0px -1386px"
                                  ></i
                                  ><span class="country">Danimarka</span
                                  ><span class="code">45</span>
                                </li>
                                <li
                                  data-top="-2333"
                                  data-code="212"
                                  data-pattern=""
                                  data-key="MA"
                                  class="box col-12 ease flag-list-item"
                                >
                                  <i
                                    class="flag"
                                    style="background-position: 0px -2333px"
                                  ></i
                                  ><span class="country">Fas</span
                                  ><span class="code">212</span>
                                </li>
                                <li
                                  data-top="-1012"
                                  data-code="33"
                                  data-pattern="___ ___ ___"
                                  data-key="FR"
                                  class="box col-12 ease flag-list-item"
                                >
                                  <i
                                    class="flag"
                                    style="background-position: 0px -1012px"
                                  ></i
                                  ><span class="country">Fransa</span
                                  ><span class="code">33</span>
                                </li>
                                <li
                                  data-top="-1441"
                                  data-code="31"
                                  data-pattern=""
                                  data-key="NL"
                                  class="box col-12 ease flag-list-item"
                                >
                                  <i
                                    class="flag"
                                    style="background-position: 0px -1441px"
                                  ></i
                                  ><span class="country">Hollanda</span
                                  ><span class="code">31</span>
                                </li>
                                <li
                                  data-top="-55"
                                  data-code="44"
                                  data-pattern=""
                                  data-key="GB"
                                  class="box col-12 ease flag-list-item"
                                >
                                  <i
                                    class="flag"
                                    style="background-position: 0px -55px"
                                  ></i
                                  ><span class="country">İngiltere</span
                                  ><span class="code">44</span>
                                </li>
                                <li
                                  data-top="-385"
                                  data-code="46"
                                  data-pattern=""
                                  data-key="SE"
                                  class="box col-12 ease flag-list-item"
                                >
                                  <i
                                    class="flag"
                                    style="background-position: 0px -385px"
                                  ></i
                                  ><span class="country">İsveç</span
                                  ><span class="code">46</span>
                                </li>
                                <li
                                  data-top="-1320"
                                  data-code="41"
                                  data-pattern=""
                                  data-key="CH"
                                  class="box col-12 ease flag-list-item"
                                >
                                  <i
                                    class="flag"
                                    style="background-position: 0px -1320px"
                                  ></i
                                  ><span class="country">İsviçre</span
                                  ><span class="code">41</span>
                                </li>
                                <li
                                  data-top="-1375"
                                  data-code="1"
                                  data-pattern=""
                                  data-key="CA"
                                  class="box col-12 ease flag-list-item"
                                >
                                  <i
                                    class="flag"
                                    style="background-position: 0px -1375px"
                                  ></i
                                  ><span class="country">Kanada</span
                                  ><span class="code">1</span>
                                </li>
                                <li
                                  data-top="-561"
                                  data-code="357"
                                  data-pattern=""
                                  data-key="CY"
                                  class="box col-12 ease flag-list-item"
                                >
                                  <i
                                    class="flag"
                                    style="background-position: 0px -561px"
                                  ></i
                                  ><span class="country">K.K.T.C</span
                                  ><span class="code">357</span>
                                </li>
                                <li
                                  data-top="-2487"
                                  data-code="965"
                                  data-pattern=""
                                  data-key="KW"
                                  class="box col-12 ease flag-list-item"
                                >
                                  <i
                                    class="flag"
                                    style="background-position: 0px -2487px"
                                  ></i
                                  ><span class="country">Kuveyt</span
                                  ><span class="code">965</span>
                                </li>
                                <li
                                  data-top="-1177"
                                  data-code="48"
                                  data-pattern=""
                                  data-key="PL"
                                  class="box col-12 ease flag-list-item"
                                >
                                  <i
                                    class="flag"
                                    style="background-position: 0px -1177px"
                                  ></i
                                  ><span class="country">Polonya</span
                                  ><span class="code">48</span>
                                </li>
                                <li
                                  data-top="-660"
                                  data-code="7"
                                  data-pattern="(___) ___ __ __"
                                  data-key="RU"
                                  class="box col-12 ease flag-list-item"
                                >
                                  <i
                                    class="flag"
                                    style="background-position: 0px -660px"
                                  ></i
                                  ><span class="country">Rusya</span
                                  ><span class="code">7</span>
                                </li>
                                <li
                                  data-top="-1606"
                                  data-code="90"
                                  data-pattern="+,9,0, ,(,/[1-9]/,/\d/,/\d/,), ,/\d/,/\d/,/\d/,-,/\d/,/\d/,-,/\d/,/\d/"
                                  data-key="TR"
                                  class="box col-12 ease flag-list-item"
                                >
                                  <i
                                    class="flag"
                                    style="background-position: 0px -1606px"
                                  ></i
                                  ><span class="country">Türkiye</span
                                  ><span class="code">90</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <input
                            type="tel"
                            dir="ltr"
                            data-placeholder2="Cep Telefonu"
                            placeholder="Cep Telefonu"
                            name="mobile_phone"
                            id="mobile_phone"
                            class="col col-12 phone TelUzun required withHolder loadedPlace"
                            data-val=""
                          />
                          <span class="col ease placeholder">Cep Telefonu</span>
                        </div>
                      </div>
                      <div
                        class="box col-12 p-bottom form-control large"
                        id="alan_eposta"
                      >
                        <div class="row input-icon tooltipWrapper">
                          <input
                            value=""
                            type="email"
                            placeholder="E-Mail"
                            name="email"
                            id="email"
                            autocapitalize="off"
                            v-model="email"
                            class="col col-12 required withHolder loadedPlace personaclick-initialized"
                          />
                          <span id="eposta_hata"></span>
                          <span id="kayitli_eposta"></span>
                          <span
                            for="email"
                            class="col ease placeholder focus"
                            :class="focus"
                            @click="focusActive()"
                            >E-Mail</span
                          >
                        </div>
                      </div>
                      <div
                        class="box col-12 p-bottom form-control large"
                        id="alan_vergino"
                      >
                        <div class="row input-icon tooltipWrapper">
                          <input
                            type="text"
                            placeholder="Posta"
                            name="post_code"
                            id="post_code"
                            class="col col-12 required withHolder loadedPlace"
                          />
                          <span class="col ease placeholder">Posta</span>
                        </div>
                      </div>
                      <div
                        class="box col-12 p-bottom form-control large"
                        id="alan_il2"
                      >
                        <div class="row input-icon tooltipWrapper">
                          <div
                            class="fl col-12 adresInput"
                            style="display: none"
                          >
                            <input
                              type="text"
                              placeholder=""
                              name="city"
                              id="city"
                              class="col col-12 required withHolder loadedPlace"
                            />
                            <span class="col ease placeholder"></span>
                          </div>
                          <div class="fl col-12 adresSelect">
                            <select
                              name="city_code"
                              id="city_code"
                              class="col col-12 required"
                            >
                              <option value="">İl Seçiniz</option>
                              <option value="1">Adana</option>
                              <option value="2">Adıyaman</option>
                              <option value="3">Afyonkarahisar</option>
                              <option value="4">Ağrı</option>
                              <option value="68">Aksaray</option>
                              <option value="5">Amasya</option>
                              <option value="6">Ankara</option>
                              <option value="7">Antalya</option>
                              <option value="75">Ardahan</option>
                              <option value="8">Artvin</option>
                              <option value="9">Aydın</option>
                              <option value="10">Balıkesir</option>
                              <option value="74">Bartın</option>
                              <option value="72">Batman</option>
                              <option value="69">Bayburt</option>
                              <option value="11">Bilecik</option>
                              <option value="12">Bingöl</option>
                              <option value="13">Bitlis</option>
                              <option value="14">Bolu</option>
                              <option value="15">Burdur</option>
                              <option value="16">Bursa</option>
                              <option value="17">Çanakkale</option>
                              <option value="18">Çankırı</option>
                              <option value="19">Çorum</option>
                              <option value="20">Denizli</option>
                              <option value="21">Diyarbakır</option>
                              <option value="81">Düzce</option>
                              <option value="22">Edirne</option>
                              <option value="23">Elazığ</option>
                              <option value="24">Erzincan</option>
                              <option value="25">Erzurum</option>
                              <option value="26">Eskişehir</option>
                              <option value="27">Gaziantep</option>
                              <option value="28">Giresun</option>
                              <option value="29">Gümüşhane</option>
                              <option value="30">Hakkari</option>
                              <option value="31">Hatay</option>
                              <option value="76">Iğdır</option>
                              <option value="32">Isparta</option>
                              <option value="34">İstanbul</option>
                              <option value="35">İzmir</option>
                              <option value="46">Kahramanmaraş</option>
                              <option value="78">Karabük</option>
                              <option value="70">Karaman</option>
                              <option value="36">Kars</option>
                              <option value="37">Kastamonu</option>
                              <option value="38">Kayseri</option>
                              <option value="79">Kilis</option>
                              <option value="71">Kırıkkale</option>
                              <option value="39">Kırklareli</option>
                              <option value="40">Kırşehir</option>
                              <option value="41">Kocaeli</option>
                              <option value="42">Konya</option>
                              <option value="43">Kütahya</option>
                              <option value="44">Malatya</option>
                              <option value="45">Manisa</option>
                              <option value="47">Mardin</option>
                              <option value="33">Mersin</option>
                              <option value="48">Muğla</option>
                              <option value="49">Muş</option>
                              <option value="50">Nevşehir</option>
                              <option value="51">Niğde</option>
                              <option value="52">Ordu</option>
                              <option value="80">Osmaniye</option>
                              <option value="53">Rize</option>
                              <option value="54">Sakarya</option>
                              <option value="55">Samsun</option>
                              <option value="63">Şanlıurfa</option>
                              <option value="56">Siirt</option>
                              <option value="57">Sinop</option>
                              <option value="73">Şırnak</option>
                              <option value="58">Sivas</option>
                              <option value="59">Tekirdağ</option>
                              <option value="60">Tokat</option>
                              <option value="61">Trabzon</option>
                              <option value="62">Tunceli</option>
                              <option value="64">Uşak</option>
                              <option value="65">Van</option>
                              <option value="77">Yalova</option>
                              <option value="66">Yozgat</option>
                              <option value="67">Zonguldak</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div
                        class="box col-12 p-bottom form-control large"
                        id="alan_ilce2"
                      >
                        <div class="row input-icon tooltipWrapper">
                          <div
                            class="fl col-12 adresInput"
                            style="display: none"
                          >
                            <input
                              type="text"
                              placeholder="İlçe"
                              name="town"
                              id="town"
                              class="col col-12 required withHolder loadedPlace"
                            />
                            <span class="col ease placeholder">İlçe</span>
                          </div>
                          <div class="fl col-12 adresSelect">
                            <select
                              name="town_code"
                              id="town_code"
                              class="col col-12 required"
                            >
                              <option value="">İlçe</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div
                        class="box col-12 p-bottom form-control large"
                        id="alan_semt"
                      >
                        <div class="row input-icon tooltipWrapper">
                          <div class="fl col-12 adresInput">
                            <input
                              type="text"
                              placeholder="Semt"
                              name="district"
                              id="district"
                              class="col col-12 required withHolder loadedPlace"
                            />
                            <span class="col ease placeholder">Semt</span>
                          </div>
                          <div class="fl col-12 adresSelect hideThis">
                            <select
                              name="district_code"
                              id="district_code"
                              class="col col-12 required"
                            >
                              <option value="">Semt Seçiniz</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col col-6 col-sm-12 p-right">
                      <div class="fl col-12 text-title text-semibold d-flex mt">
                        <i class="icon-lock text-custom-pink"></i>
                        Şifre Bilgileri
                      </div>
                      <div
                        class="box col-12 p-bottom form-control large"
                        id="alan_parola"
                      >
                        <div class="row input-icon tooltipWrapper">
                          <input
                            value=""
                            type="password"
                            placeholder="Şifre"
                            name="password"
                            id="password"
                            v-model="password"
                            class="col col-12 required withHolder loadedPlace"
                          />
                          <span
                            for="password"
                            class="col ease placeholder focus"
                            :class="focus"
                            @click="focusActive()"
                            >Şifre</span
                          >
                        </div>
                      </div>
                      <div
                        class="box col-12 p-bottom form-control large"
                        id="alan_parola"
                      >
                        <div class="row input-icon tooltipWrapper">
                          <input
                            type="password"
                            placeholder="Şifre Tekrar"
                            name="password_again"
                            id="password_again"
                            class="col col-12 required withHolder loadedPlace"
                          />
                          <span class="col ease placeholder">Şifre Tekrar</span>
                        </div>
                      </div>
                      <div class="box col-12">
                        <div class="row">
                          <label
                            class="fl col-12 form-item text-description d-flex"
                          >
                            <input
                              value="1"
                              type="checkbox"
                              name="mail_notify"
                              id="mail_notify"
                              class="personaclick-initialized"
                            />
                            <span class="fl icon-wrapper">
                              <i
                                class="fl icon-square-unchecked icon-small"
                              ></i>
                              <i class="fl icon-square-checked icon-small"></i>
                            </span>
                            <span class="fl">
                              Tarafınızdan gönderilecek bilgilendirme
                              e-postalarını almak istiyorum.
                            </span>
                          </label>
                        </div>
                      </div>
                      <div class="box col-12 p-top">
                        <div class="row">
                          <label
                            class="fl col-12 form-item text-description d-flex"
                          >
                            <input
                              value="1"
                              type="checkbox"
                              name="sms_notify"
                              id="sms_notify"
                            />
                            <span class="fl icon-wrapper">
                              <i
                                class="fl icon-square-unchecked icon-small"
                              ></i>
                              <i class="fl icon-square-checked icon-small"></i>
                            </span>
                            <span class="fl">
                              Tarafınızdan gönderilecek bilgilendirme sms'lerini
                              almak istiyorum.
                            </span>
                          </label>
                        </div>
                      </div>
                      <div class="box col-12 p-top">
                        <div class="row">
                          <label
                            class="fl col-12 form-item text-description d-flex tooltipWrapper"
                          >
                            <input
                              value="1"
                              type="checkbox"
                              name="privacy"
                              id="privacy"
                            />
                            <span class="fl icon-wrapper">
                              <i
                                class="fl icon-square-unchecked icon-small"
                              ></i>
                              <i class="fl icon-square-checked icon-small"></i>
                            </span>
                            <span class="fl">
                              <a
                                class="warning popupWin"
                                data-width="800"
                                title="gizlilik polikasını okumak için tıklayınız."
                                data-url="/srv/service/content/get-block/1018/content/2"
                                >Üyelik sözleşmesini</a
                              >
                              Okudum, Kabul Ediyorum.
                            </span>
                          </label>
                        </div>
                      </div>
                      <div @click="signUp" class="col col-12">
                        <div class="row">
                          <a
                            type="submit"
                            id="uye-kayit-btn"
                            class="btn col-12 btn-custom-pink text-upper text-center"
                          >
                            Kaydet
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="box col-12 p-right">
                      <div class="box col-12 box-border line-light">
                        <p>
                          Firmamız hiçbir şekilde e-mailinizi ve kişisel
                          bilgilerinizi ticari amaç uğruna kullanmaz.
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'signin',
  data() {
    return {
      email: '',
      password: '',
      ad: false,
      soyad: false,
      firma: false,
      error: false,
      success: false,
    }
  },

  methods: {
    signUp(e) {
      e.preventDefault()
      this.$fire.auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((res) => {
          console.log('Giriş başarılı')
          this.$store.commit('user/setUser', this.email)
          setTimeout(() => {
            window.location.href = '/'
          }, 1500)

          this.error = false
          this.success = true
        })
        .catch((err) => {
          console.log('Giriş başarısız')
          this.error = true
        })
    },
  },
}
</script>
<style scoped>
.placeholder.focus {
  bottom: auto;
  height: 0;
  line-height: 28px;
  font-size: 10px;
  color: #b5b5b5;
  font-weight: 600;
}
.medium .placeholder.focus {
  height: 10px;
  line-height: 10px;
}
.large .placeholder.focus {
  height: 20px;
  line-height: 20px;
}
.xlarge .placeholder.focus {
  height: 25px;
  line-height: 30px;
}
.icon-member-default:before {
  content: '\e809';
}
[class^='icon-']:not(.icon-no-space):before,
[class*=' icon-']:not(.icon-no-space):before {
  margin-right: 8px;
}
.pageTitle i:before {
  color: #000;
}
[class^='icon-']:before,
[class*=' icon-']:before,
[class^='icon-']:after,
[class*=' icon-']:after,
.icon-overlay:after {
  line-height: 30px;
  color: inherit;
  font-family: 'tsoft', sans-serif;
  font-style: normal;
  font-weight: normal;
  text-decoration: inherit;
  font-variant: normal;
  text-align: center;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.text-custom-pink,
.active .text-custom-gray,
.text-custom-gray.active,
.text-custom-gray.like-btn:hover {
  color: #000;
}
[class^='icon-']:not(.icon-no-space):before,
[class*=' icon-']:not(.icon-no-space):before {
  margin-right: 8px;
}
.icon-phone:before {
  content: '\e80c';
}
.icon-lock:before {
  content: '\e829';
}
.required {
  background: url(https://www.manuka.com.tr/theme/v4-freshscarfs/sub_theme/form/firat/user_v4yeni/required.png)
    no-repeat right center;
}
.form-control input[type='text'],
.form-control input[type='password'],
.form-control input[type='tel'],
.form-control input[type='number'],
.form-control select,
.form-control textarea,
.form input[type='text'],
.form input[type='password'],
.form input[type='tel'],
.form input[type='number'],
.form select,
.form textarea {
  background-color: #fff !important;
  background-image: none !important;
  border: 1px solid #e5e5e5 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
}
.form-control input[type='text'],
.form-control input[type='password'],
.form-control select,
.form-control textarea,
.form input[type='text'],
.form input[type='password'],
.form select,
.form textarea {
  height: 20px;
  margin: 0;
  padding-top: 0;
  padding-left: 10px;
  padding-bottom: 0;
  padding-right: 10px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
.form-control.large input[type='text'],
.form-control.large input[type='password'],
.form-control.large select,
.form.large input[type='text'],
.form.large input[type='password'],
.form.large select {
  height: 40px;
  padding-left: 15px;
  padding-right: 15px;
}
.myFlagIcon i {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 16px;
  height: 11px;
  margin-top: -5px;
  margin-left: -8px;
  background-image: url(https://www.manuka.com.tr/theme/standart/images/blok/flags.png);
  background-repeat: no-repeat;
}
</style>
