import React from 'react';
import Button from '@material-ui/core/Button';
import './Components.css'


const Start = () => {

    return (
        <div>
            <h1>
                Wellcome to Hamsterwars!
            </h1>
            <p>One hamster to rule them all... </p>
            <a href="/battle">
                <Button color="primary" variant="contained">START BATTLE!</Button>
            </a>
        </div>
    )
}
export default Start;