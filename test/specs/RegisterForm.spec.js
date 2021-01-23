import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import '../firebase'
import RegisterForm from '../../components/uye_kayit'


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
                NuxtLink: true,
                ["router-view"]: true,
            }
        });
    });

    describe('methods', () => {
        describe('#Kayit işlemi', () => {
            it('register fonksiyonun çağrılması', async() => {
                await wrapper.vm.kayit();
                expect(mockFunction).toHaveBeenCalled();
            });

        });
    });
});