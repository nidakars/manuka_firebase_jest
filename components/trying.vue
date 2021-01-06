<template>
  <div
    style="width:500px;margin:0 auto;;z-index:9981;"
    class="pWin box whiteBg    br5"
    id="myPopupWin"
  >
    <div class="pClose close"></div>
    <div class="pText col col-12">
      <div class="row oh">
        <!--cache-->
        <div class="col col-12 loaderWrapper" id="popup-login">
          <div class="col popupInnerBlock">
            <div class="box col-12 xlarge">Üye giriş bilgilerini giriniz.</div>
            <div class="fl col-12">
              <div class="fl col-12">
                <ul class="fl col-12" id="popup-login-inputs">
                  <li class="fl col-12">
                    <div class="box col-12 form-control xlarge">
                      <div class="row input-icon tooltipWrapper">
                        <span class="icon icon-mail"></span>
                        <input
                          type="text"
                          placeholder="E-Mail"
                          name="pop-email"
                          id="pop-email"
                          value=""
                          class="col col-12 withHolder loadedPlace personaclick-initialized"
                        />
                        <span class="col ease placeholder">E-Mail</span>
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
                  type="password"
                  placeholder="Şifre"
                  name="pop-password"
                  id="pop-password"
                  value=""
                  class="col col-12 withHolder loadedPlace"
                />
                <span class="col ease placeholder">Şifre</span>
              </div>
            </div>
            <div
              class="box col-12 form-control tooltipWrapper"
              style="display:none;"
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
                  style="height: 30px;"
                />
                <span class="col ease placeholder">Güvenlik Kodu</span>
              </div>
            </div>
            <div class="box col-12">
              <div class="row">
                <a
                  data-prefix="pop-"
                  data-callback="popMemberLoginFn"
                  class="login btn col-12 btn-default btn-big btn-upper btn-radius a-center"
                  id="popup-member-login"
                  >Giriş Yap</a
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
                <a
                  href="/uye-kayit"
                  class="fr form-link"
                  id="popup-member-register"
                  >Üye Ol</a
                >
              </div>
            </div>
            <div class="row"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.PersonaClickDiv.col-12.fl {
  width: 97% !important;
  margin-left: 1.5% !important;
}
.personaclick-recommend .recommended-items .recommended-item:hover {
  -webkit-box-shadow: unset !important;
  box-shadow: unset !important;
  border: unset !important;
}
.personaclick-recommend {
  float: left;
  width: 100% !important;
  display: block;
}
.personaclick-recommend .recommended-items {
  height: unset !important;
  overflow: unset !important;
}

.recommender-block-title {
  font: 600 24px / 35px Poppins, sans-serif !important;
  text-align: left;
}
.personaclick-recommend .recommended-items .recommended-item {
  border: unset !important;
  width: unset !important;
  height: unset !important;
  margin: 0 !important;
}
.personaclick-recommend
  .recommended-items
  .recommended-item
  .recommended-item-photo {
  margin: 0px 0px 6px 0px !important;
}
.personaclick-recommend
  .recommended-items
  .recommended-item
  .recommended-item-photo,
