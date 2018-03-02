import axios from 'axios';
import moment from 'moment';
moment.locale('es')

const API_URL = 'https://sgcc.cl/cartelera-api/public/api'

function horasDias(horas){
    var cont = 1;
    var resultado = horas - 24;
    while(resultado > 24){
        resultado = resultado - 24;
        cont++;
    }
    if(cont == 1)
        return cont + " día";
    return cont + " días";
    
}

function duracionEvento(from_date, end_date){
    var fromDate = moment.utc(from_date);
    var toDate = moment.utc(end_date);

    var hourDiff = toDate.diff(fromDate,'hours');
    var minuteDiff = toDate.diff(fromDate,'minutes');

    var hourDuration = Math.floor(minuteDiff/60);
    var minuteDuration = minuteDiff % 60;

    if(hourDuration == 0){
        return minuteDuration+ " minutos";
    }else{
        if(hourDuration == 1){
            if(minuteDuration == 0){
                return hourDuration+ " hora";
            }else{
                return hourDuration+ " hora con " +minuteDuration+ " minutos";
            }
        }else{
            if(hourDuration < 24){
                if(minuteDuration == 0){
                    return hourDuration+ " horas";
                }else{
                    return hourDuration+ " horas con " +minuteDuration+ " minutos";
                }
            }else{
                return horasDias(hourDuration);
            }
        }
    }
}

function getActividades(){
    return axios.get(`${API_URL}/cartelera`)
    .then(function (response) {
        response.data.forEach(element => {
            if(element.RutaImg==null){
                element.RutaImg = 'https://instagram.fpmc1-1.fna.fbcdn.net/vp/62e7efa2ab7b169f89e5cfdd144f13a3/5B4D39AE/t51.2885-15/e35/26303153_1993871283961664_3279091338745741312_n.jpg';
            } 
            element.cuantoFalta = moment(element.Fecha_ini).fromNow() //falta implementar
            element.fechaLAnzamiento = moment(element.Creado_El).fromNow()
            element.duracion = duracionEvento(element.Fecha_ini, element.Fecha_fin)
            element.fecha_inicio_formato = moment(element.Fecha_ini).format('DD/MM/YYYY')
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