import React, { Component } from 'react';
import Die from './Die'
import Button from './Button'

class RollDice extends Component {
    state = { 
        first: 1,
        firstDie: 'one',
        second: 1,
        secondDie: 'one'
    }

    

    randomNumber = () => {
        console.log('click')
        const terms = ['', 'one', 'two', 'three', 'four', 'five', 'six']
        let number1 = Math.floor(Math.random() * 6) + 1
        let number2 = Math.floor(Math.random() * 6) + 1
        this.setState(
            { 
                first: number1,
                firstDie: terms[number1],
                second: number2,
                secondDie: terms[number2]
            });
    }

    

    render() { 
        return ( 
            <div>
                <Die value={this.state.firstDie}/>
                <Die value={this.state.secondDie}/>
                <div>
                    <Button shake={this.randomNumber}/>
                </div>
            </div>
        );
    }
}

export default RollDice;


