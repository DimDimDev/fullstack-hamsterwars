import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Components.css'
import HamsterCard from './HamsterCard'


const HamsterOne = ({ hamster1, setHamster1, postResult }) => {
    const { id1 } = useParams();
    const paramsUrl = `api/hamsters/${id1}`;
    const randomUrl = 'api/hamsters/random';

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
                <HamsterCard hamster={hamster1} postResult={postResult} />
            </div> : 'nodata'}
        </div>
    )
}

export default HamsterOne;