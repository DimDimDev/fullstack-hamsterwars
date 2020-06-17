const { Router } = require('express');
const { db } = require('../firebase')

let router = new Router();

//Returns a specific game
router.get('/:id1/:id2', async (req, res) => {
    try {
        let gamesArray = [];
        let gamesDB = await db.collection('games')
            .where('contestantOne.id', "==", parseInt(req.params.id1))
            .where('contestantTwo.id', "==", parseInt(req.params.id2))
            .get()
        gamesDB.forEach(game => {
            gamesArray.push(game.data());
        })

        res.status(200).send(gamesArray)

    } catch (err) {
        res.status(500)
        console.error(err)
    }
})

//Returns the last game
router.get('/last', async (req, res) => {
    try {
        let gamesArray = [];
        let gamesDB = await db.collection('games').orderBy('timeStamp', 'desc').limit(1).get();

        gamesDB.forEach(game => {
            gamesArray.push(game.data());
        })

        res.status(200).send(gamesArray)

    } catch (err) {
        res.status(500)
        console.error(err)
    }
})

//Returns the five latest games
router.get('/latest', async (req, res) => {
    try {
        let gamesArray = [];
        let gamesDB = await db.collection('games').orderBy('timeStamp', 'desc').limit(10).get();

        gamesDB.forEach(game => {
            gamesArray.push(game.data());
        })

        res.status(200).send(gamesArray)

    } catch (err) {
        res.status(500)
        console.error(err)
    }
})

//Returns all games
router.get('/', async (req, res) => {
    try {
        let gamesArray = [];
        let gamesDB = await db.collection('games').get();

        gamesDB.forEach(game => {
            gamesArray.push(game.data());
        })

        res.status(200).send(gamesArray)

    } catch (err) {
        res.status(500)
        console.error(err)
    }
})


//Saves a game
router.post('/', async (req, res) => {
    try {
        let match = {
            timeStamp: new Date().toLocaleString(),
            contestantOne: req.body.contestantOne,
            contestantTwo: req.body.contestantTwo,
            winner: req.body.winner
        }

        await db.collection('games').doc().set(match);
        res.status(200).send("New match added to games")

    } catch (err) {
        res.status(500)
        console.error(err)
    }
})

// router.post('/', async (req, res) => {
//     try {
//         let winnerResults = {
//             wins: req.body.winner.wins + req.body.wins,
//             defeats: req.body.winner.defeats + req.body.defeats,
//             games: req.body.winner.games + req.body.games
//         }
//         let match = {
//             timeStamp: new Date().toLocaleString(),
//             contestantOne: req.body.contestantOne,
//             contestantTwo: req.body.contestantTwo,
//             winner: req.body.winner,
//             winnerResults: winnerResults
//         }


//         await db.collection('games').doc().set(match);
//         res.status(200).send("New match added to games")

//     } catch (err) {
//         res.status(500)
//         console.error(err)
//     }
// })

module.exports = router;