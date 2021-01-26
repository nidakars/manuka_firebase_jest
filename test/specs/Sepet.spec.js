import { mount, createLocalVue, config, shallowMount } from "@vue/test-utils";
import sepet from "../../components/sepet.vue";
import { getters, mutations, actions, state } from "../../store/basket";

config.mocks["$store"] = {
    state: {...state },
    getters: {
        "basket/getBasketItems": {...state }
    },
    actions: {
        "basket/removeBasketItem": {...actions }
    },
    mutations: {
        ...mutations
    }
};

describe("sepet.vue", () => {
    it("Render", () => {
        let wrapper = shallowMount(sepet);
        expect(wrapper.text()).toContain("Sepet Listesi");
    });
});