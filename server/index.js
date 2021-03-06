const express = require('express');
const app = express();
const cors = require('cors');
const serverPort = process.env.PORT || 2048;
const path = require('path');


app.use(cors());
app.use(express.json());


//Static route to assets
app.use(express.static(__dirname + '/../build/'));
// app.use('/', express.static('public'))
// app.use('/', express.static(__dirname + '/../public'))
app.use('/assets', express.static(__dirname + '/assets'))

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

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/../build/index.html'), function (err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})

app.listen(serverPort, () =>
    console.log('Server is listening on port ' + serverPort)
);