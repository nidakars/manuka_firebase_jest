--MANUKA 1 COMPONENT--
<template>
  <div>
    <div id="productDetail" class="row mb">
      <div class="fl col-12" id="pageContent">
        <link
          rel="stylesheet"
          type="text/css"
          href="https://img.manuka.com.tr/theme/standart/js/gorsel_vitrin/owl/assets/owl.animate.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://img.manuka.com.tr/theme/standart/js/gorsel_vitrin/owl/assets/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://img.manuka.com.tr/theme/standart/js/gorsel_vitrin/owl/assets/owl.theme.default.min.css"
        />

        <!-- #pageContent = Sayfa içinde belirli bir div i popup olarak açmak istediğimizde bu div içerisinden yükleniyor. Hızlı görünüm için gerekli. -->
        <div class="box col-12">
          <div class="row">
            <div class="col col-8 col-md-12 p-left" id="productLeft">
              <div class="fl col-12">
                <div class="col col-12">
                  <div class="row mb loaderWrapper">
                    <ul
                      id="productImage"
                      class="fl col-12"
                      v-if="typeof product.image !== 'string'"
                    >
                      <li
                        class="col-6 col-sm-12 fl"
                        v-for="productImage in product.image"
                        :key="'productimage' + productImage"
                      >
                        <a
                          data-id="13403"
                          href="javascript:;"
                          data-lightbox="product"
                          data-index="0"
                          class="image-wrapper fl"
                          data-href="https://img.manuka.com.tr/ekose-astarli-ceket-mavi-ceket-0-13403-33-B.jpg"
                          data-standard="https://img.manuka.com.tr/ekose-astarli-ceket-mavi-ceket-0-13403-33-B.jpg"
                        >
                          <span class="imgInner">
                            <img
                              :src="productImage"
                              alt="EKOSE ASTARLI CEKET MAVİ"
                              title="EKOSE ASTARLI CEKET MAVİ"
                            />
                          </span>
                        </a>
                      </li>
                      <!-- <div class="col-12 slideControl">
<span id="prevImage" class="fl colPrev icon-arrow-left icon-no-space icon-custom-gray"></span>
<span id="nextImage" class="fr colNext icon-arrow-right icon-no-space icon-custom-gray"></span>
</div>
-->
                    </ul>
                    <ul id="productImage" class="fl col-12" v-else>
                      <li class="col-6 col-sm-12 fl">
                        <a
                          data-id="13403"
                          href="javascript:;"
                          data-lightbox="product"
                          data-index="0"
                          class="image-wrapper fl"
                          data-href="https://img.manuka.com.tr/ekose-astarli-ceket-mavi-ceket-0-13403-33-B.jpg"
                          data-standard="https://img.manuka.com.tr/ekose-astarli-ceket-mavi-ceket-0-13403-33-B.jpg"
                        >
                          <span class="imgInner">
                            <img
                              :src="product.image"
                              alt="EKOSE ASTARLI CEKET MAVİ"
                              title="EKOSE ASTARLI CEKET MAVİ"
                            />
                          </span>
                        </a>
                      </li>
                      <!-- <div class="col-12 slideControl">
