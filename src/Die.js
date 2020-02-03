import React from 'react';

const Die = (props) => {
    return (
        <div>
            <i style={{color: 'blue'}} 
            className={`fas fa-dice-${props.value} fa-10x`}></i>
        </div>
    )
}

export default Die;