import { getters } from '../../store'

describe('getProductWithId', () => {
    it('id si belirtilen ürünü getirme', () => {
        // mock state
        const state = {
            products: [
                {
                    id: "kavlak-tas-baski-zeytinyagi-3lu-ozel-fiyatli-kampanya",
                    categoryID: 0,
                    name: "Kavlak Taş Baskı Zeytinyağı 3lü Özel Fiyatlı Kampanya",
                    detail: "Taş değirmenlerde ezilerek soğuk sıkım yöntemi ile elde edilen gerçek Taş Baskı Soğuk Sıkım Zeytinyağı En Avantajlı Kampanyası ile yemeklerinize lezzet katacak.",
                    rate: 5,
                    price: 599,
                    code: "460",
                    images: [
                        "https://kavlak.com.tr/zeytinyaglari/kavlak-tas-baski-soguk-sikim-zeytinyagi-5lt-3-al-2-ode-kampanyasi.jpg"
                    ],
                    inStock: 500,
                    indirim: 30
                },
                {
                    id: "kavlak-ilk-hasat-5-litre-2li-ozel-kampanya",
                    categoryID: 0,
                    name: "Kavlak İlk Hasat 5 Litre 2li Özel Kampanya",
                    detail: "Ege bölgesinde yetişen yeşil zeytinlerden soğuk sıkım yöntemi ile elde edilen aromatik ve filtreden geçmeyen şifa niyetine tüketilebilecek eşsiz zeytinyağı!",
                    rate: 3,
                    price: 519,
                    code: "K0022",
                    images: [
                        "https://kavlak.com.tr/zeytinyaglari/kavlak-ilk-hasat-5-litre-2li-ozel-kampanya.jpg"
                    ],
                    inStock: 500,
                    indirim: 39
                },
                {
                    id: "kavlak-5-lt-tas-baski-zeytinyagi-alana-2-kg-jumbo-zeytin-hediye",
                    categoryID: 0,
                    name: "Kavlak 5 Lt Taş Baskı Zeytinyağı Alana 2 Kg Jumbo Zeytin Hediye",
                    detail: "Kavlak 5 Litre Taş Baskı Soğuk Sıkım Zeytinyağı Alana 2 Kg Jumbo Zeytin 10 TL! Üstelik Ücretsiz Kargo ile Kapınıza Teslim!",
                    rate: 5,
                    price: 289.90,
                    code: "K0025",
                    images: [
                        "https://kavlak.com.tr/zeytinler/kavlak-5-lt-tas-baski-zeytinyagi-alana-2-kg-jumbo-zeytin-ozel-fiyat.jpg"
                    ],
                    inStock: 500,
                    indirim: 27
                },
                {
                    id: "avlak-kuru-sele-siyah-zeytin-4-al-3-ode",
                    categoryID: 1,
                    name: "Kavlak Kuru Sele Siyah Zeytin 4 Al 3 Öde",
                    detail: "Kavlak kuru sele siyah zeytin hiçbir kimyasal işleme tabi tutulmadan çevirme ve çuvallama yöntemiyle yalnızca tuz kullanılarak üretilir.",
                    rate: 0,
                    price: 199.90,
                    code: "K0018",
                    images: [
                        "https://kavlak.com.tr/zeytinler/kavlak-kuru-sele-siyah-zeytin-4-al-3-ode.jpg"
                    ],
                    inStock: 500,
                    indirim: 22
                }
            ]
        }

        const { getProductWithId } = getters;
        // mock getter
        const id = "kavlak-ilk-hasat-5-litre-2li-ozel-kampanya"

        // get the result from the getter
        const result = getProductWithId(state)(id)

        const expected = {
            id: "kavlak-ilk-hasat-5-litre-2li-ozel-kampanya",
            categoryID: 0,
            name: "Kavlak İlk Hasat 5 Litre 2li Özel Kampanya",
            detail: "Ege bölgesinde yetişen yeşil zeytinlerden soğuk sıkım yöntemi ile elde edilen aromatik ve filtreden geçmeyen şifa niyetine tüketilebilecek eşsiz zeytinyağı!",
            rate: 3,
            price: 519,
            code: "K0022",
            images: [
                "https://kavlak.com.tr/zeytinyaglari/kavlak-ilk-hasat-5-litre-2li-ozel-kampanya.jpg"
            ],
            inStock: 500,
            indirim: 39
        };

        // assert the result
        expect(result).toEqual(expected)
    })
})

