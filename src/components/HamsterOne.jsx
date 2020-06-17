import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Components.css'
import HamsterCard from './HamsterCard'


const HamsterOne = ({ hamster1, setHamster1, postResult }) => {
    const { id1 } = useParams();
    const paramsUrl = 'http://localhost:3000/hamsters/' + id1;
    const randomUrl = 'http://localhost:3000/hamsters/random';

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(id1 ? paramsUrl : randomUrl);
            const json = await response.json();
            setHamster1(json);
        }

        fetchData();
    }, [id1, paramsUrl, randomUrl, setHamster1])


    return (
        <div>{hamster1 ?
            <div>
                {/* <h2>{hamster1.name}</h2> */}
                <HamsterCard hamster={hamster1} postResult={postResult} />
            </div> : 'nodata'}
        </div>
    )
}

export default HamsterOne;