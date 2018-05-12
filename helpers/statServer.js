const dbmanager = require('./dbmanager');
const http = require('http');

http.createServer((req, res) => {
}).listen(3000, () => {
  console.log('Statistics server listening on: 3000'); // eslint-disable-line no-console
});
