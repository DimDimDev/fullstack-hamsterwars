import React from 'react';
import { useHistory } from 'react-router-dom';
import HamsterOne from './HamsterOne'
import HamsterTwo from './HamsterTwo'
import './Components.css'


const Battle = ({ hamster1, setHamster1, hamster2, setHamster2 }) => {
    const history = useHistory();


    // function postResult(winner, loser) {
    //     updateWinner(winner)
    //     updateLoser(loser)
    //     test(winner, loser)
    // }

    // function test(winner, loser) {
    //     updateResult(winner, loser)
    // }


    async function postResult(winner, loser) {
        const match = {
            "contestantOne": hamster1,
            "contestantTwo": hamster2,
            "winner": winner,
            // "winnerResults": {
            //     "wins": +0,
            //     "defeats": +1,
            //     "games": +1
            // }
        }
        const url = 'api/games'
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(match)
        })
        updateWinner(winner)
        updateLoser(loser)
        console.log(match)
        console.log(await response.text())

        history.push('/lastgame')

    }

    async function updateLoser(loser) {
        const results = {
            "wins": +0,
            "defeats": +1,
            "games": +1
        }
        const url = `api/hamsters/${loser.id}/result`
        const response = await fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(results)
        })
        console.log(results)
        console.log('loser', loser.id, loser.name)
        console.log(await response.text())
    }

    async function updateWinner(winner) {
        const results = {
            "wins": +1,
            "defeats": +0,
            "games": +1
        }
        const url = `api/hamsters/${winner.id}/result`
        const response = await fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(results)
        })
        console.log(results)
        console.log('winner', winner.id, winner.name)
        console.log(await response.text())
    }

    return (
        <div className="Battle" >
            <div>
                <HamsterOne hamster1={hamster1} hamster2={hamster2} setHamster1={setHamster1} postResult={e => postResult(hamster1, hamster2)} />
            </div>
            <div>
                <h1>VS</h1>
            </div>
            <div>
                <HamsterTwo hamster2={hamster2} hamster1={hamster1} setHamster2={setHamster2} postResult={e => postResult(hamster2, hamster1)} />
            </div>
        </ div >
    )
}

export default Battle;