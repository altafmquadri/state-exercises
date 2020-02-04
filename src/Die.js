import React from 'react';
import './Die.css'

const Die = (props) => {
    return (
        <div className="Dice">
            <i style={{color: 'blue'}} 
            className={`fas fa-dice-${props.value} fa-10x ${props.isRolling ? 'rolling' : ''}`}></i>
        </div>
    )
}

export default Die;