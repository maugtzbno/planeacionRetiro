const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/planRetiro"
  );

  const retSeed = [
    {
      nombre: "Mauricio",
      apellidoPat: "Gutierrez",
      apellidoMat: "Briseno", 
      ciudad: "CDMX",
      celular: "8116639856",

      edadActual: 35,
      edadRetiro: 65,
      tiempoAnosAhorro: 30,
      tiempoMesesAhorro: 360,
      edadEsperanza: 85,
      tiempoAnosRetiro: 20,
      tiempoMesesRetiro: 240,

      ingresoMensualBruto: 100000,
      tasaRetencion: 0.30,
      ingresoMensualNeto: 70000,
      gastoMensual: 50000,
      ahorroMensualActual: 20000,
      
      saldoActual: 120000,
      afore: true,
      aforeSaldo: 300000,
      
      tasaRealAhorro: 0.04,
      pronosticoAhorro: 7000000,
      tasaRealRetiro: 0.03,
      pronosticoHerencia: 145000,

      objetivoHerencia: 0,
      objetivoAhorro: 150000,
      objetivoAhorroMensual: 15000,
      objetivoGastoMensual: 35000
  }
  ]

  db.BaseRet
  .remove({})
  .then(() => db.BaseRet.collection.insertMany(retSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  const contSeed = [
    {
      nombre: "Mauricio",
      correo: "maugtzbno@gmail.com",
      celular: "8116639856"
    }
  ]

  db.BaseCont
  .remove({})
  .then(() => db.BaseCont.collection.insertMany(contSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


