import Vue from 'vue';
import Vuex from 'vuex';
import { getProximasActividades, getSegmentoActividades, getBusquedaActividades, getCategorias, getBusquedaCategoria } from '@/services/api'

Vue.use(Vuex);

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
    categorias: [],
    busquedaCategoria: [],
    contadorBusquedaCategoria: 0,
    limiteBusquedaCategoria: 10,
    totalBusquedaCategoria: 0
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
    loadCategorias(context) {
        return getCategorias()
            .then(categorias => context.commit('updateCategorias', categorias));
    },
    loadBusquedaCategoria(context, select) {
        return getBusquedaCategoria(select, state.limiteBusquedaCategoria, 0)
            .then(busquedaCategoria => context.commit('updateBusquedaCategoria', busquedaCategoria))
    },
    loadMasBusquedaCategoria(context, select) {
        return getBusquedaCategoria(select, state.limiteBusquedaCategoria, state.contadorBusquedaCategoria)
            .then(busquedaCategoria => context.commit('updateMasBusquedaCategoria', busquedaCategoria))
    },
    loadBusquedaCategoriaReset(context) {
        context.commit('updateBusquedaCategoriaReset')
    },
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
    updateCategorias(state, categorias) {
        state.categorias = categorias;
    },
    updateBusquedaCategoria(state, busquedaCategoria) {
        state.totalBusquedaCategoria = busquedaCategoria.total;
        state.busquedaCategoria = busquedaCategoria.resultados;
        state.contadorBusquedaCategoria = 10;
    },
    updateMasBusquedaCategoria(state, busquedaCategoria) {
        busquedaCategoria.resultados.forEach(function (value, key) {
            state.busquedaCategoria.push(value);
        });
        state.contadorBusquedaCategoria = state.contadorBusquedaCategoria + 10;
    },
    updateBusquedaCategoriaReset(state) {
        state.busquedaCategoria = []
        state.contadorBusquedaCategoria = 0
        state.limiteBusquedaCategoria = 10
        state.totalBusquedaCategoria = 0
    }
}

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
});

export default store;