.personaclick-recommend
  .recommended-items
  .recommended-item
  .recommended-item-photo
  img {
  max-height: unset !important;
  max-width: unset !important;
  width: 100% !important;
}
.personaclick-recommend .owl-nav.disabled {
  display: none !important;
}
.persona-item-price {
  font: 600 17px / 17px Poppins, sans-serif !important;
  float: left !important;
  margin-top: 5px !important;
}
.persona-old-price {
  float: left;
  margin-right: 10px;
  font: 17px / 17px Poppins, sans-serif !important;
  text-decoration: line-through !important;
  margin-top: 5px !important;
}
.persona-new-price {
  float: left;
  color: #fe3600;
  font: 600 17px / 17px Poppins, sans-serif !important;
  margin-top: 5px !important;
}
.recommended-item-title {
  font: 16px / 17px Poppins, sans-serif !important;
  width: 100% !important;
  height: unset !important;
  text-align: left !important;
  margin: 0 !important;
  text-transform: uppercase;
}
.personaclick-recommend .owl-prev {
  position: absolute;
  top: 40%;
  visibility: hidden;
  height: 30px !important;
  width: 30px !important;
  left: -65px !important;
}
.personaclick-recommend .owl-prev:after {
  visibility: visible !important;
  content: "";
  width: 30px;
  height: 30px;
  display: block;
  background: url(/Data/EditorFiles/tema/svg/back.svg) no-repeat center !important;
}
.personaclick-recommend .owl-next {
  position: absolute;
  top: 40%;
  visibility: hidden;
  height: 30px !important;
  width: 30px !important;
  right: -65px !important;
}
.personaclick-recommend .owl-next:after {
  visibility: visible !important;
  content: "";
  width: 30px;
  height: 30px;
  display: block;
  background: url(/Data/EditorFiles/tema/svg/right.svg) no-repeat center !important;
}

@media only screen and (max-width: 1440px) {
  .personaclick-recommend .owl-next {
    right: -15px;
  }
  .personaclick-recommend .owl-prev {
    left: -30px;
  }
}

@media only screen and (max-width: 768px) {
  .personaclick-recommend {
    margin-bottom: 0px !important;
  }
  .personaclick-recommend .recommended-items {
    left: -5px;
  }
  .personaclick-recommend .recommended-items .recommended-item {
    width: 210px !important;
    height: 350px !important;
    border: unset !important;
  }
  .personaclick-recommend
    .recommended-items
    .recommended-item
    .recommended-item-photo,
  .personaclick-recommend
    .recommended-items
    .recommended-item
    .recommended-item-photo
    img {
    max-width: 190px !important;
  }
  .recommended-item-title {
    margin-left: 10px !important;
  }
  .persona-item-price {
    margin-left: 10px !important;
  }
  .persona-old-price {
    width: 30% !important;
    margin-left: 10px !important;
    float: left;
    margin-right: 10px !important;
    font: 13px / 17px Poppins, sans-serif !important;
    text-decoration: line-through !important;
    margin-top: 5px !important;
  }
  .persona-new-price {
    width: 35% !important;
    margin-left: 0px !important;
    font: 600 14px / 17px Poppins, sans-serif !important;
  }
  .personaclick-recommend .owl-next {
    right: -25px !important;
  }
  .personaclick-recommend .owl-prev {
    left: -15px !important;
  }
  .personaclick-recommend .owl-nav {
    top: 35%;
  }
}

@media only screen and (max-width: 320px) {
  .personaclick-recommend .recommended-items .recommended-item {
    width: 145px !important;
    height: 275px !important;
  }
  .persona-old-price {
    width: 40% !important;
  }
  .persona-new-price {
    width: 45% !important;
  }
  .personaclick-recommend .recommended-items {
    left: 0px !important;
  }
  .personaclick-recommend .owl-prev {
    left: -10px !important;
  }
}
</style>
<style>
.personaclick-recommend .recommended-items .recommended-item:hover {
  -webkit-box-shadow: unset !important;
  box-shadow: unset !important;
  border: unset !important;
}
.personaclick-recommend {
  float: left;
  width: 100%;
  display: block;
}
.personaclick-recommend .recommended-items {
  height: unset !important;
  overflow: unset !important;
}
.recommender-block-title {
  font: 600 24px / 35px Poppins, sans-serif !important;
  text-align: left;
}
.personaclick-recommend .recommended-items .recommended-item {
  border: unset !important;
  width: unset !important;
  height: unset !important;
}
.personaclick-recommend
  .recommended-items
  .recommended-item
  .recommended-item-photo {
  margin: 0px auto 6px auto !important;
}
.personaclick-recommend
  .recommended-items
  .recommended-item
  .recommended-item-photo,
