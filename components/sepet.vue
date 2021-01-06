<template>
  <div class="row mb">
    <div class="fl col-12 lightBg" id="pageHeader">
      <span class="col col-3 col-sm-12 pageTitle passed">
        <span class="row basket"> SEPET </span>
      </span>
      <span class="col col-3 col-sm-12 pageTitle">
        <span class="row address"> FATURA TESLİMAT </span>
      </span>
      <span class="col col-3 col-sm-12 pageTitle">
        <span class="row payment"> ÖDEME </span>
      </span>
      <span class="col col-3 col-sm-12 pageTitle">
        <span class="row confirm"> ONAY </span>
      </span>
    </div>
    <div class="box col-12 progress">
      <span class="fw600 a-center ease progress-bar" style="width: 25%"
        >25%</span
      >
    </div>
    <form
      name="SepetForm"
      id="SepetForm"
      class="box col-12 basketWrapper"
      action="Sepet.php"
      method="GET"
    >
      <div class="fl col-12">
        <div class="fl col-12 middleItem">
          <div class="col col-12 line-bottom dn-xs">
            <div class="box col-2 dn-xs text-description text-semibold">
              Ürün
            </div>
            <div
              class="box col-5 col-sm-5 col-xs-7 text-description text-semibold"
            >
              Ürün Adı
            </div>
            <div class="box col-2 text-description text-semibold">Adet</div>

            <div
              class="box col-2 text-description text-semibold text-center AdetFiyatBaslik"
            >
              Birim Fiyat
            </div>
            <div class="box col-1 text-description text-semibold text-right">
              Sil
            </div>
          </div>
          <div
            v-for="item in basket"
            :key="'basket' + item.id"
            class="box col-12 d-flex line-top productRow"
          >
            <div class="box col-2 col-sm-3 col-xs-4 productImg">
              <div class="col col-12">
                <div class="row">
                  <div class="fl image-wrapper">
                    <div class="imgInner">
                      <img :src="item.product.image" alt="item.product.title" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col col-5 col-sm-9 col-xs-8 productInfoRow">
              <span class="fl col-12 basketProName">
                <a
                  :href="'/urun-detay/' + item.product.id"
                  class="fl col-12 text-title text-bold text-upper dn-sm"
                ></a>

                <nuxt-link
                  :to="'/urun-detay/' + item.product.id"
                  class="fl col-12 col-sm-7 text-description"
                  target="_blank"
                >
                  >{{ item.product.title }} ( {{ item.size }} )</nuxt-link
                >

                <div class="box col-sm-5 text-center AdetFiyatBox">
                  <span class="text-custom-gray">
                    {{ item.product.price }}
                  </span>
                </div>
              </span>

              <span class="fl col-12 p-bottom dn-sm">
                <span class="row"> </span>
              </span>
            </div>
            <div class="fl col-4 col-sm-9 col-xs-8 d-flex productPrcRow">
              <div
                class="box col-6 bAdetBox"
                data-product="3296"
                data-subproduct="3245"
              >
                <div class="fl col-md-12 qtyBtns" data-increment="1">
                  <!--<a title="-" data-id="0" data-cart-id="0" data-callback="qtyChange" class="col-4 d-flex decBasketProduct">
                                        <p class="fl col-12 icon-minus icon-no-space text-center p-bottom"></p>
                                    </a>-->
                  <div class="bAdet fl">Adet :</div>
                  <input
                    type="text"
                    id="Adet0"
                    name="Adet0"
                    data-cart-id="0"
                    :value="item.count"
                    class="col-4 qty"
                  />
                  <!-- <a title="+" data-id="0" data-cart-id="0" data-callback="qtyChange" class="col-4 d-flex incBasketProduct">
                                        <p class="fl col-12 icon-plus icon-no-space text-center p-bottom"></p>
                                    </a>-->
                </div>
              </div>

              <div class="box col-6 text-center AdetFiyatBox dn-sm">
                <span class="text-custom-gray">
                  {{ item.product.price }}
                </span>
              </div>
            </div>
            <div class="box col-1 col-sm-8 mSilFavori">
              <a
                class="fr btn-custom-light-gray icon-cancel icon-small icon-no-space text-center removeBtn"
                @click="removeBasketItem(item.id)"
                alt="0"
                ><span class="mSilText"></span
              ></a>
              <input type="hidden" id="cartproduct_id" value="3296" />
            </div>
          </div>

          <input type="hidden" name="AltUrun[]" id="AltUrun[]" value="" />
        </div>

        <div class="box col-12 p-bottom">
          <div class="row">
            <div class="col col-12 line-bottom line-left">
              <div class="row" id="basketBtns">
                <a
                  href="#"
                  data-width="500"
                  data-url="/srv/service/content/get/1054/general-order-note"
                  class="NotEkle popupWin btn btn-small col-sm-6 col-xs-12 btn-custom-light-gray text-center dn-sm"
                >
                  <span>Sipariş Notu Ekle</span>
                </a>

                <a
                  class="btn btn-small col-sm-6 col-xs-12 text-center btn-custom-light-gray"
                  @click="removeBasketAll(products.id)"
                >
                  Sepeti Temizle
                </a>
                <nuxt-link
                  class="btn btn-small col-sm-6 col-xs-12 text-center btn-custom-light-gray"
                  to="giyim"
                >
                  Alışverişe Devam
                </nuxt-link>
                <!-- <a if="IS_IMAGE_ADDING_ACTIVE==1" class="btn btn-small col-sm-6 col-xs-12 text-center btn-custom-light-gray popupWin" data-url="/srv/service/content/get/1054/image-notes" data-width="500">
                                    Resim Ekle
                                </a> -->

                <a
                  data-width="500"
                  data-url="/srv/service/customer/login-form"
                  class="popupWin btn btn-small col-sm-6 col-xs-12 btn-custom-light-gray text-center"
                >
                  Alışveriş Listeme Ekle
                </a>
                <nuxt-link
                  to="/sepet"
                  onclick="if ($(this).data('disabled') == 1) {
                                            return false;
                                        }
                                        $(this).data('disabled', 1);"
                  class="btn btn-small col-sm-6 col-xs-12 btn-custom-light-gray text-center"
                  title="Sepet de herhangi bir değişiklik yaptıysanız, alışverişe devam etmeden mutlaka bu butona basıp güncelleme yapmanız gerekir."
                  id="updateBasket"
                >
                  Sepeti Güncelle
                </nuxt-link>
              </div>
            </div>
            <div class="col col-3 col-md-6 col-sm-12 fr">
              <div class="row">
                <div class="col col-12">
                  <div class="row box-border b-top">
                    <div class="box col-6 line-right">Sepet Toplamı</div>
                    <div class="box col-6 a-right">{{ subtotal }} TL</div>
                  </div>

                  <!-- HOPI -->

                  <!-- HOPI -->
                  <div class="row mb box-border b-top">
                    <div class="box col-6 line-right">Genel Toplam</div>
                    <div class="box col-6 a-right">{{ total }} TL</div>
                  </div>
                </div>

                <a class="fr" id="guzellikBtn"></a>
              </div>
            </div>
            <div class="col col-9 col-md-6 col-sm-12 CuponsBox">
              <div class="row">
                <div class="box col-12 p-bottom">
                  <div class="row" id="basketOptions">
                    <div class="col col-12 p-left">
                      <div class="col col-12">
                        <div class="row mb">
                          <label
                            for="indirimkuponu"
                            class="box col-12 form-control large lightBg"
                          >
                            <span class="btn btn-medium btn-upper col-12">
                              <span class="row text-title">
                                İndirim Kuponu
                              </span>
                            </span>
                            <span class="fl col-12">
                              <span class="col col-8 p-left">
                                <input
                                  type="text"
                                  name="indirimkuponu"
                                  id="indirimkuponu"
                                  class="fl col-12"
                                  value=""
                                />
                              </span>
                              <a
                                class="btn btn-medium btn-custom-gray text-center text-upper col-4"
                                name="indirim"
                                id="indirim"
                                >Uygula</a
                              >
                            </span>
                          </label>
                        </div>
                      </div>
                      <!-- HOPI -->

                      <!-- HOPI -->
                    </div>
                    <div class="col col-6 col-sm-12 p-left">
                      <div class="col col-12 lightBg"></div>
                    </div>
                    <!-- HOPI -->

                    <!-- HOPI -->
                    <!-- ZUBIZU -->

                    <!-- /ZUBIZU -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col col-12">
          <div class="row">
            <div class="fl col-12 d-flex" id="cart-footer">
              <div class="box col-9 col-md-6 col-sm-12 p-top p-left">
                <div class="col col-12 p-left">
                  <div class="fl col-12 danger" id="messages">
                    <div class="row"></div>
                  </div>
                </div>
                <p class="fl col-12">
                  Sepetinizde değişiklik yaptıysanız
                  <b>güncellemeyi unutmayın.</b> Ödeme ve onay sayfasına kadar
                  satın alma işleminizi <b>iptal edebilirsiniz.</b>
                </p>
              </div>
              <div class="col col-3 col-md-6 col-sm-12">
                <div class="row mb">
                  <a
                    href="/order"
                    class="btn btn-big col-12 btn-custom-pink text-center text-upper buyBtn"
                    title="Fatura ve adres bilgilerinizi girip alışverişinize devam etmek için bu butonu tıklayınız."
                    id="addCartBtn"
                  >
                    Satın Al
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

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
    subtotal() {
      let total = 0
      for (let i = 0; i < this.basket.length; i++) {
        total += this.basket[i].product.price
      }
      return total.toFixed(2)
    },
    total() {
      let total = 0
      for (let i = 0; i < this.basket.length; i++) {
        total += this.basket[i].product.price * this.basket[i].count
      }
      return total.toFixed(2)
    },
  },
  methods: {
    removeBasketItem(id) {
      this.$store.dispatch('basket/removeBasketItem', id)
    },
    removeBasketAll(id) {
      this.$store.dispatch('basket/removeBasketItem', id)
    },

    increase(id) {
      this.$store.dispatch('basket/increaseBasketItem', id)
    },
    decrease(id) {
      this.$store.dispatch('basket/decreaseBasketItem', id)
    },
  },
}
</script>
