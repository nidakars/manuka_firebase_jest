--MANUKA 2 COMPONENT--

<template>
  <header>
    <div class="fl col-12" id="header-wrap">
      <div class="col-12 HeaderInner">
        <div class="col col-12 flexwrap" id="headerMain">
          <div class="fl col-md-1 col-sm-2 forMobile menuBtnBox">
            <span id="menuBtn"></span>
          </div>
          <div id="logo" class="col col-3 col-sm-4 ease">
            <a href="/"
              ><p>
                <img
                  src="https://img.manuka.com.tr/Data/EditorFiles/tema/img/manuka-logo-yeni.png"
                  alt="manuka.com.tr"
                /></p
            ></a>
          </div>
          <div class="col-4 PcSearch forDesktop">
            <div id="search" class="fr col-12 ease">
              <form
                id="FormAra"
                name="FormAra"
                class="icon-no-space"
                action="/arama"
                method="get"
                data-before="Ara"
              >
                <input
                  id="live-search"
                  autocomplete="off"
                  class="col withPlace ease personaclick-instant-search personaclick-instant-search-rendered"
                  name="q"
                  type="text"
                  placeholder="Ne Aramıştınız ?"
                  content="text/html; charset=UTF-8"
                />
                <button
                  type="submit"
                  value="Ara"
                  class="fr ease"
                  id="search-btn"
                ></button>
                <div
                  class="pos-a col-12 whiteBg box-border"
                  id="live-search-box"
                  data-callback="searchCallback"
                  style="visibility: hidden"
                >
                  <div class="box col-12 p-top">
                    <ul class="box col-12 p-bottom" ng-if="products.length > 0">
                      <li
                        class="col col-12 text-title text-bold text-upper line-bottom mb"
                      >
                        <span class="row">
                          <i class="icon-cube"></i>
                          Ürünler
                        </span>
                      </li>
                      <li class="col col-12" ng-repeat="product in products">
                        <a class="col col-12 text-description mb"></a>
                      </li>
                    </ul>
                    <ul
                      class="box col-12 p-bottom"
                      ng-if="categories.length > 0"
                    >
                      <li
                        class="col col-12 text-title text-bold text-upper line-bottom mb"
                      >
                        <span class="row">
                          <i class="icon-sitemap"></i>
                          Kategoriler
                        </span>
                      </li>
                      <li class="col col-12" ng-repeat="category in categories">
                        <a class="col col-12 text-description mb"></a>
                      </li>
                    </ul>
                    <ul class="box col-12 p-bottom" ng-if="brands.length > 0">
                      <li
                        class="col col-12 text-title text-bold text-upper line-bottom mb"
                      >
                        <span class="row">
                          <i class="icon-building"></i>
                          Markalar
                        </span>
                      </li>
                      <li class="col col-12" ng-repeat="brand in brands">
                        <a class="col col-12 text-description mb"></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div
            class="fr col p-right col-4 col-md-8 col-sm-6 flexwrap"
            id="headerRight"
          >
            <!--<a href="javascript:void(0);" class="AraBtn fr forDesktop"></a>-->
            <nuxt-link
              data-width="500"
              data-url="/srv/service/customer/login-form"
              to="/uye_giris"
              class="fr text-center authorLink popupWin"
            ></nuxt-link>
            <nuxt-link
              data-width="500"
              data-url="/srv/service/customer/login-form"
              to="#"
              class="col fr popupWin"
              id="favoribtn"
              ><span class="favSayi"></span
            ></nuxt-link>
            <nuxt-link to="/sepet" class="fr basketLink" id="cart-soft-count">
              <span class="cart-soft-count"> {{ totalBasketItemCount }}</span>
            </nuxt-link>
          </div>
        </div>
        <nav class="fl col-12 forDesktop" id="mainMenu">
          <ul class="fl col-12 menu flexwrap">
            <li class="fl">
              <span class="fl d-flex drop-down-title"
                ><a class="fl" lang="tr" href="/indirim">İndirim</a></span
              >
            </li>
            <li class="fl">
              <span class="fl d-flex drop-down-title"
                ><a class="fl" lang="tr" href="/yeni">Yeni</a></span
              >
            </li>
            <li class="fl drop-down hover parentLink">
              <span class="fl d-flex drop-down-title"
                ><nuxt-link class="fl" lang="tr" to="/giyim"
                  >Giyim</nuxt-link
                ></span
              >
              <div
                class="pos-a pos-top pos-left pos-right box p-left whiteBg box-border b-top subMenu top"
              >
                <div class="inner">
                  <div class="box col-12 dynamicMenu">
                    <ul class="fl col-3 SubNewCat">
                      <li class="fl col-12">
                        <a href="/moonlight" class="fl col-12"
                          >Moonlight Koleksiyonu🌙</a
                        >
                      </li>
                      <li class="fl col-12">
                        <a href="/naturel-koleksiyonu" class="fl col-12"
                          >Natürel Koleksiyonu</a
                        >
                      </li>
                      <li class="fl col-12">
                        <a href="/denim" class="fl col-12">Denim Koleksiyonu</a>
                      </li>
                      <li class="fl col-12">
                        <a href="/makaron-renkleri" class="fl col-12"
                          >Makaron Renkleri</a
                        >
                      </li>
                      <li class="fl col-12">
                        <a href="/avantajli-fiyatlar" class="fl col-12 MenuRed"
                          >Avantajlı Fiyatlar</a
                        >
                      </li>
                      <li class="fl col-12">
                        <a href="/cok-satanlar" class="fl col-12"
                          >Çok Satanlar</a
                        >
                      </li>
                    </ul>
                    <div class="col-9 col p-right SubMenuRight flexwrap">
                      <ul class="col p-left col-3">
                        <li class="fl col-12">
                          <a href="/kaban-333" class="fl col-12">Kaban</a>
                        </li>
                        <li class="fl col-12">
                          <a href="/mont-334" class="fl col-12">Mont</a>
                        </li>
                        <li class="fl col-12">
                          <a href="/yelek" class="fl col-12">Yelek</a>
                        </li>
                        <li class="fl col-12">
                          <a href="/yagmurluk-327" class="fl col-12"
                            >Yağmurluk</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a href="/trenchkot" class="fl col-12">Trençkot</a>
                        </li>
                        <li class="fl col-12">
                          <a href="/denim" class="fl col-12">Denim</a>
                        </li>
                        <li class="fl col-12">
                          <a href="/ceket-339" class="fl col-12">Ceket</a>
                        </li>
                        <li class="fl col-12">
                          <a href="/kimono" class="fl col-12">Kimono</a>
                        </li>
                        <li class="fl col-12">
                          <a href="/triko-325" class="fl col-12">Triko</a>
                        </li>
                        <li class="fl col-12">
                          <a href="/hirka-332" class="fl col-12">Hırka</a>
                        </li>
                        <li class="fl col-12">
                          <a href="/kazak-323" class="fl col-12">Kazak</a>
                        </li>
                        <li class="fl col-12">
                          <a href="/suveter" class="fl col-12">Süveter</a>
                        </li>
                        <li class="fl col-12">
                          <a href="/sweatshirt-338" class="fl col-12"
                            >Sweatshirt</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a href="/gomlek-329" class="fl col-12">Gömlek</a>
                        </li>
                        <li class="fl col-12">
                          <a href="/tunik" class="fl col-12">Tunik</a>
                        </li>
                        <li class="fl col-12">
                          <a href="/basic-328" class="fl col-12">Basic</a>
                        </li>
                        <li class="fl col-12">
                          <a href="/t-shirt-324" class="fl col-12">T-Shirt</a>
                        </li>
                        <li class="fl col-12">
                          <a href="/elbise-322" class="fl col-12">Elbise</a>
                        </li>
                        <li class="fl col-12">
                          <a href="/salopet" class="fl col-12">Salopet</a>
                        </li>
                        <!--<li class="fl col-12"><a href="/jile-330" class="fl col-12">Jile</a></li>-->
                        <li class="fl col-12">
                          <a href="/sweatshirt-takim" class="fl col-12"
                            >Sweatshirt Takım</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a href="/esofman-takim" class="fl col-12"
                            >Eşofman Takım</a
                          >
                        </li>
                        <li class="fl col-12">
                          <a href="/takim-331" class="fl col-12">Takım</a>
                        </li>
                        <li class="fl col-12">
                          <a href="/jean-336" class="fl col-12">Jean</a>
                        </li>
                        <li class="fl col-12">
                          <a href="/pantolon-335" class="fl col-12">Pantolon</a>
                        </li>
                        <li class="fl col-12">
                          <a href="/etek-337" class="fl col-12">Etek</a>
                        </li>
                      </ul>
                      <ul class="col p-left col-3">
                        <li class="MenuSubBaslik">Edit</li>
                        <li class="fl col-12">
                          <a href="/denim-zamani" class="fl col-12"
                            >Denim Zamanı<sup style="color: black">Yeni</sup></a
                          >
                        </li>
                        <!--<li class="fl col-12"><a href="/kis-modasi" class="fl col-12">Kış Modası</a></li>-->
                        <!--<li class="fl col-12"><a href="#" class="fl col-12">Ofis Görünümü</a></li>-->
                        <!--<li class="fl col-12"><a href="#" class="fl col-12">Keten Zamanı</a></li>-->
                      </ul>
                      <div class="col p-left col-6">
                        <img
                          src="https://img.manuka.com.tr/Data/EditorFiles/tema/img/giyimbolumu.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="fl drop-down hover parentLink">
              <span class="fl d-flex drop-down-title"
                ><a class="fl" lang="tr" href="/#/canta">Çanta</a></span
              >
              <div
                class="pos-a pos-top pos-left pos-right box p-left whiteBg box-border b-top subMenu top"
              >
                <div class="inner">
                  <div class="box col-12 dynamicMenu p-left">
                    <ul class="col col-12">
                      <li class="fl col-12">
                        <a href="/everyday-bag" class="fl col-12"
                          >Everyday Bag</a
                        >
                      </li>
                      <li class="fl col-12">
                        <a href="/bez-canta" class="fl col-12">Kanvas Çanta</a>
                      </li>
                      <li class="fl col-12">
                        <a href="/deri-canta" class="fl col-12">Deri Çanta</a>
                      </li>
                      <li class="fl col-12">
                        <a href="/canta-340" class="fl col-12">Bez Çanta</a>
                      </li>
                      <li class="fl col-12">
                        <a href="/sirt-cantasi" class="fl col-12"
                          >Sırt Çantası</a
                        >
                      </li>
                      <li class="fl col-12">
                        <a href="/suni-kurk" class="fl col-12"
                          >Suni Kürk Çanta</a
                        >
                      </li>
                      <li class="fl col-12">
                        <a href="/cuzdan" class="fl col-12">Cüzdan</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li class="fl drop-down hover parentLink">
              <span class="fl d-flex drop-down-title"
                ><a class="fl" lang="tr" href="/#/aksesuar">Aksesuar</a></span
              >
              <div
                class="pos-a pos-top pos-left pos-right box p-left whiteBg box-border b-top subMenu top"
              >
                <div class="inner">
                  <div class="box col-12 dynamicMenu p-left">
                    <ul class="col col-12">
                      <li class="fl col-12">
                        <a href="/sapka" class="fl col-12">Şapka</a>
                      </li>
                      <li class="fl col-12">
                        <a href="/telefon-kilifi-366" class="fl col-12"
                          >Telefon Kılıfı</a
                        >
                      </li>
                      <li class="fl col-12">
                        <a href="/defter" class="fl col-12">Defter</a>
                      </li>
                      <li class="fl col-12">
                        <a href="/bileklik" class="fl col-12">Bileklik</a>
                      </li>
                      <li class="fl col-12">
                        <a href="/yaka" class="fl col-12">Yaka</a>
                      </li>
                      <!--<li class="fl col-12"><a href="/yuzuk" class="fl col-12">Yüzük</a></li>-->
                      <!--<li class="fl col-12"><a href="/semsiye" class="fl col-12">Şemsiye</a></li>-->
                      <li class="fl col-12">
                        <a href="/kolye-320" class="fl col-12">Kolye</a>
                      </li>
                      <li class="fl col-12">
                        <a href="/kemer-321" class="fl col-12">Kemer</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li class="fl drop-down hover parentLink">
              <span class="fl d-flex drop-down-title"
                ><a class="fl" lang="tr" href="/#/ayakkabi">Ayakkabı</a></span
              >
              <div
                class="pos-a pos-top pos-left pos-right box p-left whiteBg box-border b-top subMenu top"
              >
                <div class="inner">
                  <div class="box col-12 dynamicMenu p-left">
                    <ul class="col col-12">
                      <li class="fl col-12">
                        <a href="/postal-341" class="fl col-12">Postal</a>
                      </li>
                      <li class="fl col-12">
                        <a href="/snikers" class="fl col-12">Sneakers</a>
                      </li>
                      <!-- <li class="fl col-12"><a href="/bot-343" class="fl col-12">Bot</a></li>-->
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <!--<li class="fl drop-down hover parentLink"><span class="fl d-flex drop-down-title"><a class="fl" lang="tr" href="/corap-319">Çorap</a></span>
<div class="pos-a pos-top pos-left pos-right box p-left whiteBg box-border b-top subMenu top">
<div class="inner">
<div class="box col-12 dynamicMenu p-left">
<ul class="col col-12">
<b> <li class="fl col-12"><a href="/postal-341" class="fl col-12">Kutu Çorap</a></b>
<ul class="col col-12"><li class="fl col-12"><a href="/postal-341" class="fl col-12"> Orman Soket Çorap Seti</a></li></ul>
<ul class="col col-12"><li class="fl col-12"><a href="/postal-341" class="fl col-12"> Sonbahar Soket Çorap Seti</a></li></ul>
<ul class="col col-12"><li class="fl col-12"><a href="/postal-341" class="fl col-12"> Duman Soket Çorap Seti</a></li></ul>
<ul class="col col-12"><li class="fl col-12"><a href="/postal-341" class="fl col-12"> Pink Dream Soket Çorap Seti</a></li></ul>
<ul class="col col-12"><li class="fl col-12"><a href="/postal-341" class="fl col-12"> Okyanus Soket Çorap Seti</a></li></ul>
<ul class="col col-12"><li class="fl col-12"><a href="/postal-341" class="fl col-12"> Toupe Soket Çorap Seti</a></li></ul>
<ul class="col col-12"><li class="fl col-12"><a href="/postal-341" class="fl col-12"> Toprak Soket Çorap Seti</a></li></ul>
</li>
<b><li class="fl col-12"><a href="/snikers" class="fl col-12">Desenli Çorap</a></li></b>
<ul class="col col-12"><li class="fl col-12"><a href="/postal-341" class="fl col-12"> Anna Desenli Çorap Seti</a></li></ul>
<ul class="col col-12"><li class="fl col-12"><a href="/postal-341" class="fl col-12"> Elsa Desenli Çorap Seti</a></li></ul>
<ul class="col col-12"><li class="fl col-12"><a href="/postal-341" class="fl col-12"> Lisa Desenli Çorap Seti</a></li></ul>
<ul class="col col-12"><li class="fl col-12"><a href="/postal-341" class="fl col-12"> Yana Desenli Çorap Seti</a></li></ul>
<li class="fl col-12"><a href="/bot-343" class="fl col-12">Düz Soket Çorap</a></li>
<li class="fl col-12"><a href="/bot-343" class="fl col-12">Fitilli Soket Çorap</a></li>
</ul>
</div>
</div>
</div>
</li>
-->
            <li class="fl drop-down hover parentLink">
              <span class="fl d-flex drop-down-title"
                ><a class="fl" lang="tr" href="/#/corap">Çorap</a></span
              >
              <div
                class="pos-a pos-top pos-left pos-right box p-left whiteBg box-border b-top subMenu top"
              >
                <div class="inner">
                  <div class="box col-12 dynamicMenu">
                    <div class="col-9 col p-right SubMenuRight flexwrap">
                      <ul class="col p-left col-3">
                        <li class="fl col-12">
                          <a href="/kutulu-corap" class="fl col-12"
                            >Kutu Çorap</a
                          >
                        </li>
                      </ul>
                      <ul class="col p-left col-3">
                        <li class="fl col-12">
                          <a href="/desenli-soket-corap" class="fl col-12"
                            >Desenli Çorap</a
                          >
                        </li>
                      </ul>
                      <ul class="col p-left col-3">
                        <li class="fl col-12">
                          <a href="/duz-soket-corap" class="fl col-12"
                            >Düz Soket Çorap</a
                          >
                        </li>
                      </ul>
                      <ul class="col p-left col-3">
                        <li class="fl col-12">
                          <a href="/fitilli-soket-corap" class="fl col-12"
                            >Fitilli Soket Çorap</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <!-- <li class="fl drop-down hover parentLink"><span class="fl d-flex drop-down-title"><a class="fl" lang="tr" href="/denim">Denim</a></span>
