import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import '../firebase'
import RegisterForm from '../../components/uye_kayit.vue'

const localVue = createLocalVue()
localVue.use(Vuex)
describe('RegisterForm', () => {
    let wrapper;
    const mockFunction = jest.fn();
    beforeEach(() => {
        wrapper = mount(RegisterForm, {
            localVue,
            data() {
                return {

                    email: 'redirectTest@test.com',
                    password: '123456',
                    ad: 'Test',
                    soyad: 'Test',

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
            }
        });
    });

    describe('methods', () => {
        describe('#Kayit işlemi', () => {
            it('register fonksiyonun çağrılması', async() => {
                await wrapper.vm.register();
                expect(mockFunction).toHaveBeenCalled();
            });
            /* 
                  it("Successfull Register", () => {
                    let registerButton = wrapper.find(".Kbtn");
                    console.log = jest.fn();
                    registerButton.trigger("click").then(() => {
                      expect(console.log).toHaveBeenCalledWith('Kayıt Başarılı');
                    });
                  }); */
        });
    });
});