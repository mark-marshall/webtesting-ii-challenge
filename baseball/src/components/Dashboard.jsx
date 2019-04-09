import React from 'react';

function Dashboard({ fireStrike, fireBall, fireFoul, fireHit }) {
    return (
        <>
         <button onClick={fireStrike}>Add Strike</button>
         <button onClick={fireBall}>Add Ball</button>
         <button onClick={fireFoul}>Add Foul</button>
         <button onClick={fireHit}>Add Hit</button>
        </>
    )
}

export default Dashboard;
