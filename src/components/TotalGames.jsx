import React, { useState, useEffect } from 'react';

const TotalGames = () => {
    const url = 'api/stats/total';
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const json = await response.json();
            setData({ TotalGames: json.gamesArray });
        }
        fetchData();
    }, [])
    return (
        <div>
            {data ? <h1>Total games: {data.TotalGames.length}</h1> : 'no data'}
        </div>
    );
}

export default TotalGames;