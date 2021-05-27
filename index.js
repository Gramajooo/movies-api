const express = require('express');

const app = express();

const { config } = require('./config/index');

const moviesApi = require('./routes/movies.js');

moviesApi(app);

// app.get('/', function (req, res) {
//   res.send('polacos con camarones');
// });
// app.get('/json', function (req, res) {
//   res.json({ hello: 'world' });
// });

app.listen(config.port, function () {
  console.log(`Listening  http://localhost:${config.port}`);
});
