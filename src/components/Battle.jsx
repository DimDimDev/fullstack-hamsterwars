import React from 'react';
import { useHistory } from 'react-router-dom';
import HamsterOne from './HamsterOne'
import HamsterTwo from './HamsterTwo'
import './Components.css'



const Battle = ({ hamster1, setHamster1, hamster2, setHamster2 }) => {
    const history = useHistory();


    async function postResult(winner) {
        const match = {
            "contestantOne": hamster1,
            "contestantTwo": hamster2,
            "winner": winner
        }
        const url = 'http://localhost:3000/games'
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(match)
        })
        console.log(match)
        console.log(await response.text())
        history.push('matchup/lastgame')
    }

    return (
        <div className="Battle" >
            <div>
                <HamsterOne hamster1={hamster1} setHamster1={setHamster1} postResult={e => postResult(hamster1)} />
            </div>
            <div>
                <h1>VS</h1>
            </div>
            <div>
                <HamsterTwo hamster2={hamster2} setHamster2={setHamster2} postResult={e => postResult(hamster2)} />
            </div>
        </ div >
    )
}

export default Battle;