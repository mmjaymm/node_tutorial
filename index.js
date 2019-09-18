const express = require('express');
const routes = require('./routes/api');
const body_parser = require('body-parser');

const app = express();

app.use(body_parser.json());

// initialize t=routes
app.use('/api', routes);

app.get('/', function (request, response) {
    console.log("GET request");
    response.send({
        name: "Mark Jay Mercado"
    });
});

app.listen(process.env.port || 4000, function () {
    console.log('Now listening to port 4000');
});

