"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// Create a new express application instance
var app = express();
app.get('/', function (req, res) {
    res.send('Hello Identity Service!');
});
app.listen(8080, function () {
    console.log('Example app listening on port 3000!');
});