<div class="pos-a pos-top pos-left pos-right box p-left whiteBg box-border b-top subMenu top">
<div class="inner">
<div class="box col-12 dynamicMenu p-left">
<ul class="col col-12">
<li class="fl col-12"><a href="/pantolon" class="fl col-12">Jean</a></li>
<li class="fl col-12"><a href="/ceket" class="fl col-12">Ceket</a></li>
<li class="fl col-12"><a href="/gomlek" class="fl col-12">Gömlek</a></li>
</ul>
</div>
</div>
</div>
</li>-->
          </ul>
        </nav>
        <div class="col col-12">
          <div id="mobileSearch" class="fl col-12"></div>
        </div>
      </div>
      <!--<div class="col col-12">
<div class="row ease forDesktop" id="headerBottom">
<div class="inner">
<div class="fl col-12">
<div class="col col-12 text-center text-upper">50 TL ve Üzeri Alışverişlerde KARGO ÜCRETSİZ!</div>
<span class="fr close-btn"></span>
</div>
</div>
</div>
</div>-->
    </div>
  </header>
</template>

<style scoped>
.col-12 {
  width: 100%;
}
html,
body,
div,
span,
applet,
object,
iframe,
p,
a,
abbr,
acronym,
address,
big,
cite,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
tt,
var,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
div {
  display: block;
}
.HeaderInner {
  width: 100%;
}
.flexwrap {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
.box,
.col {
  float: left;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
}
:not(#mainMenu) > .menu,
:not(#mainMenu) > .menu div:not(.dynamicMenu) {
  background-color: inherit;
}
:not(#mainMenu) > .menu {
  position: relative;
}
.menu-list {
  z-index: 33;
}
.menu li {
  float: left;
}
[dir='rtl'] .menu li {
  float: right;
}
.menu a {
  float: left;
  box-sizing: border-box;
}
[dir='rtl'] .menu a {
  float: right;
}
.menu li.parentLink > a {
  padding-right: 40px;
  background-image: url('/theme/v4-freshscarfs/sub_theme/ust/firat/user_v4yeni/selectArrow.png');
  background-repeat: no-repeat;
  background-position: right center;
}
[dir='rtl'] .menu li.parentLink > a {
  padding-right: 20px;
  padding-left: 40px;
  background-position: 10px center;
}
.menu li.parentLink > ul {
  position: absolute;
  top: 100%;
  left: 0;
  width: 200px;
  display: none;
}
.subMenu .dynamicMenu {
  background: #fff;
}
[dir='rtl'] .menu li.parentLink > ul {
  right: 0;
  left: auto;
}
.menu li.parentLink li a {
  width: 100%;
}
#mainMenu {
  border-radius: 0;
}
#mainMenu .menu > li.hover:hover a:after {
  content: '';
  border-color: #ff000000 #00800000 #000000 #ffa50000;
  border-style: solid;
  border-width: 9px;
  width: 0;
  height: 0;
  display: block;
  position: absolute;
  top: 26px;
  z-index: 3333;
  left: 41%;
}
#mainMenu .menu > li.hover:hover .subMenu a:after {
  border: none;
}
.menu li.parentLink li.parentLink ul {
  float: left;
  position: relative;
  box-sizing: border-box;
  border-left: 10px solid #dedede;
}
[dir='rtl'] .menu li.parentLink li.parentLink ul {
  float: right;
  border-right: 10px solid #dedede;
  border-left: 0;
}
nav#mainMenu a {
  -webkit-transition-duration: 0s;
  -moz-transition-duration: 0s;
  -ms-transition-duration: 0s;
  -o-transition-duration: 0s;
  transition-duration: 0s;
}
#headerMain.flexwrap {
  align-items: center;
  -webkit-box-align: center;
  -moz-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
}
#headerMain {
  padding-top: 20px;
  padding-bottom: 20px;
}
#logo {
  margin-right: 8.33333333%;
}
.col-3 {
  width: 25%;
}
.box,
.col {
  float: left;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
}
.ease,
.btn,
.form-control,
a,
input,
select,
textarea,
button {
  -webkit-transition-duration: 0.2s;
  -moz-transition-duration: 0.2s;
  -ms-transition-duration: 0.2s;
  -o-transition-duration: 0.2s;
  transition-duration: 0.2s;
  font-family: 'Poppins', sans-serif !important;
}

