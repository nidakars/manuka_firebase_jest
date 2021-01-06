<template>
  <div class="contentWrapper col col-12" id="oneCol">
    <div id="content" class="row">
      <div class="inner">
        <div id="mainColumn" class="fl col-12">
          <div class="AnasayfaSlider">
            <div class="col col-12">
              <div class="row mb">
                <div
                  class="fl col-12 owl-carousel owl-carousel2029 owl-theme owl-loaded owl-drag"
                  style="width: 1600px"
                >
                  <div class="owl-stage-outer" style="width: 1600px">
                    <div class="owl-stage" style="width: 800px">
                      <div
                        v-for="i in [currentIndex]"
                        :key="i"
                        class="owl-item"
                        style="width: 1600px"
                      >
                        <div class="item">
                          <a title="" class="fl col-12">
                            <img alt="" :src="currentImg" class="fl col-12" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="owl-nav">
                    <div class="owl-prev" @click="prev"></div>
                    <div class="owl-next" @click="next"></div>
                  </div>
                  <div class="owl-dots disabled"></div>
                </div>
              </div>
            </div>
          </div>
          <center>
            <div class="AnaBannerSatir inner flexwrap">
              <a href="/yeni-soft-kis-renkleri" class="IkiliBannerSol fl"
                ><img
                  src="//www.manuka.com.tr/Data/EditorFiles/manuka_yeni/renklik%C4%B1s-son.jpg"
                  alt="renklikıs-son.jpg (176 KB)"
                  width="880"
                  height="941"
                  caption="false"
              /></a>
              <a href="/kahvenin-her-tonu" class="IkiliBannerSag fl"
                ><img
                  src="//www.manuka.com.tr/Data/EditorFiles/manuka_yeni/topraktonlar%C4%B1-son.jpg"
                  alt="topraktonları-son.jpg (141 KB)"
                  width="880"
                  height="941"
                  caption="false"
              /></a>
            </div>
          </center>
          <center>
            <div class="AnaBannerSatir col-12 fl">
              <a href="/beyaz-gomlek-koleksiyonu"
                ><img
                  src="https://img.manuka.com.tr/Data/EditorFiles/manuka_yeni/beyaz_gomlek/1-1.jpg"
                  alt="1-1.jpg (117 KB)"
                  width="1920"
                  height="865"
                  caption="false"
              /></a>
            </div>
            <div class="AnaBannerSatir col-12 fl">
              <a href="/beyaz-gomlek-koleksiyonu"
                ><img
                  src="https://img.manuka.com.tr/Data/EditorFiles/manuka_yeni/beyaz_gomlek/2.jpg"
                  alt="2.jpg (85 KB)"
                  width="1546"
                  height="860"
                  caption="false"
              /></a>
            </div>
            <br />
            <div class="AnaBannerSatir col-12 fl">
              <a href="/beyaz-gomlek-koleksiyonu"
                ><img
                  src="https://img.manuka.com.tr/Data/EditorFiles/manuka_yeni/beyaz_gomlek/4.jpg"
                  alt="4.jpg (112 KB)"
                  width="1545"
                  height="1027"
                  caption="false"
              /></a>
            </div>
            <br />
            <div class="AnaBannerSatir col-12 fl">
              <a href="/beyaz-gomlek-koleksiyonu"
                ><img
                  src="//www.manuka.com.tr/Data/EditorFiles/manuka_yeni/7.jpg"
                  alt="7.jpg (121 KB)"
                  width="1920"
                  height="939"
                  caption="false"
              /></a>
            </div>
          </center>
          <center>
            <div class="AnaBannerSatir col-12 fl">
              <a href="/yeni-232"
                ><img
                  src="https://img.manuka.com.tr/Data/EditorFiles/manuka_yeni/renklii.jpg"
                  alt="renklii.jpg (279 KB)"
                  width="1920"
                  height="716"
                  caption="false"
              /></a>
            </div>
            <div class="AnaBannerSatir col-12 fl">
              <div class="inner flexwrap AnaYeniSezonSatir">
                <div class="AnaYeniSezonSol fl col-sm-12">
                  <a href="/kaban-333"
                    ><img
                      src="https://img.manuka.com.tr/Data/EditorFiles/manuka_yeni/1gorsel-2.jpg"
                      alt="1gorsel-2.jpg (201 KB)"
                      width="675"
                      height="898"
                      caption="false"
                  /></a>
                </div>
                <div class="AnaYeniSezonSag fr col-sm-12">
                  <a href="/kaban-333">
                    <span class="col-12 fl text-center AnaTextBaslik"
                      >YENİ<br />SEZON</span
                    >
                    <span class="col-12 fl"
                      ><img
                        src="https://img.manuka.com.tr/Data/EditorFiles/manuka_yeni/2gorsel-2.jpg"
                        alt="2gorsel-2.jpg (52 KB)"
                        width="675"
                        height="655"
                        caption="false" /></span
                  ></a>
                </div>
              </div>
            </div>
            <div class="AnaBannerSatir col-12 fl">
              <a href="/sweatshirt-338"
                ><img
                  src="https://img.manuka.com.tr/Data/EditorFiles/manuka_yeni/1.jpg"
                  alt="1.jpg (281 KB)"
                  width="1920"
                  height="1578"
                  caption="false"
              /></a>
            </div>
            <div class="AnaBannerSatir col-12 fl">
              <div class="inner flexwrap AnaTrenckotSatir">
                <div class="AnaTrenckotSol fl col-sm-12">
                  <a href="/trenchkot">
                    <span class="col-12 fl text-center AnaTextBaslik"
                      >TRENÇKOT</span
                    >
                    <span class="col-12 fl text-center AnaTextAciklama"
                      >Her mevsimde rahatlıkla<br />kullanabileceğin zamansız<br />trençkot
                      koleksiyonunu incele.</span
                    >
                    <span class="col-12 fl"
                      ><img
                        src="https://img.manuka.com.tr/Data/EditorFiles/manuka_yeni/1gorsel.jpg"
                        alt="1gorsel.jpg (176 KB)"
                        width="675"
                        height="900"
                        caption="false" /></span
                  ></a>
                </div>
                <div class="AnaTrenckotSag fr col-sm-12">
                  <a href="/trenchkot"
                    ><img
                      src="https://img.manuka.com.tr/Data/EditorFiles/manuka_yeni/2gorsel.jpg"
                      alt="2gorsel.jpg (204 KB)"
                      width="675"
                      height="1323"
                      caption="false"
                  /></a>
                </div>
              </div>
            </div>
            <div class="AnaBannerSatir col-12 fl">
              <div class="inner flexwrap AnaTrikoSatir">
                <div class="AnaTrikoSol fl col-sm-12">
                  <a href="/triko-325">
                    <span class="col-12 fl"
                      ><img
                        src="https://img.manuka.com.tr/Data/EditorFiles/manuka_yeni/1gorsel-1.jpg"
                        alt="1gorsel-1.jpg (135 KB)"
                        width="675"
                        height="606"
                        caption="false"
                    /></span>
                    <span class="col-12 fl text-center AnaTextBaslik"
                      >TRİKOLAR</span
                    >
                    <span class="col-12 fl text-center AnaTextAciklama"
                      >Senin için yaz sezonuyla<br />özdeşleşmiş renkleri kış<br />parçalarıyla
                      birleştirdik.</span
                    >
                  </a>
                </div>
                <div class="AnaTrikoSag fr col-sm-12">
                  <a href="/triko-325"
                    ><img
                      src="https://img.manuka.com.tr/Data/EditorFiles/manuka_yeni/2gorsel-1.jpg"
                      alt="2gorsel-1.jpg (188 KB)"
                      width="675"
                      height="900"
                      caption="false"
                  /></a>
                </div>
              </div>
            </div>
            <div class="AnaBannerSatir col-12 fl">
              <a href="/aksesuar-235"
                ><img
                  src="https://img.manuka.com.tr/Data/EditorFiles/manuka_yeni/corapp.jpg"
                  alt="corapp.jpg (232 KB)"
                  width="1920"
                  height="964"
                  caption="false"
              /></a>
            </div>
            <div class="AnaBannerSatir col-12 fl">
              <div class="inner flexwrap AnaCantaSatir">
                <div class="AnaCantaSol fl col-sm-12">
                  <a href="/aksesuar-235"
                    ><span class="col-12 fl"
                      ><img
                        src="https://img.manuka.com.tr/Data/EditorFiles/manuka_yeni/1gorsel-3.jpg"
                        alt="1gorsel-3.jpg (157 KB)"
                        width="675"
                        height="900"
                        caption="false" /></span
                  ></a>
                </div>
                <div class="AnaCantaSag fr col-sm-12">
                  <a href="/aksesuar-235">
                    <span class="col-12 fl"
                      ><img
                        src="https://img.manuka.com.tr/Data/EditorFiles/manuka_yeni/2gorsel-3.jpg"
                        alt="2gorsel-3.jpg (120 KB)"
                        width="675"
                        height="724"
                        caption="false"
                    /></span>
                    <span class="col-12 fl text-center AnaTextAciklama"
                      >Görünümünü tamamlayacak<br />rengarenk çanta ve
                      çoraplar.</span
                    >
                  </a>
                </div>
              </div>
            </div>
          </center>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slider',
  data() {
    return {
      images: [
        'https://img.manuka.com.tr/Data/GorselVitrin/K3/kamppc.jpg',
        'https://img.manuka.com.tr/Data/GorselVitrin/K3/inn1.jpg',
        'https://img.manuka.com.tr/Data/GorselVitrin/K3/inn4.jpg',
        'https://img.manuka.com.tr/Data/GorselVitrin/K3/n3.jpg',
      ],
      timer: null,
      currentIndex: 0,
    }
  },

  mounted: function () {
    this.startSlide()
  },

  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 4000)
    },

    next: function () {
      this.currentIndex += 1
    },
    prev: function () {
      this.currentIndex -= 1
    },
  },

  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length]
    },
  },
}
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
}

