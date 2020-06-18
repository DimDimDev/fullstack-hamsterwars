import React from 'react';
import './Components.css'


const Start = () => {

    return (
        <div>
            <h1>
                Wellcome to Hamsterwars!
            </h1>
            <p>One hamster to rule them all... </p>
            <a className="StartButton" href="/battle">New Battle!
                </a>
        </div>
    )
}
export default Start;