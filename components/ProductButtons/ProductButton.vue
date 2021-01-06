<template>
  <div id="mainColumn" class="fl col-10 col-md-9 col-sm-12">
    <link rel="stylesheet" property="stylesheet" type="text/css" />

    <div class="col col-12">
      <div id="katalog" class="row">
        <div class="col col-12">
          <div class="row">
            <div class="fl col-12 catalogWrapper" id="list-slide1003">
              <div
                v-for="product in products"
                :key="'product' + product.id"
                class="col col-4 col-md-6 col-sm-12 productItem ease"
                id="1003-product-detail-ekose-astarli-ceket-mavi"
                itemscope="itemscope"
                itemtype="http://schema.org/Product"
              >
                <input type="hidden" class="myProductList" value="3334" />
                <span itemprop="url" content="ekose-astarli-ceket-mavi"></span>
                <span itemprop="name" content="EKOSE ASTARLI CEKET MAVİ"></span>
                <span itemprop="description" content=""></span>
                <span
                  itemprop="image"
                  content="https://www.manuka.com.tr/ekose-astarli-ceket-mavi-ceket-0-13403-33-K.jpg"
                ></span>
                <div class="col col-12 drop-down hover pos-r UrunListeBottom">
                  <div class="row">
                    <nuxt-link
                      :to="'/urun-detay/' + product.id"
                      class="productBtn fl zoomBtn hide"
                      >HIZLI GÖRÜNÜM</nuxt-link
                    >
                    <nuxt-link
                      :to="'/urun-detay/' + product.id"
                      class="image-wrapper fl detailLink"
                    >
                      <span class="imgInner">
                        <img
                          :src="product.image"
                          class="stImage"
                          alt=""
                          style=""
                        />
                      </span>
                    </nuxt-link>
                  </div>
                  <div class="row pInfo">
                    <div
                      class="col col-12 productDetails loaderWrapper"
                      style="height: 67px"
                    >
                      <div class="row drop-down-title">
                        <div class="box col-12">
                          <div class="row">
                            <nuxt-link
                              :to="'/urun-detay/' + product.id"
                              title="EKOSE ASTARLI CEKET MAVİ"
                              class="col col-12 text-description detailLink productTitle"
                              data-id="3334"
                              >{{ product.item }}</nuxt-link
                            >
                            <a
                              data-width="500"
                              data-url="/srv/service/customer/login-form"
                              id="favoribtn"
                              class="popupWin fr favouriteBtn loginPopupBtn favoriteBtn"
                            ></a>
                          </div>
                        </div>
                        <input
                          type="hidden"
                          name="subPro33341003"
                          id="subPro33341003"
                          value="0"
                        />
                        <div
                          class="box col-12 proRowAct"
                          id="1003-product-price-ekose-astarli-ceket-mavi"
                          itemprop="offers"
                          itemscope=""
                          itemtype="http://schema.org/Offer"
                        >
                          <span itemprop="priceCurrency" content="TRY"></span>
                          <span itemprop="price" content="197.91"></span>
                          <span
                            itemprop="availability"
                            content="https://schema.org/InStock"
                          ></span>
                          <span itemprop="itemCondition" content="new"></span>
                          <div class="fl col-12 tooltipWrapper">
                            <div class="fl col-12 productPrice">
                              <div class="fl col-12 priceWrapper flexwrap">
                                <span class="text-line discountedPrice">
                                  {{ product.oldprice }} TL
                                </span>
                                <span class="currentPrice">
                                  {{ product.price }} TL
                                </span>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.productItem .drop-down > .row {
  margin: 0;
  position: relative;
}
.row {
  margin-left: -10px;
  margin-right: -10px;
  clear: both;
  display: block;
}
.detailLink {
  padding-right: 35px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  color: #000;
  font-size: 16px;
  line-height: 17px;
}
.box,
.col {
  float: left;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
}
.catalogWrapper .productItem .text-description.detailLink {
  padding-left: 0;
}
</style>

<script>
export default {
  data() {
    return {
      size1: false,
      size2: false,
      isActive: false,
      count: 1,
      size: 1,
    }
  },
  created() {
    const id = this.$route.params.id
    this.$store.dispatch('product/initData')
    this.$store.dispatch('product/setProduct', parseInt(id))
  },
  computed: {
    isContentVisible() {
      return this.isActive
    },
    titleClasses() {
      return this.isActive ? 'active' : ''
    },
    size1Classes() {
      return this.size1 ? 'selected' : ''
    },
    size2Classes() {
      return this.size2 ? 'selected' : ''
    },
    product() {
      return this.$store.getters['product/getProduct']
    },
  },
  methods: {
    size1Active() {
      this.size1 = !this.size1
    },
    size2Active() {
      this.size2 = !this.size2
    },
    toggleActive() {
      this.isActive = !this.isActive
    },
    decsreaseCount() {
      if (this.count > 1) {
        this.count--
      }
    },
    addBasket() {
      const payload = {
        id: Math.random() * 1000,
        count: this.count,
        size: this.size,
        product: this.product,
      }
      this.$store.dispatch('basket/addBasket', payload)
    },
  },
}
</script>