<span id="prevImage" class="fl colPrev icon-arrow-left icon-no-space icon-custom-gray"></span>
<span id="nextImage" class="fr colNext icon-arrow-right icon-no-space icon-custom-gray"></span>
</div>
-->
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="box col-4 col-md-12 p-top loaderWrapper"
              id="productRight"
            >
              <div class="productRightSticky col-12 fl">
                <div class="box col-12 p-top" id="productMobileInfo">
                  <div class="row">
                    <div class="fl col-12" id="productInfo">
                      <h1
                        class="fl col-12 productTitle"
                        id="productName"
                        data-id="3334"
                      >
                        {{ product.title }}
                      </h1>
                      <div class="fl col-12 subCode">
                        Ürün Kodu : M- {{ product.id }}
                      </div>
                    </div>
                    <div
                      class="fl col-12"
                      id="product-price-ekose-astarli-ceket-mavi"
                      itemprop="offers"
                      itemscope=""
                      itemtype="http://schema.org/Offer"
                    >
                      <span itemprop="priceCurrency" content="TRY"></span>
                      <span itemprop="price" content="219.899988"></span>
                      <span
                        itemprop="availability"
                        content="https://schema.org/InStock"
                      ></span>
                      <span itemprop="itemCondition" content="new"></span>
                      <div class="box col-12 double mainPrices">
                        <div class="row priceLine">
                          <div class="pos-r fl col-12 d-flex" id="price-flexer">
                            <div class="fl col-sm-12 d-flex">
                              <div
                                class="fl text-line currencyPrice discountedPrice pr"
                                data-old="0"
                              >
                                <span
                                  class="product-price-not-discounted"
                                  data-price="329,90"
                                  >{{ product.oldprice }}</span
                                >
                                TL
                              </div>
                              <div
                                class="fl discountPrice indirimliRed"
                                data-old="0"
                              >
                                <span
                                  class="product-price"
                                  data-price="296,91"
                                  >{{ product.price }}</span
                                >
                                TL
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  type="hidden"
                  name="subPro3334"
                  id="subPro3334"
                  value="0"
                />
                <div class="variantOverlay" data-id="3334"></div>
                <div class="col col-12 variantWrapper tooltipWrapper">
                  <div class="row">
                    <textarea id="json3334" class="hideThis">
{"vat":8,"m_o_p":0,"variant_ids":{"186_146":"3315","186_145":"3316"},"variant_prices":{"186_146":"203.6111","186_145":"203.6111"},"variant_price_raws":{"186_146":203.611099999999993315213941968977451324462890625,"186_145":203.611099999999993315213941968977451324462890625},"buying_prices":{"186_146":"0","186_145":"0"},"not_discounted_prices":{"186_146":203.611099999999993315213941968977451324462890625,"186_145":203.611099999999993315213941968977451324462890625},"variant_supplier_codes":{"186_146":"","186_145":""},"active_ids":{"one_186":["146","145"],"two_146":["186"],"two_145":["186"]},"variant_stocks":{"186_146":"109","186_145":"8"}}</textarea
                    >
                    <div class="row mb variantLine">
                      <div class="fl col-12 variantBox subOne" data-order="1">
                        <div
                          class="pos-r fl box col-12 ease variantList p-right"
                        >
                          <a
                            data-id="186"
                            data-group-id="1"
                            data-target="3334"
                            class="col selected"
                          >
                            <p>{{ product.color }}</p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="flexwrap VariantSize col-12 fl">
                      <div class="fl col-12 variantLine">
                        <div class="fl col-12 d-flex">
                          <div
                            class="box col-12 variantBox subTwo"
                            data-order="2"
                          >
                            <div class="pos-r fl col-12 ease variantList">
                              <a
                                v-for="items in product.size"
                                :key="items.size"
                                data-id="146"
                                data-group-id="2"
                                data-target="3334"
                                class="col"
                                @click="size = 'items'"
                                :class="size === 'items' ? 'selected' : ' '"
                              >
                                <p>{{ items }}</p>
                                <span class=""></span>

                                <div class="hide BedenTooltip">Son Ürünler</div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="otherColorProducts"
                  class="fl col-12 mb angularTemplate"
                  data-url="/srv/service/product/get-related-products/3334/1"
                  data-callback="otherColorFunc"
                  style="visibility: visible"
                ></div>
                <div class="box col-12 p-top">
                  <div class="row mb tooltipWrapper">
                    <input
                      type="hidden"
                      id="IS_STOCK_NOTIFICATION_SUBPRODUCT"
                      value="1"
                    />
                    <div
                      class="subProductStockAlert outStock"
                      style="display: none"
                    >
                      <a
                        data-width="500"
                        data-url="/srv/service/customer/login-form"
                        class="popupWin box productFunction popupHide priceAlertLink"
                        >Stoğa gelince haber ver</a
                      >
                    </div>
                    <div class="fl col-12 inStock">
                      <div class="fl col-12">
                        <div class="fl col-12" id="cart-wrapper">
                          <div class="col col-12 p-left productType">Adet:</div>
                          <div class="box col-4 col-xs-12 p-left qtyBox">
                            <div class="fl col-12">
                              <div
                                class="fl col-sm-12 qtyBtns"
                                data-increment="1"
                              >
                                <a
                                  title="-"
                                  data-id="3334"
                                  class="col-4 d-flex"
                                >
                                  <p
                                    class="fl col-12 icon-minus icon-no-space text-center p-bottom"
                                  ></p>
                                </a>
                                <input
                                  type="text"
                                  id="Adet3334"
                                  name="Adet3334"
                                  value="1 Adet"
                                  class="col-4 detayAdet3334"
                                />
                                <a
                                  title="+"
                                  data-id="3334"
                                  class="col-4 d-flex"
                                >
                                  <p
                                    class="fl col-12 icon-plus icon-no-space text-center p-bottom"
                                  ></p>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="fl" id="mobileBuyBtn">
                            <div class="fl col-12 buyBtn">
                              <a
                                class="col-12 fl"
                                id="addCartBtn"
                                href="/sepetEkle"
                                @click="addBasket"
                              >
                                Sepete Ekle
                              </a>
                            </div>
                          </div>
                          <div class="fl FavoriBtn">
                            <a
                              data-width="500"
                              data-url="/srv/service/customer/login-form"
                              class="popupWin box popupHide shopListLink favoriteBtn"
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="DetayButons col-12 fl">
                      <div class="DetayWp fl">
                        <a
                          href="https://api.whatsapp.com/send?phone=905525991550&amp;text=Sipariş vermek istiyorum, Ürün Adı : EKOSE ASTARLI CEKET MAVİ, Ürün Linki : https://www.manuka.com.tr/ekose-astarli-ceket-mavi"
                          target="_blank"
                          rel="nofollow"
                          class="box"
                          ><span>Whatsapp ile<br />Sipariş Ver</span></a
                        >
                      </div>
                      <!--<div class="DetayHbrBtn fl">
