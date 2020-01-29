# planeacionRetiro
Calculo del monto necesario para poder retirarte

# Project Organization
|--README.md
|--.gitignore       <--File that defines which files will not be uploaded to git
|--package-lock.json<--
|--package.json     <--File with dependencies and configurations
|--node_modules     <--Folder with modules installed (npm i)
|--models
   |--index.js      <--Define Schemas and export them
|--routes
   |--index.js      <--Define routes to call data from backend (mongo)

# Commands for Project
1) create a repo in github with readme.md
2) git clone the repo to computer.
3) in gitbash position inside the created folder from now on the created folder.
or the root folder will be referred as express folder.
4) run cmd "create-react-app client", from now on the created client folder will
be referred as the react folder.


# Configuration for the Backend (in the express folder do the following:)
5) run cmd npm init
6) install dependencies by running the following commands: 
    npm install express --save
    npm install mongoose --save
    npm install if-env --save
7) create a gitignore file and inside it add node_modules
8) edit the package.json in the scripts object and add the following: 
    "start": "if-env NODE_ENV=production && npm run start:prod || npm run start:dev",
    "start:prod": "node server.js",
    "start:dev": "concurrently \"nodemon --ignore 'client/*'\" \"npm run client\"",
    "client": "cd client && npm run start",
    "install": "cd client && npm install",
    "build": "cd client && npm run build",
    "heroku-postbuild": "npm run build"

7) create a folder called models and inside the folder create a file called index.js
and edit with the following:
    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;

    const planRetSchema = new Schema({
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
        gastoAnual: { type: Number, required: true},
        afore: { type: Boolean, required: true},
        aforeSaldo: { type: Number, required: true},
        saldoActual: { type: Number, required: true},
        ahorroMensualSugerido: { type: Number, required: true},
        ahorroMensualActual: { type: Number, required: true},
        objetivoAhorro: { type: Number, required: true},
        pronosticoAhorro: { type: Number, required: true},
        objetivoGasto: { type: Number, required: true},
        pronosticoGasto: { type: Number, required: true},
        objetivoHerencia: { type: Number, required: true},
        pronosticoHerencia: { type: Number, required: true},
        tasaInversionAhorro: { type: Number, required: true},
        tasaInflacionAhorro: { type: Number, required: true},
        tasaInversionRetiro: { type: Number, required: true},
        tasaInflacionRetiro: { type: Number, required: true}
    });

    const Port = mongoose.model("Datos", planRetSchema);

    module.exports = {
        Datos: Datos
    };

8) create a folder called routes and inside the folder create a file called index.js 
and edit with the following: 
    const path = require("path");
    const router = require("express").Router();
    const db = require("../models");
    require("dotenv").config()

    //send variables to database

    //get all data to create graphs
    router.use("/data",function(req,res){
        db.Port
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    })

    module.exports = router;

9) create a file "server.js" and edit with the following:
    const express = require("express");
    const mongoose = require("mongoose");
    const routes = require("./routes");
    const app = express();
    const PORT = process.env.PORT || 3001;

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    if (process.env.NODE_ENV === "production") {
        app.use(express.static("client/build"));
    }

    app.use(routes);

    if (process.env.NODE_ENV === "development"){
        mongoose.connect("mongodb://localhost/planRetiro");
    }
    else {
        mongoose.connect(process.env.MONGODB_URI);    
    }

    app.listen(PORT, function () {
        console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
