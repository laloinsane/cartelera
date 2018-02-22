import axios from 'axios';

const API_URL = 'http://138.197.203.1/cartelera-api/public/api'

let getActividades = () => {
    return axios.get(`${API_URL}/cartelera`)
}

let getCategorias = () => {
    return axios.get(`${API_URL}/categorias`)
}

export {
    getActividades
}