#logo a {
  float: left;
  width: 100%;
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
#logo img {
  display: inherit;
  max-height: 100%;
  max-width: 100%;
  width: auto;
}
#logo img {
  -webkit-transition-timing-function: cubic-bezier(0.2, 0.02, 0.2, 1);
  -moz-transition-timing-function: cubic-bezier(0.2, 0.02, 0.2, 1);
  -ms-transition-timing-function: cubic-bezier(0.2, 0.02, 0.2, 1);
  -o-transition-timing-function: cubic-bezier(0.2, 0.02, 0.2, 1);
  transition-timing-function: cubic-bezier(0.2, 0.02, 0.2, 1);
  -webkit-transition-duration: 0.5s;
  -moz-transition-duration: 0.5s;
  -ms-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
  transition-duration: 0.5s;
}
img {
  max-width: 100%;
  height: auto;
}
p {
  padding-bottom: 10px;
  line-height: 1.3;
}
.col-4 {
  width: 33.33333333%;
}

#headerRight.flexwrap {
  position: relative;
}
#headerRight.flexwrap {
  justify-content: flex-end;
  -webkit-justify-content: flex-end;
}
.p-right,
.box.p-right,
.col.p-right,
.btn.p-right {
  padding-right: 0;
}
.fr,
.btn.fr,
.col.fr,
.box.fr {
  float: Right;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
.menu.flexwrap {
  justify-content: center;
  -webkit-justify-content: center;
  position: relative;
}
ol,
ul {
  list-style-type: none;
}
</style>
<script>
export default {
  data: () => {
    return {}
  },
  created() {},
  computed: {
    basket() {
      return this.$store.getters['basket/getBasketItems']
    },
    totalBasketItemCount() {
      let count = 0
      for (let i = 0; i < this.basket.length; i++) {
        count += this.basket[i].count
      }
      return count
    },
  },
  methods: {},
}
</script>
