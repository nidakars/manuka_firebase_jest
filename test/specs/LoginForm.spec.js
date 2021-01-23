import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import '../firebase'
import LoginForm from '../../components/uye_giris'

const localVue = createLocalVue()
localVue.use(Vuex)
describe('LoginForm', () => {
    let wrapper;
    const mockFunction = jest.fn();
    beforeEach(() => {
        wrapper = mount(LoginForm, {
            localVue,
            data() {
                return {
                    email: '',
                    password: '',
                };
            },
            store: new Vuex.Store({
                actions: {
                    login: mockFunction,
                },
            }),
            mocks: {
                $router: {
                    push: jest.fn()
                }
            },
            stubs: {
                NuxtLink: true,
                ["router-view"]: true,
            }
        });
    });

    describe('LoginForm', () => {
        describe('#Giris yap işlemi', () => {
            it('login fonksiyonun çağrılması', async() => {
                await wrapper.vm.girisYap();
                expect(mockFunction).toHaveBeenCalled();
            });
        });
    });
});