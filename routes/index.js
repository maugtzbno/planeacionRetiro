const path = require("path");
const router = require("express").Router();
const db = require("../models");
require("dotenv").config()

function ahorro(ingresoMensualBruto, tasaRetencion, gastoMensual, edadActual, edadRetiro, tasaReal, saldoAhorro, aforeSaldo){
    meses = (edadRetiro - edadActual)*12 +1
    saldoFinal = 0;
    for (var i=0; i<meses; i++){
        if (i==0) {
            saldoFinal += saldoAhorro
        }
        else if (edadActual + i/12 == 65) {
            saldoFinal += ingresoMensualBruto * (1 - tasaRetencion) - gastoMensual
            a = (1 + tasaReal)**(1/12)
            a = a**i
            b = (1 - .01)**(1/12)
            b = b**i
            c = 0.80 * ingresoMensualBruto * 0.065
            d = ((((1 + tasaReal)**(1/12))**i * ((1 - .01)**(1/12))**i-1)/(((1 + tasaReal)**(1/12)) * ((1 - .01)**(1/12))-1))
            saldoFinal += aforeSaldo * a * b + (c * d)
        }
        else {
            saldoFinal += ingresoMensualBruto * (1 - tasaRetencion) - gastoMensual
            saldoFinal = saldoFinal * (1 + tasaReal/12)
        }
    }
    return saldoFinal        
}

function gasto(gastoMensual, edadRetiro, edadEsperanza, tasaReal, saldoInicial){
    meses = (edadEsperanza - edadRetiro)*12 +1
    saldoFinal = 0;
    for (var i=0; i<meses; i++){
        if (i==0) {
            saldoFinal += saldoInicial
        }
        else {
            saldoFinal = saldoFinal * (1 + tasaReal/12)
            saldoFinal = saldoFinal - gastoMensual
        }
    }
    return saldoFinal 
}

function calcSaldoInicial(gastoMensual, edadRetiro, edadEsperanza, tasaReal){
    saldoFinal = -1000;
    saldoInicialTest = 0
    i=0;
    while (saldoFinal < 0){
        saldoFinal = gasto(gastoMensual, edadRetiro, edadEsperanza, tasaReal, saldoInicialTest+i*10000)
        i +=1
    }
    return saldoInicialTest+i*10000
}

function calcAhorroInicial(objetivoAhorro, tasaRetencion, gastoMensual, edadActual, edadRetiro, tasaReal, saldoAhorro, aforeSaldo){
    saldoFinal = -1000;
    ingresoMensualBruto = gastoMensual;
    i=0;
    while(saldoFinal<objetivoAhorro){
        saldoFinal = ahorro(ingresoMensualBruto+i*100, tasaRetencion, gastoMensual, edadActual, edadRetiro, tasaReal, saldoAhorro, aforeSaldo)
        i+=1
    }
    return ((ingresoMensualBruto+i*100)*(1-tasaRetencion)-gastoMensual)
}

function retiro(data){

    nombre = data.nombre;
    apellidoPat = data.apellidoPat;
    apellidoMat = data.apellidoMat;
    ciudad = data.ciudad;
    celular = data.celular;

    edadActual =data.edadActual*1;
    edadRetiro = data.edadRetiro*1;
    tiempoAnosAhorro = edadRetiro - edadActual;
    tiempoMesesAhorro = tiempoAnosAhorro * 12;
    edadEsperanza = data.edadEsperanza*1;
    tiempoAnosRetiro = edadEsperanza - edadRetiro;
    tiempoMesesRetiro = tiempoAnosRetiro * 12;

    ingresoMensualBruto = data.ingresoMensualBruto*1;
    tasaRetencion = data.tasaRetencion*1;
    ingresoMensualNeto = ingresoMensualBruto * (1 - tasaRetencion);
    gastoMensual = data.gastoMensual*1;
    ahorroMensualActual = ingresoMensualNeto - gastoMensual;
    
    saldoActual = data.saldoActual*1;
    afore = data.afore;
    aforeSaldo = data.aforeSaldo*1;

    tasaRealAhorro = 0.04;
    pronosticoAhorro = ahorro(ingresoMensualBruto, tasaRetencion, gastoMensual, edadActual, edadRetiro, tasaRealAhorro, saldoActual, aforeSaldo);
    tasaRealRetiro = 0.03; 
    pronosticoHerencia = gasto(gastoMensual, edadRetiro, edadEsperanza, tasaRealRetiro, pronosticoAhorro)

    objetivoHerencia = 0;
    objetivoAhorro = calcSaldoInicial(gastoMensual, edadRetiro, edadEsperanza, tasaRealRetiro)
    objetivoAhorroMensual = calcAhorroInicial(objetivoAhorro, tasaRetencion, gastoMensual, edadActual, edadRetiro, tasaRealAhorro, saldoActual, aforeSaldo)
    objetivoGastoMensual = ingresoMensualNeto - objetivoAhorroMensual

    const insData = [
        {
          nombre: nombre,
          apellidoPat: apellidoPat,
          apellidoMat: apellidoMat, 
          ciudad: ciudad,
          celular: celular,

          edadActual: edadActual,
          edadRetiro: edadRetiro,
          tiempoAnosAhorro: tiempoAnosAhorro,
          tiempoMesesAhorro: tiempoMesesAhorro,
          edadEsperanza: edadEsperanza,
          tiempoAnosRetiro: tiempoAnosRetiro,
          tiempoMesesRetiro: tiempoMesesRetiro,

          ingresoMensualBruto: ingresoMensualBruto,
          tasaRetencion: tasaRetencion,
          ingresoMensualNeto: ingresoMensualNeto,
          gastoMensual: gastoMensual,
          ahorroMensualActual: ahorroMensualActual,
          
          saldoActual: saldoActual,
          afore: afore,
          aforeSaldo: aforeSaldo,
          
          tasaRealAhorro: tasaRealAhorro,
          pronosticoAhorro: pronosticoAhorro,
          tasaRealRetiro: tasaRealRetiro,
          pronosticoHerencia: pronosticoHerencia,

          objetivoHerencia: objetivoHerencia,
          objetivoAhorro: objetivoAhorro,
          objetivoAhorroMensual: objetivoAhorroMensual,
          objetivoGastoMensual: objetivoGastoMensual
      }
    ]

    return insData
}

//get all data to create graphs
router.use("/getAllData",function(req,res){
    db.BaseRet
        .find({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
})

//retrieve calculated data of user
router.use("/getData/:nombre/:apellidoPat/:apellidoMat/:celular", function (req, res){
    console.log("dentro de routes")
    console.log(req.params)
    db.BaseRet
        .find({"nombre":req.params.nombre, "apellidoPat":req.params.apellidoPat, "apellidoMat":req.params.apellidoMat, "celular":req.params.celular})
        .then(dbModel =>{
            res.json(dbModel)
        })
        .catch(err =>{
            console.log("catch")
            res.status(422).json(err)
        });
})

//send data to database
router.post("/sendData", function(req, res){
    dataFin = retiro(req.body)
    db.BaseRet.collection
        .insertMany(dataFin)
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));

})

// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;