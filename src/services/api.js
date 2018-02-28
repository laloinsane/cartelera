import axios from 'axios';
import moment from 'moment';
moment.locale('es')

const API_URL = 'http://138.197.203.1/cartelera-api/public/api'

function getActividades(){
    return axios.get(`${API_URL}/cartelera`)
    .then(function (response) {
        response.data.forEach(element => {
            if(element.RutaImg==null){
                element.RutaImg = 'https://instagram.fpmc1-1.fna.fbcdn.net/vp/62e7efa2ab7b169f89e5cfdd144f13a3/5B4D39AE/t51.2885-15/e35/26303153_1993871283961664_3279091338745741312_n.jpg';
            } 
            element.cuantoFalta = moment().fromNow()
            element.fechaLAnzamiento = moment(element.Creado_El).fromNow()
            element.duracion = '' // implementar esta chiet 
        }); 
        return response.data;
    })
    .catch(function (error) {
        return 'An error occured..' + error;
    })
}

function getCategorias(){
    return axios.get(`${API_URL}/categorias`)
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
        return 'An error occured..' + error;
    })
}

export {
    getActividades,
    getCategorias
}