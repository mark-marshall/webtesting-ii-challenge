import React from 'react';

function Dashboard({ fireStrike, fireBall, fireFoul, fireHit }) {
    return (
        <>
         <button onClick={fireStrike}>Strike</button>
         <button onClick={fireBall}>Ball</button>
         <button onClick={fireFoul}>Foul</button>
         <button onClick={fireHit}>Hit</button>
        </>
    )
}

export default Dashboard;
