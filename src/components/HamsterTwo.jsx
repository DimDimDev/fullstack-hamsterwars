import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import './Components.css'
import HamsterCard from './HamsterCard'


const HamsterTwo = ({ hamster2, setHamster2, postResult }) => {
    const { id2 } = useParams();
    const paramsUrl = `api/hamsters/${id2}`
    const randomUrl = 'api/hamsters/random';

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(id2 ? paramsUrl : randomUrl);
            const json = await response.json();
            setHamster2(json);
            console.log(json)
            console.log(id2)
        }

        fetchData();
    }, [id2, paramsUrl, randomUrl, setHamster2])

    return (
        <div>{hamster2 ?
            <div>
                {/* <h2>{hamster2.name}</h2> */}
                <HamsterCard hamster={hamster2} postResult={postResult} />
            </div> : 'nodata'}
        </div>
    )
}

export default HamsterTwo;