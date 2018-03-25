import Vue from 'vue';
import Vuex from 'vuex';
import { getProximasActividades, getActividades, getCategorias } from '@/services/api'

Vue.use(Vuex);

export const ADD_EVENTOS = 'ADD_EVENTOS';
export const ADD_CATEGORIAS = 'ADD_CATEGORIAS';

const state = {
    proximasActividades: [],
    eventos: [],
    categorias: []
};

const getters = {

};

const actions = {
    loadProximasActividades(context) {
        return getProximasActividades()
            .then(proximasActividades => context.commit('updateProximasActividades', proximasActividades))
            .then(function() {
                document.querySelector('.uk-spinner').style.display = 'none';
              });
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
    updateProximasActividades(state, proximasActividades) {
        state.proximasActividades = proximasActividades;
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