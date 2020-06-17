import React, { useState, useEffect } from 'react';
import HamsterCardDisplayOnly from './HamsterCardDisplayOnly'
import './Components.css'

const LastGame = () => {
    const url = 'http://localhost:3000/games/last';
    const [contestantOne, setContestantOne] = useState(null);
    const [contestantTwo, setContestantTwo] = useState(null);
    const [matchWinner, setMatchWinner] = useState(null);
    const [timeStamp, setTimeStamp] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const json = await response.json();
            setMatchWinner(json[0].winner)
            setContestantOne(json[0].contestantOne)
            setContestantTwo(json[0].contestantTwo)
            setTimeStamp(json[0].timeStamp)
        }
        fetchData();
    }, [url])
    return (
        <div className="LastGame">
            <div>{timeStamp && contestantOne && contestantTwo ?
                <div>{timeStamp} - {contestantOne.name} vs {contestantTwo.name} - Winner</div> : 'no data'}
            </div>
            {/* <header className="specificHeader">
            </header > */}
            <div>
                {/* <p>Winner!</p> */}
                <div> {matchWinner ? <HamsterCardDisplayOnly hamster={matchWinner} /> : 'nodata'}
                </div>
                <a href="/battle">
                    <button> New battle!</button>
                </a>
            </div>
        </div >
    );

}

export default LastGame;