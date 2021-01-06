--MANUKA 10 COMPONENT--
<template>
  <div class="col col-12">
    <div class="row mb whiteBg notClear">
      <div class="ListOptions flexwrap">
        <div class="NavBox col-4 col-md-12 fl">
          <div class="col col-12 NavContent">
            <div id="navigasyon" class="row">
              <div id="nav-wrapper" class="fl col-12">
                <div class="fl">
                  <ul class="fl breadcrumb">
                    <li
                      itemscope=""
                      itemtype="http://data-vocabulary.org/Breadcrumb"
                      class="fl"
                    >
                      <a title="Anasayfa" class="fl navHome" itemprop="url">
                        <NuxtLink to="/"
                          ><span itemprop="title">Anasayfa ></span>
                        </NuxtLink>
                      </a>
                    </li>

                    <li
                      itemscope=""
                      itemtype="http://data-vocabulary.org/Breadcrumb"
                      class="fl"
                    >
                      <a
                        
                        title="giyim"
                        itemprop="url"
                        class="fl"
                      >
                        <NuxtLink  v-for="Listeme in products"
                        :key="Listeme" to="/giyim"
                          ><span itemprop="title">{{ Listeme.category }}</span>
                        </NuxtLink>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="FiltreSort flexwrap col-8 col-md-12">
          <div class="FiltreBox fr col-md-6">
            <div class="fl col-12 fltre">
              <div class="fl col-12">
                <div class="col col-12" id="leftFilter">
                  <div
                    class="col col-12 text-semibold forMobile"
                    id="filterMobileBtn"
                  >
                    Filtre
                  </div>
                  <div class="fl col-12" id="filterWrapper">
                    <div
                      style="visibility: visible"
                      id="filterPanel"
                      class="fl col-12 angularTemplate flexwrap"
                      data-callback="filtreReady"
                      data-url="/srv/service/filter/get/filters-variants-brands-categories-price-suppliers"
                    >
                      <div class="filter-wrap">
                        <ul class="fl col-12 catMenu" id="filterCats">
                          <li class="fl col-12 parent">
                            <div class="TumKatBox">
                              <div
                                class="col col-12 text-custom-gray text-semibold col-title filter-title"
                                :class="this.isClick ? 'hidden' : ''"
                                @click="Active()"
                              >
                                KATEGORİLER
                              </div>
                              <div
                                class="fl col-12 fValuesBox fCatBox"
                                style="display: block"
                                :class="this.isClick ? 'open' : ''"
                                v-show="this.isClick"
                                :style="this.isClick ? 'none' : ''"
                              >
                                <ul class="box col-12">
                                  <li class="fl col-12">
                                    <a
                                      class="fl col-12 text-description lma"
                                      href="/kaban-333"
                                      data-after="»"
                                      >Kaban</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a
                                      class="fl col-12 text-description lma"
                                      href="/mont-334"
                                      data-after="»"
                                      >Mont</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a
                                      class="fl col-12 text-description lma"
                                      href="/yagmurluk-327"
                                      data-after="»"
                                      >Yağmurluk</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a
                                      class="fl col-12 text-description lma"
                                      href="/yelek"
                                      data-after="»"
                                      >Yelek</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a
                                      class="fl col-12 text-description lma"
                                      href="/trenchkot"
                                      data-after="»"
                                      >Trençkot</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a
                                      class="fl col-12 text-description lma"
                                      href="/denim"
                                      data-after="»"
                                      >Denim</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a
                                      class="fl col-12 text-description lma"
                                      href="/ceket-339"
                                      data-after="»"
                                      >Ceket</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a
                                      class="fl col-12 text-description lma"
                                      href="/triko-325"
                                      data-after="»"
                                      >Triko</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a
                                      class="fl col-12 text-description lma"
                                      href="/hirka-332"
                                      data-after="»"
                                      >Hırka</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a
                                      class="fl col-12 text-description lma"
                                      href="/kazak-323"
                                      data-after="»"
                                      >Kazak</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a
                                      class="fl col-12 text-description lma"
                                      href="/suveter"
                                      data-after="»"
                                      >Süveter</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a
                                      class="fl col-12 text-description lma"
                                      href="/sweatshirt-338"
                                      data-after="»"
                                      >Sweatshirt</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a
                                      class="fl col-12 text-description lma"
                                      href="/gomlek-329"
                                      data-after="»"
                                      >Gömlek</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a
                                      class="fl col-12 text-description lma"
                                      href="/tunik"
                                      data-after="»"
                                      >Tunik</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a
                                      class="fl col-12 text-description lma"
                                      href="/basic-328"
                                      data-after="»"
                                      >Basic</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a
                                      class="fl col-12 text-description lma"
                                      href="/kimono"
                                      data-after="»"
                                      >Kimono</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a
                                      class="fl col-12 text-description lma"
                                      href="/t-shirt-324"
                                      data-after="»"
                                      >T-Shirt</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a
                                      class="fl col-12 text-description lma"
                                      href="/elbise-322"
                                      data-after="»"
                                      >Elbise</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a
                                      class="fl col-12 text-description lma"
                                      href="/salopet"
                                      data-after="»"
                                      >Salopet</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a
                                      class="fl col-12 text-description lma"
                                      href="/jean-336"
                                      data-after="»"
                                      >Jean</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a
                                      class="fl col-12 text-description lma"
                                      href="/pantolon-335"
                                      data-after="»"
                                      >Pantolon</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a
                                      class="fl col-12 text-description lma"
                                      href="/etek-337"
                                      data-after="»"
                                      >Etek</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a
                                      class="fl col-12 text-description lma"
                                      href="/sweatshirt-takim"
                                      data-after="»"
                                      >Sweatshirt Takım</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a
                                      class="fl col-12 text-description lma"
                                      href="/esofman-takim"
                                      data-after="»"
                                      >Eşofman Takım</a
                                    >
                                  </li>
                                  <li class="fl col-12">
                                    <a
                                      class="fl col-12 text-description lma"
                                      href="/takim-331"
                                      data-after="»"
                                      >Takım</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div class="filter-wrap">
                        <div class="fl col-12">
                          <div
                            class="col col-12 text-custom-gray text-semibold col-title filter-title"
                            :class="this.isR ? 'hidden' : ''"
                            @click="Active1()"
                          >
                            Renk
                          </div>
                          <div
                            class="box col-12 fValuesBox"
                            style="display: block"
                            :class="this.isR ? 'open' : ''"
                            v-show="this.isR"
                            :style="this.isR ? 'none' : ''"
                          >
                            <div class="fl col-12 fVariantBox FilterScroll">
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_325"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="325"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_325"
                                    value="325"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  AÇIK HAKİ
                                  <!--(1)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_203"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="203"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_203"
                                    value="203"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  HARDAL-BEYAZ
                                  <!--(1)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_278"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="278"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_278"
                                    value="278"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  KAHVERENGİ
                                  <!--(2)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_293"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="293"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_293"
                                    value="293"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  GRİ-KAHVE
                                  <!--(1)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_184"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="184"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_184"
                                    value="184"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  BAKIR
                                  <!--(3)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_162"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="162"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_162"
                                    value="162"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  GRİ
                                  <!--(8)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_171"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="171"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_171"
                                    value="171"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  CAMEL
                                  <!--(17)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_258"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="258"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_258"
                                    value="258"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  VİZON BEYAZ
                                  <!--(1)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_193"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="193"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_193"
                                    value="193"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  MİNT
                                  <!--(29)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_235"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="235"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_235"
                                    value="235"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  BİSKÜVİ
                                  <!--(2)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_158"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="158"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_158"
                                    value="158"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  SİYAH
                                  <!--(74)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_160"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="160"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_160"
                                    value="160"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  KİREMİT
                                  <!--(11)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_159"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="159"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_159"
                                    value="159"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  EKRU
                                  <!--(16)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_326"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="326"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_326"
                                    value="326"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  KUM BEJİ
                                  <!--(1)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_188"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="188"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_188"
                                    value="188"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  BEJ
                                  <!--(33)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_194"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="194"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_194"
                                    value="194"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  VİZON
                                  <!--(3)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_169"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="169"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_169"
                                    value="169"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  AÇIK MAVİ
                                  <!--(7)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_240"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="240"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_240"
                                    value="240"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  SOMON
                                  <!--(1)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_170"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="170"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_170"
                                    value="170"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  KOYU MAVİ
                                  <!--(12)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_233"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="233"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_233"
                                    value="233"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  OKYANUS
                                  <!--(1)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_172"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="172"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_172"
                                    value="172"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  BEYAZ
                                  <!--(6)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_273"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="273"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_273"
                                    value="273"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  GÜLPEMBE
                                  <!--(2)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_174"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="174"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_174"
                                    value="174"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  HAKİ
                                  <!--(17)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_292"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="292"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_292"
                                    value="292"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  SİYAH-KAHVE
                                  <!--(1)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_178"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="178"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_178"
                                    value="178"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  HARDAL
                                  <!--(5)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_324"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="324"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_324"
                                    value="324"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  BUZ GRİ
                                  <!--(1)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_181"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="181"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_181"
                                    value="181"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  YEŞİL
                                  <!--(6)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_315"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="315"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_315"
                                    value="315"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  HAKİ-BEYAZ
                                  <!--(1)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_182"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="182"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_182"
                                    value="182"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  TAŞ
                                  <!--(4)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_322"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="322"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_322"
                                    value="322"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  NİL YEŞİLİ
                                  <!--(1)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_161"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="161"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_161"
                                    value="161"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  KAHVE
                                  <!--(19)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_175"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="175"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_175"
                                    value="175"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  ÇAĞLA
                                  <!--(4)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_189"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="189"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_189"
                                    value="189"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  BORDO
                                  <!--(1)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_205"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="205"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_205"
                                    value="205"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  SİYAH-BEYAZ
                                  <!--(1)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_163"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="163"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_163"
                                    value="163"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  İNDİGO
                                  <!--(4)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_259"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="259"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_259"
                                    value="259"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  MULTİ
                                  <!--(1)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_212"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="212"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_212"
                                    value="212"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  CAMEL-BEYAZ
                                  <!--(1)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_264"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="264"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_264"
                                    value="264"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  PASTEL
                                  <!--(1)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_243"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="243"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_243"
                                    value="243"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  EKOSE
                                  <!--(3)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_197"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="197"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_197"
                                    value="197"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  SÜTLÜ KAHVE
                                  <!--(6)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_177"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="177"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_177"
                                    value="177"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  GÜL KURUSU
                                  <!--(4)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_265"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="265"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_265"
                                    value="265"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  BOTANİK
                                  <!--(1)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_186"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="186"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_186"
                                    value="186"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  MAVİ
                                  <!--(11)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_210"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="210"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_210"
                                    value="210"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  ANTRASİT
                                  <!--(1)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_220"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="220"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_220"
                                    value="220"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  LACİVERT
                                  <!--(1)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_274"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="274"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_274"
                                    value="274"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  LEYLAK
                                  <!--(1)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_226"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="226"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_226"
                                    value="226"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  SARI
                                  <!--(9)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_288"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="288"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_288"
                                    value="288"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  KİREMİT-HARDAL
                                  <!--(1)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_183"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="183"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_183"
                                    value="183"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  ŞEFTALİ
                                  <!--(10)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_291"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="291"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_291"
                                    value="291"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  ORTA MAVİ
                                  <!--(1)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_180"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="180"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_180"
                                    value="180"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  TURUNCU
                                  <!--(4)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_294"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="294"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_294"
                                    value="294"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  KİREMİT-YEŞİL
                                  <!--(1)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_232"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="232"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_232"
                                    value="232"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  OFF WHITE
                                  <!--(33)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_313"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="313"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_313"
                                    value="313"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  BEJ-CAMEL
                                  <!--(1)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_224"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="224"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_224"
                                    value="224"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  PUDRA
                                  <!--(7)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_314"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="314"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_314"
                                    value="314"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  KİREMİT-BEYAZ
                                  <!--(1)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_238"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="238"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_238"
                                    value="238"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  GÜMÜŞ
                                  <!--(2)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_316"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="316"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_316"
                                    value="316"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  KAHVE-BEYAZ
                                  <!--(1)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_256"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="256"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_256"
                                    value="256"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  TATLI SARI
                                  <!--(2)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_199"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="199"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_199"
                                    value="199"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  BEYAZ-SİYAH
                                  <!--(1)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_254"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="254"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_254"
                                    value="254"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  LİLA-OFFWHITE
                                  <!--(2)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_289"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="289"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_289"
                                    value="289"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  SU YEŞİLİ
                                  <!--(1)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_261"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="261"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_261"
                                    value="261"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  PÖTİKARE MAVİ
                                  <!--(1)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_327"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="327"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_327"
                                    value="327"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  MİNT-OFF WHİTE
                                  <!--(1)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type1_176"
                                  class="fl col-12 col-text form-item myType1"
                                  data-type=""
                                  data-filter-id="176"
                                >
                                  <input
                                    type="checkbox"
                                    id="type1_176"
                                    value="176"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                      style="background-color: "
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                      style="background-color: "
                                    ></i>
                                  </span>
                                  LİLA
                                  <!--(15)-->
                                </label>
                              </div>
                            </div>
                            <div class="box col-12 filterBtn">
                              <span class="box col-12 a-center btn-upper"
                                >Filtrele</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="filter-wrap">
                        <div class="fl col-12">
                          <div
                            class="col col-12 text-custom-gray text-semibold col-title filter-title"
                            :class="this.isB ? 'hidden' : ''"
                            @click="Active2()"
                          >
                            Beden
                          </div>
                          <div
                            class="box col-12 fValuesBox"
                            style="display: block"
                            :class="this.isB ? 'open' : ''"
                            v-show="this.isB"
                            :style="this.isB ? 'none' : ''"
                          >
                            <div class="col col-12 fVariantBox FilterScroll">
                              <div class="fl col-12 mb">
                                <label
                                  for="type2_146"
                                  class="fl col-12 col-text form-item myType2"
                                  data-type=""
                                  data-filter-id="146"
                                >
                                  <input
                                    type="checkbox"
                                    id="type2_146"
                                    value="146"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                    ></i>
                                  </span>
                                  1
                                  <!--(259)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type2_145"
                                  class="fl col-12 col-text form-item myType2"
                                  data-type=""
                                  data-filter-id="145"
                                >
                                  <input
                                    type="checkbox"
                                    id="type2_145"
                                    value="145"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                    ></i>
                                  </span>
                                  2
                                  <!--(259)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type2_155"
                                  class="fl col-12 col-text form-item myType2"
                                  data-type=""
                                  data-filter-id="155"
                                >
                                  <input
                                    type="checkbox"
                                    id="type2_155"
                                    value="155"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                    ></i>
                                  </span>
                                  34
                                  <!--(5)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type2_143"
                                  class="fl col-12 col-text form-item myType2"
                                  data-type=""
                                  data-filter-id="143"
                                >
                                  <input
                                    type="checkbox"
                                    id="type2_143"
                                    value="143"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                    ></i>
                                  </span>
                                  36
                                  <!--(70)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type2_150"
                                  class="fl col-12 col-text form-item myType2"
                                  data-type=""
                                  data-filter-id="150"
                                >
                                  <input
                                    type="checkbox"
                                    id="type2_150"
                                    value="150"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                    ></i>
                                  </span>
                                  38
                                  <!--(70)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type2_149"
                                  class="fl col-12 col-text form-item myType2"
                                  data-type=""
                                  data-filter-id="149"
                                >
                                  <input
                                    type="checkbox"
                                    id="type2_149"
                                    value="149"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                    ></i>
                                  </span>
                                  40
                                  <!--(70)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type2_148"
                                  class="fl col-12 col-text form-item myType2"
                                  data-type=""
                                  data-filter-id="148"
                                >
                                  <input
                                    type="checkbox"
                                    id="type2_148"
                                    value="148"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                    ></i>
                                  </span>
                                  42
                                  <!--(52)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type2_144"
                                  class="fl col-12 col-text form-item myType2"
                                  data-type=""
                                  data-filter-id="144"
                                >
                                  <input
                                    type="checkbox"
                                    id="type2_144"
                                    value="144"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                    ></i>
                                  </span>
                                  STD
                                  <!--(95)-->
                                </label>
                              </div>
                              <div class="fl col-12 mb">
                                <label
                                  for="type2_157"
                                  class="fl col-12 col-text form-item myType2"
                                  data-type=""
                                  data-filter-id="157"
                                >
                                  <input
                                    type="checkbox"
                                    id="type2_157"
                                    value="157"
                                  />

                                  <span class="fl icon-wrapper">
                                    <i
                                      class="fl icon-square-unchecked icon-small"
                                    ></i>
                                    <i
                                      class="fl icon-square-checked icon-small"
                                    ></i>
                                  </span>
                                  44
                                  <!--(4)-->
                                </label>
                              </div>
                            </div>

                            <div class="box col-12 filterBtn">
                              <span class="box col-12 a-center btn-upper"
                                >Filtrele</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="filter-wrap">
                        <div class="fl col-12">
                          <div
                            class="col col-12 text-custom-gray text-semibold col-title filter-title"
                            :class="this.isF ? 'hidden' : ''"
                            @click="Active3()"
                          >
                            Fiyat
                          </div>
                          <div
                            class="box col-12 fValuesBox fPriceSliderBox"
                            style="display: block"
                            :class="this.isF ? 'open' : ''"
                            v-show="this.isF"
                            :style="this.isF ? 'none' : ''"
                          >
                            <div class="row forMobile">
                              <div class="fl col-12 fPriceBox">
                                <div class="row">
                                  <div
                                    class="col col-4 col-xs-6 p-left mb form-control large"
                                  >
                                    <input
                                      type="text"
                                      id="minMobilePrice"
                                      name="minMobilePrice"
                                      data-min-value="39"
                                      value="39"
                                      class="col col-12 withPlace"
                                    />
                                  </div>
                                  <div
                                    class="col col-4 col-xs-6 p-left mb form-control large"
                                  >
                                    <input
                                      type="text"
                                      id="maxMobilePrice"
                                      name="maxMobilePrice"
                                      data-min-value="350"
                                      value="350"
                                      class="col col-12 withPlace"
                                    />
                                  </div>
                                  <!--<div class="col col-4 col-xs-12 p-left mb">
                                                <button type="button" id="priceBtn" class="btn btn-custom-pink col-12 text-center text-semibold">
                                                    <i class="icon-check icon-no-space"></i>
                                                    Filtre
                                                </button>
                                            </div>-->
                                </div>
                              </div>
                            </div>
                            <div class="fl col-12 mb forDesktop FilterScroll">
                              <div id="priceSlider" class="fl col-12 col-sm-12">
                                <div
                                  id="slider-range"
                                  class="col ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                                >
                                  <div
                                    class="ui-slider-range ui-corner-all ui-widget-header"
                                    style="left: 0%; width: 100%"
                                  ></div>
                                  <span
                                    tabindex="0"
                                    class="ui-slider-handle ui-corner-all ui-state-default"
                                    style="left: 0%"
                                  ></span
                                  ><span
                                    tabindex="0"
                                    class="ui-slider-handle ui-corner-all ui-state-default"
                                    style="left: 100%"
                                  ></span>
                                </div>
                              </div>
                              <div class="priceWrap text-center">
                                <span id="min-price" class="fl" data-min="39"
                                  >39 TL</span
                                >
                                <span id="max-price" class="fr" data-max="350"
                                  >350 TL</span
                                >
                              </div>
                            </div>
                            <div class="box col-12 filterBtn">
                              <span class="box col-12 a-center btn-upper"
                                >Filtrele</span
                              >
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
          <div class="SortBox fr col-md-6">
            <div class="col col-12 forMobile" id="filterSortBtn">
              <div class="col col-12 text-semibold SortBtn">Sıralama seçin</div>
            </div>
            <div class="fl col-12 notClear" id="filterSort">
              <div class="fr col col-sm-6 p-left forDesktop">
                <div class="fl btnBar" id="pageLayout">
                  <span class="col ease">Görünüm:</span>
                  <span
                    class="col ease blockBtn threeBlock active catalogBtn selected"
                    @mousedown="three"
                    data-id="0"
                  ></span>
                  <span
                    class="col ease blockBtn fourBlock listBtn selectable"
                    @mousedown="three"
                    data-id="2"
                  ></span>
                </div>
              </div>
              <label for="sort" class="fr col-md-12 p-left d-flex">
                <select
                  name="sort"
                  id="sort"
                  class="col text-description b-none"
                >
                  <option value="0" selected="">Varsayılan Sıralama</option>
                  <option value="1">Alfabetik A-Z</option>
                  <option value="2">Alfabetik Z-A</option>
                  <option value="3">Yeniden Eskiye</option>
                  <option value="4">Eskiden Yeniye</option>
                  <option value="5">Fiyat Artan</option>
                  <option value="6">Fiyat Azalan</option>
                  <option value="7">Rastgele</option>
                  <option value="8">Puana Göre</option>
                </select>
              </label>
            </div>
          </div>
          <div id="pageLayout" class="col-12 fl mGorunum">
            <span class="horizontalBtn selectable fr" data-id="1"></span>
            <span class="listBtn selectable fr" data-id="2"></span>
            <div class="fr mGorunumBaslik">Görünüm:</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script>
export default {
  data: () => {
    return {
      isClick: false,
      isR: false,
      isB: false,
      isF: false,
      loading: false,
    }
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
  methods: {
    three(event) {
      var Target = event.target
      Target.classList.add('active selected')
      Target.classList.remove('selectable')
      four.event.target.classList.remove('active')
    },
    four(event) {
      var Target = event.target
      Target.classList.add('active selected')
      Target.classList.remove('selectable')
      three.event.target.classList.remove('active')
    },
    loginTime(event) {
      var Target = event.target
      return Target.parentElement.classList.contains('active selected')
    },
    Active() {
      this.isClick = !this.isClick
    },
    Active1() {
      this.isR = !this.isR
    },
    Active2() {
      this.isB = !this.isB
    },
    Active3() {
      this.isF = !this.isF
    },
  },
}
</script>
