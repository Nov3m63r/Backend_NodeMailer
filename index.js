//"use strict";
// const nodemailer = require('../lib/nodemailer');
// const nodemailer = require('../nodemailer/lib/nodemailer');

const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

/*
// HTTP-server on Node.js using built-in http/https modules

const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
    console.log(request.url);
    response.end('Hello Node.js Server!');
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log(`server is listening on ${port}`);
})

// end of HTTP-server code
*/

// HTTP-server on Node.js using Express module
// https://medium.com/devschacht/node-hero-chapter-4-c2ebcd12565c
const express = require('express')
const app = express()
const port = 3000
app.get(‘/’, (request, response) => {
    response.send('Hello from Express!')
})
app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})


// см ссылку выше:
// добавить обработчики запросов/ошибок
// добавить шаблоны html
// добавить обработчик маршрута