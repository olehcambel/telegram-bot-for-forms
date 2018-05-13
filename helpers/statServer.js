// const dbmanager = require('./dbmanager');
// const http = require('http');
const express = require('express');
const packageInfo = require('./package.json');

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', function (req, res) {
  res.json({ version: packageInfo.version });
});

var server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Web server started at http://%s:%s', host, port);
});

// const PORT = process.env.PORT || 3000
// http.createServer((req, res) => {
// }).
// listen(PORT, () => {
//   console.log('Statistics server listening on: 3000'); // eslint-disable-line no-console
// });
