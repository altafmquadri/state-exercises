import React from 'react';

const Button = (props) => {
    return (
        <button onClick={props.shake}>
            Roll Dice!
        </button>
    )
}

export default Button;