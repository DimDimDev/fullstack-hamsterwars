const express = require('express');
const app = express();
const cors = require('cors');
const serverPort = process.env.PORT || 2048;

app.use(cors());
app.use(express.json());


//Static route to assets
app.use(express.static(__dirname + '/../build'));
app.use('/', express.static('public'))
app.use('/assets', express.static('assets'))

//Routes imports
const hamstersRoute = require('./routes/hamsters');
const chartsRoute = require('./routes/charts');
const gamesRoute = require('./routes/games');
const statsRoute = require('./routes/stats');

//Routes
app.use('/api/hamsters', hamstersRoute);
app.use('/api/charts', chartsRoute);
app.use('/api/games', gamesRoute);
app.use('/api/stats', statsRoute);

app.listen(serverPort, () =>
    console.log('Server is listening on port ' + serverPort)
);