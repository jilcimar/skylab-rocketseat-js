const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

///Iniciando o App
const app = express();

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser:true, useUnifiedTopology:true});

requireDir("./src/Models");

// require('./src/Models/Product');

const Product = mongoose.model('Product');

//Primeira Rota
app.get('/', (req, res)=> {

    Product.create({
        title: 'React Native',
        description: 'Build app native',
        url: 'hhtps://www.google.com'
    });

    res.send("Hello NodeJS");
});

app.listen(3001); //Aplicação ouvir a porta 3001