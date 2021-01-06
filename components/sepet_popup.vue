--MANUKA 4 COMPONENT--
<template>
  <div
    class="pWrapper"
    style="visibility: visible; display: block"
    data-name="cartPopup"
  >
    <div class="flex">
      <div class="pBg close" style="z-index: 9980"></div>
      <div
        style="width: 1000px; margin: 0px auto; z-index: 9981"
        class="pWin box whiteBg flexbox br5 withBtn"
        id="cartPopup"
      >
        <!-- <div class="pClose close"></div> -->
        <nuxt-link class="pClose close" to="/giyim"></nuxt-link>
        <div class="pText col col-12">
          <div class="row oh">
            <div
              style="visibility: visible"
              id="basketWin"
              data-callback="basketReady"
              data-url="/srv/service/cart/load-win/3296"
              class="fl col-12 basketWrapper angularTemplate"
            >
              <div class="fl col-12 panelPopupTitle">
                <span class="basketSuccess"></span>Ürün Sepetinize Eklendi
              </div>

              <div class="fl col-12 panelPopupContent">
                <!--if $IS_ADD_TO_CART_SUCCESS==1 AND $PRODUCT_TYPE>0  AND $RELATED_PRODUCTS|@count>0-->
                <!--1:ilgili-2:ikame-3:aksesuar-4:tamamlayici-->

                <div class="col col-12 middleItem" id="basketPopupItems">
                  <div class="row">
                    <input
                      type="hidden"
                      class="SepetBaslik"
                      value="Alışveriş Sepetim"
                    />

                    <table
                      cellspacing="0"
                      cellpadding="0"
                      class="col-12 box-border b-bottom"
                    >
                      <tbody class="col-12">
                        <tr class="line-bottom">
                          <td class="col-1 col-xs-2 fw700 line-right">Ürün</td>
                          <td class="col-4 col-xs-6 fw700 line-right">
                            Ürün Adı
                          </td>
                          <td class="col-2 fw700 line-right dn-xs">Miktar</td>
                          <td class="col-2 fw700 line-right dn-xs">
                            Birim Fiyat
                          </td>
                          <td class="col-2 col-xs-4 fw700 line-right">
                            Toplam Tutar
                          </td>
                          <td class="col-1 fw700 dn-xs">Sil</td>
                        </tr>
                        <tr v-for="item in basket" :key="'basket'+item.id" class="line-bottom row3296">
                          <td class="col-1 col-xs-2 line-right">
                            <img
                              :src="item.product.image"
                            />
                          </td>
                          <td class="col-4 col-xs-6 fw600 line-right">
                            <span class="fl"
                              >{{item.product.title}}</span
                            >
                          </td>
                          <td
                            class="col-2 line-right proQty dn-xs"
                            data-id="0"
                            data-product="3296"
                            data-subproduct="3245"
                          >
                            <div class="box box-border">
                              <div class="col p-left productType">Adet:</div>
                              <div class="fl qtyBtns" data-increment="1">
                                <a
                                  title="-"
                                  data-id="3296"
                                  data-cart-id="0"
                                  @click="decrease(item.id)"
                                   class="decBasketProduct"
                                >
                                  <p>-</p>
                                </a>
                                <input
                                  type="text"
                                  id="Adet3296"
                                  name="Adet3296"
                                  :value="item.count"
                                  class="qtyBasketProduct"
                                />
                                <a
                                  title="+"
                                  data-id="3296"
                                  data-cart-id="0"
                                  @click="increase(item.id)"
                                  class="incBasketProduct"
                                >
                                  <p>+</p>
                                </a>
                              </div>
                            </div>
                          </td>

                          <td class="col-2 line-right dn-xs">{{item.product.price}} TL</td>
                          <td
                            class="col-2 col-xs-4 line-right priceBasketProduct"
                          >
                            {{item.product.price}}TL
                          </td>
                          <td class="col-1 dn-xs">
                            <a
                              data-cart-id="0"
                              class="fr btn-default removeBasketProduct removeBtn"
                            ></a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div
                      class="col fr col-4 box-border b-top b-bottom"
                      style="min-width: 300px"
                    >
                      <div class="row">
                        <div class="col col-12 line-bottom">
                          <div class="row">
                            <div class="box col-6 fw600">Sepet Toplamı</div>
                            <div class="box col-1 fw600">:</div>
                            <div class="box col-4 tar totalBasketPrice">
                              {{total}}TL
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
        <div class="pButtons">
          <router-link to="/giyim">
            <button
              v-on:click="giyim"
              data-id="0"
              class="btn btn-radius btn-success"
            >
              Alışverişe Devam
            </button>
          </router-link>
          <router-link to="/sepet">
            <button
              v-on:click="sepet"
              data-id="1"
              class="btn btn-radius btn-success fr"
            >
              Sepete Git
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.tar {
  text-align: right;
}
</style>

<script>

export default {
  data: () => {
    return {

    };
  },
  created() {

  },
  computed: {
    basket(){
      return this.$store.getters['basket/getBasketItems'];
    },
    subtotal(){
      let total = 0;
      for (let i = 0; i < this.basket.length; i++) {
        total += this.basket[i].product.price;
      }
      return total.toFixed(2);
    },
    total() {
      let total = 0;
      for (let i = 0; i < this.basket.length; i++) {
        total += (this.basket[i].product.price * this.basket[i].count);
      }
      return total.toFixed(2);
    }
  },
  methods: {
    removeBasketItem(id){
      this.$store.dispatch('basket/removeBasketItem', id);
    },
    increase(id){
      this.$store.dispatch('basket/increaseBasketItem', id);
    },
    decrease(id){
      this.$store.dispatch("basket/decreaseBasketItem", id);
    }
  }
}
</script>
