const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require('cors');

///Iniciando o App
const app = express();

app.use(express.json()); //Permitindo que envie dados json
app.use(cors());

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser:true, useUnifiedTopology:true});

requireDir("./src/Models");

// require('./src/Models/Product');

// const Product = mongoose.model('Product');

//Rotas

app.use('/api', require("./src/routes"));

app.listen(3001); //Aplicação ouvir a porta 3001