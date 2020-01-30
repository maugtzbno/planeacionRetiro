import axios from "axios";

export default {
    // Get all analysis from MongoDB
    getAllData: function(){
        return axios.get('/getAllData')
    },
    
    // Get latest analysis from MongoDB
    getData: function(data){
        console.log("dentro de utils")
        console.log(data)
        var path = "/getData/"+data.nombre+"/"+data.apellidoPat+"/"+data.apellidoMat+"/"+data.celular
        return axios.get(path)
    },

    //Send data to Server
    sendData: function(data){
        return axios.post('/sendData', data)

    },

    //Get scenario from Server
    getScenario: function(){
        return axios.get('/getScenario')
    },

    //Send data to Server
    sendCont: function(data){
        return axios.post('/sendCont', data)

    }
}
