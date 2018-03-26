import Vue from 'vue';
import Vuex from 'vuex';
import { getProximasActividades, getSegmentoActividades, getBusquedaActividades, getActividades, getCategorias } from '@/services/api'

Vue.use(Vuex);

export const ADD_EVENTOS = 'ADD_EVENTOS';
export const ADD_CATEGORIAS = 'ADD_CATEGORIAS';

const state = {
    proximasActividades: [],
    actividades: [],
    contadorActividades: 0,
    limiteActividades: 10,
    totalActividades: 0,
    busqueda: [],
    contadorBusqueda: 0,
    limiteBusqueda: 10,
    totalBusqueda: 0,
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
    loadActividades(context) {
        return getSegmentoActividades(state.limiteActividades, state.contadorActividades)
            .then(actividades => context.commit('updateActividades', actividades))
    },
    loadBusquedaActividades(context, filter) {
        return getBusquedaActividades(filter, state.limiteBusqueda, 0)
            .then(busqueda => context.commit('updateBusquedaActividades', busqueda))
    },
    loadMasBusquedaActividades(context, filter) {
        return getBusquedaActividades(filter, state.limiteBusqueda, state.contadorBusqueda)
            .then(busqueda => context.commit('updateMasBusqueda', busqueda))
    },
    loadBusquedaReset(context) {
        context.commit('updateBusquedaReset')
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
    updateActividades(state, actividades) {
        state.totalActividades = actividades.total;
        if(state.contadorActividades === 0){
            state.actividades = actividades.resultados;
            state.contadorActividades = state.contadorActividades + 10;
        }else{
            actividades.resultados.forEach(function (value, key) {
                state.actividades.push(value);
            });
            state.contadorActividades = state.contadorActividades + 10;
        }
    },
    updateBusquedaActividades(state, busqueda) {
        state.totalBusqueda = busqueda.total;
        state.busqueda = busqueda.resultados;
        state.contadorBusqueda = 10;
    },
    updateMasBusqueda(state, busqueda) {
        busqueda.resultados.forEach(function (value, key) {
            state.busqueda.push(value);
        });
        state.contadorBusqueda = state.contadorBusqueda + 10;
    },
    updateBusquedaReset(state) {
        state.busqueda = []
        state.contadorBusqueda = 0
        state.limiteBusqueda = 10
        state.totalBusqueda = 0
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