.HomePage #content > .inner * {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
.owl-theme .owl-nav {
  margin-top: 10px;
}
.owl-theme .owl-dots,
.owl-theme .owl-nav {
  text-align: center;
  -webkit-tap-highlight-color: transparent;
}
.owl-theme .owl-nav {
  margin: 0 !important;
}
.owl-theme .owl-nav {
  position: absolute;
  top: calc(50% - 15px);
  left: 20px;
  width: calc(100% - 40px);
  height: 0;
  margin-top: 0;
}
.owl-theme .owl-nav [class*='owl-'] {
  color: #fff;
  font-size: 14px;
  margin: 5px;
  padding: 4px 7px;
  background: #d6d6d6;
  display: inline-block;
  cursor: pointer;
  border-radius: 3px;
}
.owl-carousel .owl-dot,
.owl-carousel .owl-nav .owl-next,
.owl-carousel .owl-nav .owl-prev {
  cursor: pointer;
  cursor: hand;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.owl-carousel .owl-nav .owl-prev {
  float: left;
}
.owl-theme .owl-nav [class*='owl-'] {
  width: 17px;
  height: 32px;
  text-indent: -9999em;
  padding: 0;
  background-color: transparent;
  background: url(https://img.manuka.com.tr/Data/EditorFiles/tema/img/arrows-2.png) !important;
  background-repeat: no-repeat;
  margin: 0;
  overflow: hidden;
  cursor: pointer;
}
.owl-theme .owl-nav [class*='owl-'] {
  color: #fff;
  font-size: 14px;
  margin: 5px;
  padding: 4px 7px;
  background: #d6d6d6;
  display: inline-block;
  cursor: pointer;
  border-radius: 3px;
}
.owl-carousel .owl-dot,
.owl-carousel .owl-nav .owl-next,
.owl-carousel .owl-nav .owl-prev {
  cursor: pointer;
  cursor: hand;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.owl-theme .owl-nav [class*='owl-'] {
  width: 17px;
  height: 32px;
  text-indent: -9999em;
  padding: 0;
  background-color: transparent;
  background: url(https://img.manuka.com.tr/Data/EditorFiles/tema/img/arrows-2.png) !important;
  background-repeat: no-repeat;
  margin: 0;
  overflow: hidden;
  cursor: pointer;
}
.owl-carousel .owl-nav .owl-next {
  float: right;
  background-position: right 0 !important;
}
.owl-theme .owl-dots,
.owl-theme .owl-nav {
  text-align: center;
  -webkit-tap-highlight-color: transparent;
}
::selection {
  background: #000;
  color: #fff;
}
::-webkit-scrollbar-thumb {
  background: #4d4d4d;
  border-radius: 5px;
}
::-webkit-scrollbar-button {
  display: none;
}
</style>
