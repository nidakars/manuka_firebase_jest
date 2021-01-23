import { getters } from '../../store'

describe('getProductWithId', () => {
    it('id si belirtilen ürünü getirme', () => {
        // mock state
        const state = {
            products: [{
                category: "Giyim",
                color: "Mavi",
                id: 13401,
                image: ["https://img.manuka.com.tr/ekose-astarli-ceket-mavi-ceket-0-13403-33-B.jpg", "https://img.manuka.com.tr/ekose-astarli-ceket-mavi-ceket-0-15903-33-O.jpg", "https://img.manuka.com.tr/ekose-astarli-ceket-mavi-ceket-0-15904-33-O.jpg", "https://img.manuka.com.tr/ekose-astarli-ceket-mavi-ceket-0-15905-33-O.jpg"],
                kategori: ["Giyim"],
                oldprice: 219.9,
                price: 197.91,
                size: ["1", "2", "3"],
                title: "EKOSE ASTARLI CEKET MAVİ"
            }, {
                color: "Çağla",
                id: 13402,
                image: ["https://img.manuka.com.tr/kolu-buzgulu-kase-kaban-cagla-kaban-15190-37-O.jpg", "https://img.manuka.com.tr/kolu-buzgulu-kase-kaban-cagla-kaban-15191-37-O.jpg", "https://img.manuka.com.tr/kolu-buzgulu-kase-kaban-cagla-kaban-15192-37-O.jpg", "https://img.manuka.com.tr/kolu-buzgulu-kase-kaban-cagla-kaban-15193-37-O.jpg"],
                oldprice: 219.9,
                price: 197.91,
                size: ["1", "2"],
                title: "KOLU BÜZGÜLÜ KAŞE KABAN ÇAĞLA"
            }, {
                color: "Gri",
                id: 13403,
                image: ["https://img.manuka.com.tr/genis-yakali-kaban-gri-kaban-0-13920-32-O.jpg", "https://img.manuka.com.tr/genis-yakali-kaban-gri-kaban-0-13921-32-O.jpg", "https://img.manuka.com.tr/genis-yakali-kaban-gri-kaban-0-13922-32-O.jpg", "https://img.manuka.com.tr/genis-yakali-kaban-gri-kaban-0-13923-32-O.jpg", "https://img.manuka.com.tr/genis-yakali-kaban-gri-kaban-0-13925-32-O.jpg", "https://img.manuka.com.tr/genis-yakali-kaban-gri-kaban-0-13924-32-O.jpg", "https://img.manuka.com.tr/genis-yakali-kaban-gri-kaban-0-13926-32-O.jpg", "https://img.manuka.com.tr/genis-yakali-kaban-gri-kaban-0-13927-32-O.jpg"],
                oldprice: 300.99,
                price: 250.95,
                size: ["1", "2"],
                title: "GENİŞ YAKALI KABAN GRİ"
            }, {
                color: "Bej",
                id: 13404,
                image: ["https://img.manuka.com.tr/dugmeli-ekose-kaban-bej-kaban-0-15816-37-O.jpg", "https://img.manuka.com.tr/dugmeli-ekose-kaban-bej-kaban-0-15175-37-O.jpg", "https://img.manuka.com.tr/dugmeli-ekose-kaban-bej-kaban-0-15176-37-O.jpg", "https://img.manuka.com.tr/dugmeli-ekose-kaban-bej-kaban-0-15177-37-O.jpg"],
                oldprice: 350.92,
                price: 320.5,
                size: ["1", "2"],
                title: "DÜĞMELİ EKOSE KABAN BEJ"
            }, {
                color: "Siyah",
                id: 13405,
                image: ["https://img.manuka.com.tr/cepli-sisme-mont-siyah-mont-15437-35-O.jpg", "https://img.manuka.com.tr/cepli-sisme-mont-siyah-mont-15438-35-O.jpg", "https://img.manuka.com.tr/cepli-sisme-mont-siyah-mont-15439-35-O.jpg", "https://img.manuka.com.tr/cepli-sisme-mont-siyah-mont-15440-35-O.jpg"],
                oldprice: 350.9,
                price: 297.65,
                size: ["1", "2"],
                title: "CEPLİ ŞİŞME MONT SİYAH"
            }, {
                color: "Bej",
                id: 13406,
                image: ["https://img.manuka.com.tr/kapitone-oversize-mont-bej-mont-0-15856-37-O.jpg", "https://img.manuka.com.tr/kapitone-oversize-mont-bej-mont-0-15857-37-O.jpg", "https://img.manuka.com.tr/kapitone-oversize-mont-bej-mont-0-15858-37-O.jpg", "https://img.manuka.com.tr/kapitone-oversize-mont-bej-mont-0-15859-37-O.jpg"],
                oldprice: "329,90",
                price: "296,91",
                size: ["STD"],
                title: "KAPİTONE OVERSİZE MONT BEJ"
            }],
        }

        const { getProduct } = getters;
        // mock getter
        const id = "13401"

        // get the result from the getter
        const result = getProduct(state)(id)

        const expected = {
            category: "Giyim",
            color: "Mavi",
            id: 13401,
            image: ["https://img.manuka.com.tr/ekose-astarli-ceket-mavi-ceket-0-13403-33-B.jpg",
                "https://img.manuka.com.tr/ekose-astarli-ceket-mavi-ceket-0-15903-33-O.jpg",
                "https://img.manuka.com.tr/ekose-astarli-ceket-mavi-ceket-0-15904-33-O.jpg",
                "https://img.manuka.com.tr/ekose-astarli-ceket-mavi-ceket-0-15905-33-O.jpg"
            ],
            kategori: ["Giyim"],
            oldprice: 219.9,
            price: 197.91,
            size: ["1", "2", "3"],
            title: "EKOSE ASTARLI CEKET MAVİ"

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
            const id = 13401
                // get the result from the getter
            const result = formatPrice()(197.91)

            const expected = "197,91";
            // assert the result
            expect(result).toEqual(expected)
        })
    })
    //BU TESTTE HATA VAR
    /*describe('getCartTotalCost', () => {
        it('Sepetteki Toplam tutarı hesaplama', () => {
            // mock state
            const state = {
                products: [{
                        color: "Çağla",
                        id: 13402,
                        image: ["https://img.manuka.com.tr/kolu-buzgulu-kase-kaban-cagla-kaban-15190-37-O.jpg", "https://img.manuka.com.tr/kolu-buzgulu-kase-kaban-cagla-kaban-15191-37-O.jpg", "https://img.manuka.com.tr/kolu-buzgulu-kase-kaban-cagla-kaban-15192-37-O.jpg", "https://img.manuka.com.tr/kolu-buzgulu-kase-kaban-cagla-kaban-15193-37-O.jpg"],
                        oldprice: 219.9,
                        price: 197.91,
                        size: ["1", "2"],
                        title: "KOLU BÜZGÜLÜ KAŞE KABAN ÇAĞLA"
                    },
                    {
                        color: "Gri",
                        id: 13403,
                        image: ["https://img.manuka.com.tr/genis-yakali-kaban-gri-kaban-0-13920-32-O.jpg", "https://img.manuka.com.tr/genis-yakali-kaban-gri-kaban-0-13921-32-O.jpg", "https://img.manuka.com.tr/genis-yakali-kaban-gri-kaban-0-13922-32-O.jpg", "https://img.manuka.com.tr/genis-yakali-kaban-gri-kaban-0-13923-32-O.jpg", "https://img.manuka.com.tr/genis-yakali-kaban-gri-kaban-0-13925-32-O.jpg", "https://img.manuka.com.tr/genis-yakali-kaban-gri-kaban-0-13924-32-O.jpg", "https://img.manuka.com.tr/genis-yakali-kaban-gri-kaban-0-13926-32-O.jpg", "https://img.manuka.com.tr/genis-yakali-kaban-gri-kaban-0-13927-32-O.jpg"],
                        oldprice: 300.99,
                        price: 250.95,
                        size: ["1", "2"],
                        title: "GENİŞ YAKALI KABAN GRİ"
                    },
                    {
                        color: "Bej",
                        id: 13404,
                        image: ["https://img.manuka.com.tr/dugmeli-ekose-kaban-bej-kaban-0-15816-37-O.jpg", "https://img.manuka.com.tr/dugmeli-ekose-kaban-bej-kaban-0-15175-37-O.jpg", "https://img.manuka.com.tr/dugmeli-ekose-kaban-bej-kaban-0-15176-37-O.jpg", "https://img.manuka.com.tr/dugmeli-ekose-kaban-bej-kaban-0-15177-37-O.jpg"],
                        oldprice: 350.92,
                        price: 320.5,
                        size: ["1", "2"],
                        title: "DÜĞMELİ EKOSE KABAN BEJ"
                    },
                ],
                inCart: [{
                        id: 0,
                        pid: "13402",
                        count: 2
                    },
                    {
                        id: 1,
                        pid: "13403",
                        count: 1
                    },
                    {
                        id: 2,
                        pid: "13404",
                        count: 3
                    }
                ]
            }
            const { total } = getters;
            // mock getter
            // get the result from the getter
            const result = total(state)()
            const expected = 1608.27;
            // assert the result
            expect(result).toEqual(expected)
        })
    })*/