describe('getCategoryWithId', () => {
    it('id si belirtilen kategoriyi getirme', () => {
        // mock state
        const state = {
            categories: [
                {
                    "id": 0,
                    "name": "ZeytinYagi"
                },
                {
                    "id": 1,
                    "name": "SiyahZeytin"
                },
                {
                    "id": 2,
                    "name": "icecek"
                },
                {
                    "id": 3,
                    "name": "EvYapimi"
                },
                {
                    "id": 4,
                    "name": "YesilZeytin"
                },
                {
                    "id": 5,
                    "name": "Peynir"
                },
                {
                    "id": 6,
                    "name": "Reçel"
                },
                {
                    "id": 7,
                    "name": "Diger"
                },
                {
                    "id": 8,
                    "name": "Kozmetik"
                },
                {
                    "id": 9,
                    "name": "Tursular"
                },
                {
                    "id": 10,
                    "name": "Sekerleme"
                },
                {
                    "id": 11,
                    "name": "Kuruyemis"
                }
            ]
        }

        const { getCategoryWithId } = getters;
        // mock getter
        const id = 8

        // get the result from the getter
        const result = getCategoryWithId(state)(id)

        const expected = {
            "id": 8,
            "name": "Kozmetik"
        };

        // assert the result
        expect(result).toEqual(expected)
    })
})

describe('formatPrice', () => {
    it('Sayıyı virgüllü hale dönüştür', () => {
        // mock state       
        const { formatPrice } = getters;
        // mock getter
        const id = 8
        // get the result from the getter
        const result = formatPrice()(159.9)

        const expected = "159,90";
        // assert the result
        expect(result).toEqual(expected)
    })
})

describe('getCartTotalCost', () => {
    it('Sepetteki Toplam tutarı hesaplama', () => {
        // mock state
        const state = {
            products: [
                {
                    id: "kavlak-5-lt-tas-baski-zeytinyagi-alana-2-kg-jumbo-zeytin-hediye",
                    categoryID: 0,
                    name: "Kavlak 5 Lt Taş Baskı Zeytinyağı Alana 2 Kg Jumbo Zeytin Hediye",
                    detail: "Kavlak 5 Litre Taş Baskı Soğuk Sıkım Zeytinyağı Alana 2 Kg Jumbo Zeytin 10 TL! Üstelik Ücretsiz Kargo ile Kapınıza Teslim!",
                    rate: 5,
                    price: 289.90,
                    code: "K0025",
                    images: [
                        "https://kavlak.com.tr/zeytinler/kavlak-5-lt-tas-baski-zeytinyagi-alana-2-kg-jumbo-zeytin-ozel-fiyat.jpg"
                    ],
                    inStock: 500,
                    indirim: 27
                },
                {
                    id: "avlak-kuru-sele-siyah-zeytin-4-al-3-ode",
                    categoryID: 1,
                    name: "Kavlak Kuru Sele Siyah Zeytin 4 Al 3 Öde",
                    detail: "Kavlak kuru sele siyah zeytin hiçbir kimyasal işleme tabi tutulmadan çevirme ve çuvallama yöntemiyle yalnızca tuz kullanılarak üretilir.",
                    rate: 0,
                    price: 199.90,
                    code: "K0018",
                    images: [
                        "https://kavlak.com.tr/zeytinler/kavlak-kuru-sele-siyah-zeytin-4-al-3-ode.jpg"
                    ],
                    inStock: 500,
                    indirim: 22
                }
            ],
            inCart:[
                {
                    id:0,
                    pid:"kavlak-5-lt-tas-baski-zeytinyagi-alana-2-kg-jumbo-zeytin-hediye",
                    count:2
                },
                {
                    id:1,
                    pid:"avlak-kuru-sele-siyah-zeytin-4-al-3-ode",
                    count:1
                }
            ]
        }
        const { getCartTotalCost } = getters;
        // mock getter
        // get the result from the getter
        const result = getCartTotalCost(state)()
        const expected = 779.6999999999999;
        // assert the result
        expect(result).toEqual(expected)
    })
})