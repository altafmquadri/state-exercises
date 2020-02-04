import React from 'react';
import './Button.css'

const Button = (props) => {
    return (
        <button onClick={props.shake}
        disabled={props.isRolling}>
            {props.isRolling ? 'Rolling...' : 'Roll Dice'}
        </button>
    )
}

export default Button;