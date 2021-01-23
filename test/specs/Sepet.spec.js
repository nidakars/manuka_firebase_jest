import { mount, createLocalVue, config, shallowMount } from "@vue/test-utils";
import Sepet from "../../components/sepet";
import { getters, mutations, actions, state } from "../../store/basket";

config.mocks["$store"] = {
    state: {...state },
    getters: {
        "basket/getBasketItems": {...state }
    },
    actions: {
        "removeBasketItem": {...actions }
    },
    mutations: {
        ...mutations
    },
    stubs: {
        NuxtLink: true,
    }
};
describe("Sepet.vue", () => {
    it("Render", () => {
        let wrapper = shallowMount(Sepet);
        expect(wrapper.text()).toContain("Sepet Listesi");

    });
});