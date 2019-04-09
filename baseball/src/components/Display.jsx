import React from 'react';

function Display({ strike, ball }) {
    return (
        <div>
            <p>
            <span>Strikes: {strike}</span>
            <span>Balls: {ball}</span>
            </p>
        </div>
    )
}

export default Display
