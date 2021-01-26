import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import Vue from 'vue'
Vue.config.ignoredElements = ['b-field', 'b-autocomplete']
import Vuex from 'vuex';
import '../firebase'
import KayitOl from '../../components/uye_kayit.vue'

const localVue = createLocalVue()
localVue.use(Vuex)
describe('KayitOl', () => {
    let wrapper;
    const mockFunction = jest.fn();
    beforeEach(() => {
        wrapper = mount(KayitOl, {
            localVue,
            data() {
                return {
                    email: 'redirectTest@test.com',
                    password: '123456',
                };
            },
            store: new Vuex.Store({
                actions: {
                    register: mockFunction,
                },
            }),
            mocks: {
                $router: {
                    push: jest.fn()
                }
            },
            stubs: {
                NuxtLink: RouterLinkStub
            }
        });
    });

    describe('KayitOl', () => {
        describe('Kayıt Olunabiliyor mu?', () => {
            it('Register:', async() => {
                await wrapper.vm.kayit();
                expect(mockFunction).toHaveBeenCalled();
            });

            test("snapshot4", () => {
                expect(wrapper).toMatchSnapshot();
            });



        });
    });
});