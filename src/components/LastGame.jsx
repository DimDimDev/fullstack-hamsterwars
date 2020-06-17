import React, { useState, useEffect } from 'react';
import HamsterCardDisplayOnly from './HamsterCardDisplayOnly'
import './Components.css'
import Button from '@material-ui/core/Button';

const LastGame = () => {
    const url = '/api/games/last';
    const [contestantOne, setContestantOne] = useState(null);
    const [contestantTwo, setContestantTwo] = useState(null);
    const [matchWinner, setMatchWinner] = useState(null);
    const [timeStamp, setTimeStamp] = useState(null);
    const [games, setGames] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const json = await response.json();
            setMatchWinner(json[0].winner)
            setContestantOne(json[0].contestantOne)
            setContestantTwo(json[0].contestantTwo)
            setTimeStamp(json[0].timeStamp)
            setGames(json[0].winner.games)
        }
        fetchData();
    }, [url, games])
    return (
        <div className="LastGame">
            <div>
                {timeStamp && contestantOne && contestantTwo ?
                    <div><p>{timeStamp} - {contestantOne.name} vs {contestantTwo.name} - Winner</p></div> : 'no data'}
            </div>
            <header className="specificHeader">
            </header >
            <div>
                {/* <p>Winner!</p> */}
                <div> {matchWinner ? <HamsterCardDisplayOnly hamster={matchWinner} /> : 'nodata'}
                </div>
                <a href="/battle">
                    <Button color="primary" variant="contained">New Battle!</Button>
                </a>
            </div>
        </div >
    );

}

export default LastGame;