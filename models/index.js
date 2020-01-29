const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RetSchema = new Schema({
    nombre: { type: String, required: true},
    apellidoPat: { type: String, required: true},
    apellidoMat: { type: String, required: true},
    ciudad: { type: String, required: true},
    celular: { type: String, required: true},
    edadActual: { type: Number, required: true},
    edadRetiro: { type: Number, required: true},
    tiempoAnosAhorro: { type: Number, required: true},
    tiempoMesesAhorro: { type: Number, required: true},
    edadEsperanza: { type: Number, required: true},
    tiempoAnosRetiro: { type: Number, required: true},
    tiempoMesesRetiro: { type: Number, required: true},
    ingresoMensualBruto: { type: Number, required: true},
    tasaRetencion: { type: Number, required: true},
    ingresoMensualNeto: { type: Number, required: true},
    gastoMensual: { type: Number, required: true},
    ahorroMensualActual: { type: Number, required: true},
    saldoActual: { type: Number, required: true},
    afore: { type: Boolean, required: true},
    aforeSaldo: { type: Number, required: true},
    tasaRealAhorro: { type: Number, required: true},
    pronosticoAhorro: { type: Number, required: true},
    tasaRealRetiro: { type: Number, required: true},
    pronosticoHerencia: { type: Number, required: true},
    objetivoHerencia: { type: Number, required: true},
    objetivoAhorro: { type: Number, required: true},
    objetivoAhorroMensual: { type: Number, required: true},
    objetivoGastoMensual: { type: Number, required: true}
});

const BaseRet = mongoose.model("BaseRet", RetSchema);

module.exports = {
    BaseRet: BaseRet
};