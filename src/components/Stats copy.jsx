import React from 'react';
import TotalGames from './TotalGames';
import TopFiveHamsters from './TopFiveHamsters'
import BottomFiveHamsters from './BottomFiveHamsters'

const Stats = () => {

    return (
        <div>
            <h2>Total games</h2>
            <TotalGames />
            <h2>Top 5</h2>
            <TopFiveHamsters />
            <h2>Bottom 5</h2>
            <BottomFiveHamsters />
        </div>
    )
}

export default Stats;