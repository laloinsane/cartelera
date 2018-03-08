import Vue from 'vue';
import Vuex from 'vuex';
import { getActividades, getCategorias } from '@/services/api'

Vue.use(Vuex);

export const ADD_PROXIMOS_EVENTOS = 'ADD_PROXIMOS_EVENTOS';
export const ADD_EVENTOS = 'ADD_EVENTOS';
export const ADD_CATEGORIAS = 'ADD_CATEGORIAS';

const state = {
    proximosEventos: [],
    eventos: [],
    categorias: []
};

const getters = {

};

const actions = {
    async fetchProximosEventos(context) {
        return getActividades()
            .then(proximosEventos => context.commit(ADD_PROXIMOS_EVENTOS, proximosEventos));
   },
    async fetchEventos(context) {
        return getActividades()
            .then(eventos => context.commit(ADD_EVENTOS, eventos));
    },
    async fetchCategorias(context) {
        return getCategorias()
            .then(categorias => context.commit(ADD_CATEGORIAS, categorias));
    }
};

const mutations = {
    [ADD_PROXIMOS_EVENTOS](state, proximosEventos) {
        state.proximosEventos = proximosEventos;
    },
    [ADD_EVENTOS](state, eventos) {
        state.eventos = eventos;
    },
    [ADD_CATEGORIAS](state, categorias) {
        state.categorias = categorias;
    }
}

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
});

export default store;