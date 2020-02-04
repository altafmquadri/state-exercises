import React, { Component } from 'react';
import './RollDice.css'
import Die from './Die'
import Button from './Button'

class RollDice extends Component {
    state = { 
        firstDie: 'one',
        secondDie: 'one',
        isRolling: false
    }

    randomNumber = () => {
        console.log('click')
        const terms = ['', 'one', 'two', 'three', 'four', 'five', 'six']
        let number1 = Math.floor(Math.random() * 6) + 1
        let number2 = Math.floor(Math.random() * 6) + 1
        this.setState(
            { 
                firstDie: terms[number1],
                secondDie: terms[number2],
                isRolling: true
            }, () => setTimeout(() => this.setState({ isRolling: false }), 1000))
    }

    render() { 
        return (
            <div>
                <div className="Dice-container">
                <Die value={this.state.firstDie} isRolling={this.state.isRolling}/>
                <Die value={this.state.secondDie} isRolling={this.state.isRolling}/>
            </div>
                <div className="Dice-button">
                    <Button 
                    shake={this.randomNumber}
                    isRolling={this.state.isRolling}/>
                </div>
            </div> 
        )
    }
}

export default RollDice;


