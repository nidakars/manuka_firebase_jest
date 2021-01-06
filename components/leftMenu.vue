--MANUKA 9 COMPONENT--
<template>
  <aside class="col col-2 col-md-3 col-sm-12 p-left" id="leftColumn">
    <!--cache--><link
      rel="stylesheet"
      property="stylesheet"
      type="text/css"
      href="https://www.manuka.com.tr/theme/v4-freshscarfs/sub_theme/blok_kategori/firat/v4/AkordeonMenuFirat.css"
    />
    <div class="col col-12">
      <div class="row mb">
        <div class="box col-12 AcerdeonContent">
          <div class="col col-12 btn-upper col-title AcerdeonBoxTitle">
            KATEGORİLER
          </div>
          <div class="col col-12 AcerdeonBox">
            <div class="row">
              <ul class="fl col-12 catMenu">
                <li>
                  <a href="https://www.manuka.com.tr/indirim">İNDİRİM</a>
                </li>
                <li>
                  <a
                    href="https://www.manuka.com.tr/yeni-232"
                    class="fw700 active"
                    >YENİ</a
                  >
                </li>
                <li>
                  <a href="https://www.manuka.com.tr/makaron-renkleri"
                    >MAKARON RENKLERİ</a
                  >
                </li>
                <li>
                  <a href="https://www.manuka.com.tr/avantajli-fiyatlar"
                    >AVANTAJLI FİYATLAR</a
                  >
                </li>
                <li>
                  <a href="https://www.manuka.com.tr/cok-satanlar"
                    >Çok Satanlar</a
                  >
                </li>
                <li>
                  <a href="https://www.manuka.com.tr/naturel-koleksiyonu"
                    >Naturel KOLEKSİYONU</a
                  >
                </li>
                <li>
                  <a href="https://www.manuka.com.tr/beyaz-gomlek-koleksiyonu"
                    >BEYAZ GÖMLEK KOLEKSİYONU</a
                  >
                </li>
                <li>
                  <a href="https://www.manuka.com.tr/toprak-tonlari-koleksiyonu"
                    >Toprak Tonları KOLEKSİYONU</a
                  >
                </li>
                <li>
                  <a href="https://www.manuka.com.tr/renkli-kis-koleksiyonu"
                    >Renkli Kış Koleksiyonu</a
                  >
                </li>
                <li class="parent" @click="giyim = !giyim">
                  <span>GİYİM</span>
                  <ul v-if="giyim" class="box col-12 line-top">
                    <li>
                      <a href="https://www.manuka.com.tr/yelek">Yelek</a>
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/kaban-333">Kaban</a>
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/mont-334">Mont</a>
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/yagmurluk-327"
                        >Yağmurluk</a
                      >
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/trenchkot">Trençkot</a>
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/denim">Denim</a>
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/ceket-339">Ceket</a>
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/triko-325">Triko</a>
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/hirka-332">Hırka</a>
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/kazak-323">Kazak</a>
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/suveter">Süveter</a>
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/sweatshirt-338"
                        >Sweatshirt</a
                      >
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/gomlek-329">Gömlek</a>
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/tunik">Tunik</a>
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/basic-328">Basic</a>
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/kimono">Kimono</a>
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/t-shirt-324"
                        >T-Shirt</a
                      >
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/elbise-322">Elbise</a>
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/salopet">Salopet</a>
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/jean-336">Jean</a>
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/pantolon-335"
                        >Pantolon</a
                      >
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/etek-337">Etek</a>
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/sweatshirt-takim"
                        >Sweatshirt Takım</a
                      >
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/esofman-takim"
                        >Eşofman Takım</a
                      >
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/takim-331">Takım</a>
                    </li>
                    <li>
                      <a
                        href="https://www.manuka.com.tr/giyim-316"
                        class="fw700"
                        >Tümünü gör »</a
                      >
                    </li>
                  </ul>
                </li>
                <li class="parent" @click="canta = !canta">
                  <span>Çanta</span>
                  <ul v-if="canta" class="box col-12 line-top">
                    <li>
                      <a href="https://www.manuka.com.tr/bez-canta"
                        >Kanvas Çanta</a
                      >
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/deri-canta"
                        >Deri Çanta</a
                      >
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/everyday-bag"
                        >Everyday Bag</a
                      >
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/sirt-cantasi"
                        >Sırt Çantası</a
                      >
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/suni-kurk"
                        >Suni Kürk</a
                      >
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/canta-340"
                        >Bez Çanta</a
                      >
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/cuzdan">Cüzdan</a>
                    </li>
                    <li>
                      <a
                        href="https://www.manuka.com.tr/canta-317"
                        class="fw700"
                        >Tümünü gör »</a
                      >
                    </li>
                  </ul>
                </li>
                <li @click="aksesuar = !aksesuar" class="parent">
                  <span>Aksesuar</span>
                  <ul v-if="aksesuar" class="box col-12 line-top">
                    <li>
                      <a href="https://www.manuka.com.tr/defter">Defter</a>
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/bileklik">Bileklik</a>
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/yaka">Yaka</a>
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/kolye-320">Kolye</a>
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/kemer-321">Kemer</a>
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/sapka">Şapka</a>
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/semsiye">Şemsiye</a>
                    </li>
                    <li>
                      <a
                        href="https://www.manuka.com.tr/aksesuar-235"
                        class="fw700"
                        >Tümünü gör »</a
                      >
                    </li>
                  </ul>
                </li>
                <li @click="ayakkabi = !ayakkabi" class="parent">
                  <span>Ayakkabı</span>
                  <ul v-if="ayakkabi" class="box col-12 line-top">
                    <li>
                      <a href="https://www.manuka.com.tr/postal-341">Postal</a>
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/snikers">Sneakers</a>
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/bot-343">Bot</a>
                    </li>
                    <li>
                      <a
                        href="https://www.manuka.com.tr/ayakkabi-318"
                        class="fw700"
                        >Tümünü gör »</a
                      >
                    </li>
                  </ul>
                </li>
                <li @click="kilif = !kilif" class="parent">
                  <span>Telefon Kılıfı</span>
                  <ul v-if="kilif" class="box col-12 line-top">
                    <li>
                      <a href="https://www.manuka.com.tr/6/6s-373">6/6S</a>
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/6-plus">6 PLUS</a>
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/7/8">7/8</a>
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/7/8-plus">7/8 PLUS</a>
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/x/xs">X/XS</a>
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/xs-max">XS MAX</a>
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/xr">XR</a>
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/11">11</a>
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/11-pro">11 PRO</a>
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/11-pro-max"
                        >11 PRO MAX</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://www.manuka.com.tr/telefon-kilifi-366"
                        class="fw700"
                        >Tümünü gör »</a
                      >
                    </li>
                  </ul>
                </li>
                <li @click="corap = !corap" class="parent">
                  <span>Çorap</span>
                  <ul v-if="corap" class="box col-12 line-top">
                    <li>
                      <a href="https://www.manuka.com.tr/kutulu-corap"
                        >Kutulu Çorap</a
                      >
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/duz-soket-corap"
                        >Düz Soket Çorap</a
                      >
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/fitilli-soket-corap"
                        >Fitilli Soket Çorap</a
                      >
                    </li>
                    <li>
                      <a href="https://www.manuka.com.tr/desenli-soket-corap"
                        >Desenli Soket Çorap</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://www.manuka.com.tr/corap-319"
                        class="fw700"
                        >Tümünü gör »</a
                      >
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Lmenu',
  components: {},
  data() {
    return {
      giyim: false,
      canta: false,
      aksesuar: false,
      ayakkabi: false,
      kilif: false,
      corap: false,
    }
  },
}
</script>

<style scoped>
.menu {
  padding-top: 90px;
  align-content: left;
  text-align: left;
  list-style: none;
}
.menu a {
  display: flex;
  padding: 10px;
  color: rgb(105, 105, 105);
  text-decoration: none;
}
.menu li {
  display: auto;
  padding: 0px;
  background: white;
  color: rgb(105, 105, 105);
}
</style>
