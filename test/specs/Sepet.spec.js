import { mount, config } from "@vue/test-utils";
import Sepettekiler from "../../components/Sepet.vue";
import { mutations, actions, state } from "../../store/index";

config.mocks["$store"] = {
    state: {...state },
    getters: {
        "getCartTotalCost": {...state },
        "formatPrice": {...state },
        "getCartTotalCount": {...state },
    },
    /* 
      actions: {
        "fetchProducts": { ...actions },
        "fetchCartItems": { ...actions }
      }, */
    mutations: {
        ...mutations
    }
};
//
describe("Sepet.vue", () => {
    it("Sepete veriler gelmediğinde, Sepetinizde herhangi bir ürün bulunmamaktadır yazısı gelmesi", () => {
        let wrapper = mount(Sepet);
        expect(wrapper.text()).toContain("Sepetinizde herhangi bir ürün bulunmamaktadır.");
    });
});