const express = require('express');
const app = express();

app.listen(4000);

const express = require ('express');
const app =express();

app.get('/getError', (req, res, next)=> {

    next(Error('message'));
});

app.use((err, req, res, next)=> {

    console.log(err.stack);
    next(err);
});

app.listen(4000);

const express = require('express');

const app= express();

app.get('/getError', (req, res, next) => {
  next(Error('message'));

});

app.use((err, req, res, next) => {

    console.log(err.stack);
    next(err);
});

app.use((err, req, res, next) =>{

    res.status(500).send(err.message)
});

app.listen(4000);