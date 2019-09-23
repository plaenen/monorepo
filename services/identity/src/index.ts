import express = require('express');

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res) {
  res.send('Hello Identity Service!');
});

app.listen(8080, function () {
  console.log('Example app listening on port 3000!');
});