import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import '../firebase'
import LoginForm from '../components/uye_giris'

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
            }
        });
    });

    describe('LoginForm', () => {
        describe('#Giris yap işlemi', () => {
            it('login fonksiyonun çağrılması', async() => {
                await wrapper.vm.login();
                expect(mockFunction).toHaveBeenCalled();
            });
            /* 
                        it("Successfull Login", () => {
                            let loginButton = wrapper.find(".btnLogin");
                            console.log = jest.fn();
                            loginButton.trigger("click").then(() => {
                                expect(console.log).toHaveBeenCalledWith('Giriş Başarılı');
                            });
                        }); */
        });
    });
});