.personaclick-recommend
  .recommended-items
  .recommended-item
  .recommended-item-photo
  img {
  max-height: unset !important;
  max-width: unset !important;
  width: 100% !important;
}
.personaclick-recommend .owl-nav.disabled {
  display: none !important;
}
.persona-item-price {
  font: 600 17px / 17px Poppins, sans-serif !important;
  float: left !important;
  margin-top: 5px !important;
}
.persona-old-price {
  float: left;
  margin-right: 10px;
  font: 17px / 17px Poppins, sans-serif !important;
  text-decoration: line-through !important;
  margin-top: 5px !important;
}
.persona-new-price {
  float: left;
  color: #fe3600;
  font: 600 17px / 17px Poppins, sans-serif !important;
  margin-top: 5px !important;
}
.recommended-item-title {
  font: 16px / 17px Poppins, sans-serif !important;
  width: 100% !important;
  height: unset !important;
  text-align: left !important;
  margin: 0 !important;
  text-transform: uppercase;
}
.personaclick-recommend .owl-prev {
  position: absolute;
  top: 40%;
  visibility: hidden;
  height: 30px !important;
  width: 30px !important;
  left: -65px;
}
.personaclick-recommend .owl-prev:after {
  visibility: visible !important;
  content: "";
  width: 30px;
  height: 30px;
  display: block;
  background: url(/Data/EditorFiles/tema/svg/back.svg) no-repeat center !important;
}
.personaclick-recommend .owl-next {
  position: absolute;
  top: 40%;
  visibility: hidden;
  height: 30px !important;
  width: 30px !important;
  right: -50px;
}
.personaclick-recommend .owl-next:after {
  visibility: visible !important;
  content: "";
  width: 30px;
  height: 30px;
  display: block;
  background: url(/Data/EditorFiles/tema/svg/right.svg) no-repeat center !important;
}

@media only screen and (max-width: 1440px) {
  .personaclick-recommend .owl-next {
    right: -15px;
  }
  .personaclick-recommend .owl-prev {
    left: -30px;
  }
}

@media only screen and (max-width: 768px) {
  .personaclick-recommend {
    margin-bottom: 0px !important;
  }
  .personaclick-recommend .recommended-items {
    left: -5px;
  }
  .personaclick-recommend .recommended-items .recommended-item {
    width: 210px !important;
    height: 350px !important;
    border: unset !important;
  }
  .personaclick-recommend
    .recommended-items
    .recommended-item
    .recommended-item-photo,
  .personaclick-recommend
    .recommended-items
    .recommended-item
    .recommended-item-photo
    img {
    max-width: 190px !important;
  }
  .recommended-item-title {
    margin-left: 10px !important;
  }
  .persona-item-price {
    margin-left: 10px !important;
  }
  .persona-old-price {
    width: 30% !important;
    margin-left: 10px !important;
    float: left;
    margin-right: 10px !important;
    font: 13px / 17px Poppins, sans-serif !important;
    text-decoration: line-through !important;
    margin-top: 5px !important;
  }
  .persona-new-price {
    width: 35% !important;
    margin-left: 0px !important;
    font: 600 14px / 17px Poppins, sans-serif !important;
  }
  .personaclick-recommend .owl-next {
    right: -25px !important;
  }
  .personaclick-recommend .owl-prev {
    left: -15px !important;
  }
  .personaclick-recommend .owl-nav {
    top: 35%;
  }
}

@media only screen and (max-width: 320px) {
  .personaclick-recommend .recommended-items .recommended-item {
    width: 145px !important;
    height: 275px !important;
  }
  .persona-old-price {
    width: 40% !important;
  }
  .persona-new-price {
    width: 45% !important;
  }
  .personaclick-recommend .recommended-items {
    left: 0px !important;
  }
  .personaclick-recommend .owl-prev {
    left: -10px !important;
  }
}
</style>
