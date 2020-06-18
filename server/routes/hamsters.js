const { Router } = require('express');
const { db } = require('../firebase')

let router = new Router();



//Returns all hamsters
router.get('/', async (req, res) => {
    try {
        let hamstersArray = [];
        let hamstersDB = await db.collection('hamsters').get();

        hamstersDB.forEach(hamster => {
            hamstersArray.push(hamster.data());
        })

        res.status(200).send(hamstersArray)

    } catch (err) {
        res.status(500)
        console.error(err)
    }
})

//Create new Hamster
router.post('/', async (req, res) => {
    try {
        let newHamster =
            await db.collection('hamsters').doc().set({
                id: req.body.id,
                name: req.body.name,
                age: req.body.age,
                loves: req.body.loves,
                favFood: req.body.favFood,
                imgName: req.body.imgName,
                games: 0,
                wins: 0,
                defeats: 0
            })

        res.status(200).send({ msg: newHamster })

    } catch (err) {
        res.status(500)
        console.error(err)
    }
})

//Returns hamsterlength
// router.get('/length', async (req, res) => {
//     try {
//         let hamstersArray = [];
//         let hamstersDB = await db.collection('hamsters').get();

//         hamstersDB.forEach(hamster => {
//             hamstersArray.push(hamster.data());
//         })

//         res.status(200).send(hamstersArray)

//     } catch (err) {
//         res.status(500)
//         console.error(err)
//     }
// })

//Returns a random hamster
router.get('/random', async (req, res) => {
    try {
        let hamstersArray = [];
        let hamstersDB = await db.collection('hamsters').get();

        hamstersDB.forEach(hamster => {
            hamstersArray.push(hamster.data());
        })

        res.status(200).send(hamstersArray[Math.floor(Math.random() * hamstersArray.length)])

    } catch (err) {
        res.status(500)
        console.error(err)
    }
})

//Updates result from a game
router.put('/:id/result', async (req, res) => {
    try {
        let hamsterId;
        let results;
        let hamsterQuery = await db.collection('hamsters')
            .where("id", "==", parseInt(req.params.id)).get();

        hamsterQuery.forEach(async hamster => {
            let hamsterResults = hamster.data()
            hamsterId = hamster.id
            results = {
                wins: hamsterResults.wins + req.body.wins,
                defeats: hamsterResults.defeats + req.body.defeats,
                games: hamsterResults.games + req.body.games
            }

            await db.collection('hamsters').doc(hamsterId).update(results)

        })

        res.status(200).send("Result updated for")

    } catch (err) {
        console.error(err)
        res.status(500).send(err)
    }
})


//Returns a specific hamster
router.get('/:id', async (req, res) => {
    try {
        let hamster = await db.collection('hamsters')
            .where("id", "==", parseInt(req.params.id)).get();

        hamster.forEach(hamster => {
            res.status(200).send(hamster.data());
        })

    } catch (err) {
        res.status(500)
        console.error(err)
    }
})


module.exports = router;