import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            number: 0,
            buttonDisplay: true
        }
    }

    randomWinner = (e) => {
        let number = this.randomNumGenerator()
        this.setState({ number  },() => {
            if (this.state.number === 7) {
                this.setState({ buttonDisplay: false })
            }
        })
    }

    randomNumGenerator = () => {
        let number = Math.floor(Math.random() * 10) + 1
        return number
    }

    render() { 
        return ( 
            <div>
                <h1>Number is {this.state.number}</h1>
                {this.state.buttonDisplay 
                ? 
                <button onClick={this.randomWinner}>Random Number Generator</button>
                : 
                <h1>You Win!!!</h1>}
            </div>
        );
    }
}

export default Button;