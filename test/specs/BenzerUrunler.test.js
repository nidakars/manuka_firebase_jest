import { mount, config, shallowMount, RouterLinkStub } from "@vue/test-utils";
import BenzerUrunler from "../../components/benzer_urunler";

config.mocks["$fire"] = {
    database: {
        ref: () => {
            return "";
        }
    }
};
jest.mock("axios", () => ({
    get: () =>
        Promise.resolve({
            data: [{
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
        })
}));

describe("Get Products", () => {
    let wrapper = mount(BenzerUrunler, {
        stubs: {
            NuxtLink: RouterLinkStub
        }
    });
    it("Benzer Ürünler", () => {
        expect(wrapper.text()).toContain("BENZER ÜRÜNLER");
    });

    /*it("Sepete Ekle Button", () => {
        expect(wrapper.text()).toContain("Sepete Ekle");
    });*/
    it("Have a KAPİTONE", () => {
        expect(wrapper.text()).toContain("KAPİTONE");
    });
    /*
        it("Have a Egonex", () => {
          expect(wrapper.text()).toContain("Egonex");
        });
        it("Have a ORkun ÖZTÜRK-115BT", () => {
          expect(wrapper.text()).toContain("ORkun ÖZTÜRK-115BT");
        });
        it("Have a Xiaomi", () => {
          expect(wrapper.text()).toContain("Xiaomi");
        });
        it("Have a Mi Band", () => {
          expect(wrapper.text()).toContain("Mi Band");
        });
        it("Have a Çiçekli", () => {
          expect(wrapper.text()).toContain("Çiçekli");
        });*/
});