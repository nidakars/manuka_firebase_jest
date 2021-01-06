--MANUKA 6 COMPONENT--

<template>
  <div class="PersonaClickDiv PersonaClickUrunDetay col-12 fl">
    <div
      class="personaclick-recommend col-12 fl personaclick-recommend-rendered"
      data-recommender-block="dynamic"
      data-recommender-code="c32a1648636cd0df43888f6f0ffcf783"
      data-recommender-item="3132"
      data-recommender-callback="PersonaCallBack"
    >
      <div data-categories='["316", "325"]' class="recommender-block-title">
        BENZER ÜRÜNLER
      </div>
      <div class="recommended-items owl-carousel owl-theme owl-loaded owl-drag">
        <div class="owl-stage-outer">
          <div
            class="owl-stage"
            style="
              transform: translate3d(0px, 0px, 0px);
              transition: all 0s ease 0s;
              width: 2035px;
            "
          >
            <div
              v-for="i in products"
              :key="i"
              class="owl-item active"
              style="width: 193.44px; margin-right: 10px"
            >
              <div class="recommended-item">
                <div class="recommended-item-photo">
                  <nuxt-link :to="'/urun-detay/' + i.id"
                    ><img class="item_img" :src="i.image"
                  /></nuxt-link>
                </div>
                <div class="recommended-item-title">
                  <nuxt-link :to="'/urun-detay/' + i.id">{{
                    i.title
                  }}</nuxt-link>
                </div>

                <div class="persona-old-price">{{ i.oldprice }} TL</div>
                <div class="persona-new-price">{{ i.price }} TL</div>
              </div>
            </div>
          </div>
        </div>
        <div class="owl-nav">
          <div class="owl-prev">prev</div>
          <div class="owl-next">next</div>
        </div>
        <div class="owl-dots disabled"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  content: '';
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
  content: '';
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

<script>
export default {
  name: 'giyim',
  data: () => {
    return { loading: false }
  },
  created() {
    this.loading = true
    this.$store
      .dispatch('product/fetchProducts')
      .then(() => (this.loading = false))
  },
  computed: {
    products() {
      return this.$store.getters['product/getProducts']
    },
  },
}
</script>
