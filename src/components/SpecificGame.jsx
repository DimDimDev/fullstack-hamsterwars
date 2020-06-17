import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HamsterCardDisplayOnly from './HamsterCardDisplayOnly'
import './Components.css'

const SpecificGame = () => {
    const { id1, id2 } = useParams();
    const url = '/api/games/' + id1 + '/' + id2
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
        <div className="markering">
            <div>{timeStamp ?
                <h2>{timeStamp}</h2> : 'no data'}
            </div>
            <header className="specificHeader">
                <div>{contestantOne ?
                    <h2>{contestantOne.name}</h2> : 'no data'}
                </div>
                <h1>VS</h1>
                <div>{contestantTwo ?
                    <h2>{contestantTwo.name}</h2> : 'no data'}
                </div>
            </header>
            <div>
                <h1>WINNER!</h1>
                <div> {matchWinner ? <HamsterCardDisplayOnly hamster={matchWinner} /> : 'nodata'}
                </div>
            </div>
        </div>
    );

}

export default SpecificGame;