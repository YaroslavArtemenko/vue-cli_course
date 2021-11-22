import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    // храним какие-то данные,
    state: {
        message: 'Hello vuex'
    },
    // служит для того, чтобы менять наш стейт
    // payload - это то, что передаем в мутацию с action
    mutations: {
        setMessage (state, message) {
            state.message = message
        }
    },
    // свойство, в котором мы можем изменять стейт, но не напряю, а используя мутации
    // через коммит обращаемся к мутации
    // нужен для того, чтобы работать с асинхронными данных, потому что должны ждать
    actions: {
        setMessage ({commit}, payload) {
            commit('setMessage', payload)
        }
    },
    // action and mutation = setters, getter - получаем значения
    getters: {
        getMessage (state) {
            return state.message
        }
    },
})