const express = require ('express');

const app = express();


app.get('/', (req, res)=> {
    res.send("Hello NodeJS");
});

app.listen(3001); //Aplicação ouvir a porta 3001