<a data-width="500" data-url="/srv/service/customer/login-form" class="popupWin box popupHide priceAlertLink" id="priceAlertLink"><span>İndirime Girince<br>Haber Ver</span></a>
</div>-->
                    </div>
                    <div class="fl col-12 DetaySosyalMedya">
                      <div class="smlIconSet col p-left">
                        <div class="col p-left shareTitle">Paylaş :</div>
                        <div class="fl shareBtns">
                          <div class="col p-left">
                            <a
                              id="fbShareBtn"
                              target="_blank"
                              rel="nofollow"
                            ></a>
                          </div>
                          <div class="col p-left">
                            <a
                              id="twBtn"
                              target="_blank"
                              rel="nofollow"
                              href="http://twitter.com/share?text=EKOSE ASTARLI CEKET MAVİ&amp;url=https://www.manuka.com.tr/ekose-astarli-ceket-mavi"
                            ></a>
                          </div>
                          <div class="col p-left">
                            <a
                              rel="nofollow"
                              id="pinBtn"
                              target="_blank"
                              data-pin-log="button_pinit"
                              data-pin-href="https://tr.pinterest.com/pin/create/button?guid=reEjwN_YNop4-1&amp;url=https%3A%2F%2Fwww.manuka.com.tr%2Fekose-astarli-ceket-mavi&amp;media=undefined&amp;description=EKOSE%20ASTARLI%20CEKET%20MAV%C4%B0%20Ceket%2C%20Renkli%20K%C4%B1%C5%9F%20Koleksiyonu%2C%20Kaban%2C%20%5BKategorisiz%20%C3%9Cr%C3%BCnler%5D%2C%20%5BKategorisiz%20%C3%9Cr%C3%BCnler%5D%200"
                            ></a>
                          </div>
                          <div class="col p-left">
                            <a
                              href="whatsapp://send?text=ekose-astarli-ceket-mavi"
                              id="wpBtn"
                              target="_blank"
                              rel="nofollow"
                            ></a>
                          </div>
                        </div>
                      </div>
                      <div class="fr YerliUretim">
                        <img
                          src="https://www.manuka.com.tr/Data/EditorFiles/tema/img/yerli-uretim.png"
                          alt="Manuka yerli üretim"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="urun-tab fl col-12" id="urun-tab">
                  <div
                    class="tab-title"
                    :class="titleClasses"
                    @click="toggleActive()"
                  >
                    ÜRÜN ÖZELLİKLERİ
                  </div>
                  <div class="tab-icerik ozellik" v-show="isContentVisible">
                    <div
                      class="fl col-12"
                      id="productDetailTab"
                      itemprop="description"
                    >
                      Dokuma kumaştan, astarlı, önden düğmeli, yakalı, göğüsleri
                      cepleri kapaklı. Düşük omuzlu uzun geniş kollu etek ucu
                      yuvarlak, yan dikişleri cepli. Kaşe kumaş<br /><br />1
                      Beden: Göğüs:112 cm Kol Boyu:54 cm Ürün Boyu:108 cm<br />2
                      Beden: Göğüs:116 cm Kol Boyu:55 cm Ürün Boyu:109 cm<br /><br />*1
                      Beden 36-38 2 Beden 40-42 Beden uyumludur.
                    </div>
                  </div>
                  <div class="tab-title">TESLİMAT VE İADE</div>
                  <div class="tab-icerik" style="display: none">
                    1-İade hakkının kullanılması için 7 (yedi) günlük süre
                    içinde Satıcı’ya telefon ile whatsapp üzerinden (+0552 599
                    15 50) bildirimde bulunulması ve iade edilmek istenen Ürün
                    ve Ürünler’in işbu Sözleşmenin 6. Maddesi hükümleri
                    çerçevesinde kullanılmamış ve Satıcı tarafından tekrar
                    satışa arz edilebilir nitelikte olması şarttır.<br />
                    2- Özürlü ürünlerde (defo, yırtık) kargo Satıcıya aittir.
                    <br />
                    3- Anlaşmalı kargolarımız dışında tarafımıza gönderilen
                    kargolarınız kabul edilmez.<br />
                    4-Sadece ambalajı açılmamış, orjinalliği bozulmamış
                    ürünlerde iade mevcuttur. (Aksesurlar ve çantalar hariç)
                    İade hakkının kullanılması için 7 (yedi) günlük süre içinde
                    Satıcı’ya telefon ile whatsapp üzerinden (+0552 599 15 50)
                    bildirimde bulunulması İade istenen Ürün ve Ürünler’in işbu
                    Sözleşmenin 6. Maddesi hükümleri çerçevesinde kullanılmamış
                    ve Satıcı tarafından tekrar satışa arz edilebilir nitelikte
                    olması şarttır. <br />
                    5- Keyfi iadelerde kargo ücretleri Alıcıya aittir. <br />
                    6- ByExpress kargo ile gelen siparişlerin iadesi için en
                    yakın ByExpress şubesine bırakabilir ya da 444 61 63
                    numarasını arayarak kurye çağırabilirsiniz.<br />
                    7- Aras kargo ile gelen siparişlerin iadesi için aşağıda
                    belirtilen müşteri numarası ile birlikte en yakın Aras kargo
                    şubesine verilmesi gerekmektedir. Müşteri no: 1733844311334
                    (Kargola Taşımacılık A.ş - Kamelya Şubesi) <br />
                  </div>
                  <div
                    class="tab-title"
                    data-href="/srv/service/product-detail/payment-options/3334/0"
                    id="odemeler"
                  >
                    ÖDEME SEÇENEKLERİ
                  </div>
                  <div
                    class="tab-icerik loaderWrapper"
                    id="odeme-wrapper"
                    style="display: none"
                  ></div>
                  <div
                    class="tab-title"
                    data-href="/srv/service/content/get/1004/comment/3334"
                    id="commentTab"
                  >
                    YORUMLAR
                  </div>
                  <div
                    class="tab-icerik loaderWrapper"
                    id="yorum-wrapper"
                    style="display: none"
                  ></div>
                </div>
                <div class="fl col-12 d-none" id="cmpList">
                  <div class="box col-12" id="cmp-wrapper">
                    <div class="row">
                      <div class="box col-12">
                        <div class="row text-title text-light">Kampanya</div>
                      </div>
                      <div class="col col-12 p-right">
                        <div class="row" id="cmps"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <benzers />
  </div>
