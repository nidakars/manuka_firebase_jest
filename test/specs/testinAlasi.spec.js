import { mount, RouterLinkStub } from "@vue/test-utils";

import ustMenu from "../../components/mainMenu";

describe("mainMenu.vue", () => {
    let wrapper = mount(ustMenu, {
        stubs: {
            NuxtLink: RouterLinkStub
        }
    });
    it("Başlık 1", () => {
        expect(wrapper.text()).toContain("Moonlight Koleksiyonu🌙");
    });
    it("Başlık 2", () => {
        expect(wrapper.text()).toContain("Denim Koleksiyonu");
    });
    it("Başlık 3", () => {
        expect(wrapper.text()).toContain("Makaron Renkleri");
    });
    it("Başlık 4", () => {
        expect(wrapper.text()).toContain("Avantajlı Fiyatlar");
    });
    it("Başlık 5", () => {
        expect(wrapper.text()).toContain("Çok Satanlar");
    });
    it("Ana Başlık", () => {
        expect(wrapper.text()).toContain("Yeni");
    });
    it("div'e göre", () => {
        const div = wrapper.find('div')
        expect(div.exists()).toBe(true)
    });

    test("snapshot testi", () => {
        expect(wrapper).toMatchSnapshot();
    });
    it("button var mı?", () => {
        expect(wrapper.contains("button")).toBe(true);
    });
});