</template>

<script>
import benzers from '@/components/benzer_urunler.vue'
export default {
  name: 'ProductDetail',
  components: {
    benzers,
  },
  data() {
    return {
      isActive: false,
      count: 1,
      size: 1,
    }
  },
  created() {
    const id = this.$route.params.id
    this.$store.dispatch('product/fetchProducts')
    const parsedId = parseInt(id)
    if (parsedId != id) {
      this.$router.push({ path: 'giyim' })
    } else {
      this.$store.dispatch('product/SetProduct', parsedId)
      const product = this.$store.getters['product/getProduct']
      if (product === null || product == undefined) {
        this.$router.push({ path: 'giyim' })
        return false
      }
    }
  },
  computed: {
    isContentVisible() {
      return this.isActive
    },
    titleClasses() {
      return this.isActive ? 'active' : ''
    },
    product() {
      const product = this.$store.getters['product/getProduct']
      if (product == null) {
        this.$router.push({ path: 'giyim' })
        return product
      }
      return product
    },
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive
    },
    decsreaseCount() {
      if (this.count > 1) {
        this.count--
      }
    },

    addBasket(e) {
      const payload = {
        id: Math.random() * 1000,
        count: this.count,
        size: this.size,
        product: this.product,
      }

      this.$store.dispatch('basket/addBasket', payload)
      this.$router.push({ path: 'sepetEkle' })
    },
  },
}
</script>
